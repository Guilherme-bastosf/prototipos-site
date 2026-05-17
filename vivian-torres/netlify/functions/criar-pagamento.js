// Netlify Function - Criar preferência de pagamento Mercado Pago
const ACCESS_TOKEN = "APP_USR-2376964981712871-051717-51f0008cf52c7910631d78f85b16415b-2634772405";

exports.handler = async (event) => {
  // CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  try {
    const data = JSON.parse(event.body);

    // Validações
    if (!data.titulo || !data.total || !data.reserva_id) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Dados incompletos" }) };
    }

    // Criar preferência no Mercado Pago
    const preference = {
      items: [{
        title: data.titulo,
        description: `Reserva ${data.reserva_id} | ${data.checkin} a ${data.checkout} | ${data.noites} noites`,
        quantity: 1,
        currency_id: "BRL",
        unit_price: data.total
      }],
      payer: {
        name: data.nome || "",
        email: data.email || "",
      },
      external_reference: data.reserva_id,
      back_urls: {
        success: data.site_url + "?pagamento=sucesso&reserva=" + data.reserva_id,
        failure: data.site_url + "?pagamento=falha&reserva=" + data.reserva_id,
        pending: data.site_url + "?pagamento=pendente&reserva=" + data.reserva_id
      },
      auto_return: "approved",
      notification_url: data.site_url + "/.netlify/functions/webhook-pagamento",
      statement_descriptor: "KT Imoveis",
      expires: true,
      expiration_date_to: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().replace('Z', '-03:00')
    };

    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + ACCESS_TOKEN
      },
      body: JSON.stringify(preference)
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("MP Error:", result);
      return { statusCode: 500, headers, body: JSON.stringify({ error: "Erro ao criar pagamento", details: result }) };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        id: result.id,
        init_point: result.init_point,
        sandbox_init_point: result.sandbox_init_point
      })
    };
  } catch (error) {
    console.error("Error:", error);
    return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
  }
};
