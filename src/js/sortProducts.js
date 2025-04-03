document.addEventListener('DOMContentLoaded', () => {
  const sortDropdown = document.getElementById('sort');
  const productList = document.getElementById('product-list');

  const products = Array.from(productList.children);

  sortDropdown.addEventListener('change', (event) => {
    const sortBy = event.target.value;

    const sortedProducts = products.sort((a, b) => {
      if (sortBy === 'name') {
        const nameA = a.querySelector('.card__name').textContent.trim().toLowerCase();
        const nameB = b.querySelector('.card__name').textContent.trim().toLowerCase();
        return nameA.localeCompare(nameB);
      } else if (sortBy === 'price') {
        const priceA = parseFloat(a.querySelector('.product-card__price').textContent.replace('$', ''));
        const priceB = parseFloat(b.querySelector('.product-card__price').textContent.replace('$', ''));
        return priceA - priceB;
      }
    });

    productList.innerHTML = '';
    sortedProducts.forEach((product) => productList.appendChild(product));
  });
});
