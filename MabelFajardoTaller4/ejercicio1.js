document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const nom = document.getElementById('nom').value.trim();
    const hora = document.getElementById('hora').value.trim();
    const valor = document.getElementById('valor').value.trim();

    const sueldo = hora * valor;
    document.getElementById('result').textContent = `${nom}, su salario de las horas trabajadas por el valor del pago por hora es: $ ${sueldo.toLocaleString('en-US')}`;

    document.getElementById('my-modal').classList.add('show');
});

document.getElementById('close-modal-btn-2').addEventListener('click', function () {
    document.getElementById('my-modal').classList.remove('show');
});

document.getElementById('borrar').addEventListener('click', function () {
    document.getElementById('nom').value = '';
    document.getElementById('hora').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('result').textContent = '';
});
