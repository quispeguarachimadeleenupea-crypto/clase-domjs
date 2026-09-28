const botonesAgregar = document.querySelectorAll('.btn-agregar');
const cuerpoCarrito = document.querySelector('#cuerpo-carrito');
const totalCarrito = document.querySelector('#total-carrito');

let carrito = [];

botonesAgregar.forEach((boton) => {
    boton.addEventListener('click', () => {

        const nombre = boton.dataset.nombre;
        const precio = Number(boton.dataset.precio);

        carrito.push({
            nombre: nombre,
            precio: precio
        });

        mostrarCarrito();
    });
});

function mostrarCarrito() {

    cuerpoCarrito.innerHTML = '';

    let total = 0;

    carrito.forEach((producto, indice) => {

        total += producto.precio;

        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${indice})">
                    Eliminar
                </button>
            </td>
        `;

        cuerpoCarrito.appendChild(fila);
    });

    totalCarrito.textContent = total;
}

function eliminarProducto(indice) {
    carrito.splice(indice, 1);
    mostrarCarrito();
}