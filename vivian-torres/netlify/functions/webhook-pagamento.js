// Netlify Function - Webhook do Mercado Pago (recebe notificação de pagamento)
const ACCESS_TOKEN = "APP_USR-2376964981712871-051717-51f0008cf52c7910631d78f85b16415b-2634772405";

// Firebase Admin - usando REST API
const FIREBASE_URL = "https://kt-imoveis-default-rtdb.firebaseio.com";

exports.handler = async (event) => {
  const headers = { "Content-Type": "application/json" };

  if (event.httpMethod !== "POST") {
    return { statusCode: 200, headers, body: "ok" };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const params = event.queryStringParameters || {};

    // Mercado Pago envia type=payment e data.id
    const type = body.type || body.action || params.type;
    const paymentId = body.data?.id || params["data.id"];

    if (type === "payment" && paymentId) {
      // Buscar detalhes do pagamento no MP
      const mpResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        headers: { "Authorization": "Bearer " + ACCESS_TOKEN }
      });
      const payment = await mpResponse.json();

      if (payment.status === "approved") {
        const reservaId = payment.external_reference;
        if (reservaId) {
          // Atualizar reserva no Firebase
          await fetch(`${FIREBASE_URL}/reservas/${reservaId}.json`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              status: "paga",
              pagamento: payment.payment_method_id || "online",
              pagamento_id: String(paymentId),
              pagamento_status: "aprovado",
              pagamento_data: new Date().toISOString()
            })
          });
          console.log(`Reserva ${reservaId} marcada como PAGA`);
        }
      }
    }

    return { statusCode: 200, headers, body: "ok" };
  } catch (error) {
    console.error("Webhook error:", error);
    return { statusCode: 200, headers, body: "ok" };
  }
};
