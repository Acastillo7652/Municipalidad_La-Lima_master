document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close');

    // Mostrar la ventana emergente después de 2 segundos
    setTimeout(function () {
        popup.style.display = 'flex';
    }, 2000);

    // Cerrar la ventana emergente al hacer clic en la 'x'
    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    // Cerrar la ventana emergente al hacer clic fuera del contenido
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
