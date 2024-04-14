function calcularTotal() {
    const precioProducto1 = 45;
    const precioProducto2 = 50;
    const precioProducto3 = 35;
    const cantidadProducto1 = parseInt(document.getElementById("item1").value);
    const cantidadProducto2 = parseInt(document.getElementById("item2").value);
    const cantidadProducto3 = parseInt(document.getElementById("item3").value);

    const subtotal = (precioProducto1 * cantidadProducto1) + (precioProducto2 * cantidadProducto2) + (precioProducto3 * cantidadProducto3);
    const iva = subtotal * 0.16; // Suponiendo un IVA del 16%
    const total = subtotal + iva;

    document.getElementById("cantSubtotal").textContent = subtotal;
    document.getElementById("cantIva").textContent = iva;
    document.getElementById("cantTotal").textContent = total.toFixed(2);
}


document.getElementById("item1").addEventListener("input", calcularTotal);
document.getElementById("item2").addEventListener("input", calcularTotal);
document.getElementById("item3").addEventListener("input", calcularTotal);


document.querySelector("h1").addEventListener("mouseover", function() {
    this.style.color = "black";
    this.textContent = "Cupon de regalo: EMI1002081"
});