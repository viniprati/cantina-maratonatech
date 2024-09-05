document.addEventListener("DOMContentLoaded", function() {
    const menuItems = [

    ];

    const menuGrid = document.getElementById("menu-grid");

    menuItems.forEach(menu => {

    });

    document.getElementById('paymentForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch('/pagar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (result.qr_code_base64) {
            document.getElementById('qrCode').src = result.qr_code_base64;
            alert('Pagamento iniciado com sucesso! Código de pagamento: ' + result.payment_code);
        } else {
            alert('Erro ao iniciar pagamento');
        }
    });
});
