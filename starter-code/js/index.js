// ITERATION 1

function updateSubtotal($product) {
  const quantity = $product.querySelector('.quantity')
  const price = $product.querySelector('.price')
  const subtotal = $product.querySelector('.subtotal')
  const priceValue = parseFloat(price.children [0].innerHTML)
  const quantityValue = parseInt(quantity.querySelector('input').value)
  subtotal.children[0].innerHTML = priceValue*quantityValue
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll('.product')
  products.forEach(updateSubtotal)
  // ITERATION 3
  const total = Array.from(products).reduce(function (sum, product) {
    sum += parseFloat(product.querySelector('.subtotal').children[0].innerHTML)
    return sum;
  }, 0)
  document.getElementById('total-value').children[0].innerHTML = total
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});

// ITERATION 4

function productRemoveListener(event) {
  // ...
}

// ITERATION 5

function createProduct(event) {
  // ...
}
