

// memory cost
document.getElementById('base-cost').addEventListener('click', function () {
    document.getElementById('add-memory-cost').innerText = 0;
    updateTotal()

});
document.getElementById('include-extra-cost').addEventListener('click', function () {
    document.getElementById('add-memory-cost').innerText = 180;
    updateTotal()
});

// storage cost 
document.getElementById('base-storage-cost').addEventListener('click',
    function () {
        document.getElementById('extra-storage-cost').innerText = 0;
        updateTotal()
    });
document.getElementById('storage-cost').addEventListener('click',
    function () {
        document.getElementById('extra-storage-cost').innerText = 100;
        updateTotal()
    });
document.getElementById('another-storage-cost').addEventListener('click',
    function () {
        document.getElementById('extra-storage-cost').innerText = 180;
        updateTotal()
    });
// delivery cost 
document.getElementById('base-delivery-charge').addEventListener('click',
    function () {
        document.getElementById('shipping-cost').innerText = 0;
        updateTotal()
    });

document.getElementById('extra-delivery-charge').addEventListener('click',
    function () {
        document.getElementById('shipping-cost').innerText = 20;
        updateTotal()
    });
// total price 





function updateTotal() {
    const memoryCost = parseInt(document.getElementById('add-memory-cost').innerText)
    const storageCost = parseInt(document.getElementById('extra-storage-cost').innerText)
    const shippingCost = parseInt(document.getElementById('shipping-cost').innerText)
    const total = memoryCost + storageCost + shippingCost + 1299;

    document.getElementById('total-price').innerText = total;
}
