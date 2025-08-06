import products from "./products.js";  

const productList = document.getElementById('product-list');
const categoryFilter = document.getElementById('categoryFilter');
const minPrice = document.getElementById('minPrice');
const maxPrice = document.getElementById('maxPrice');
const applyFilterBtn = document.getElementById('applyFilter');
// load cart count from localStorage

function updateCartCount(){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((sum,item)=> sum + item.qty, 0);      //array method
    document.getElementById('cartCount').textContent = count;       
}

//ADD to cart 
function addToCart(product){
    let cart = JSON.parse(localStorage.getItem('cart')) || [] ;
    const index = cart.findIndex(item => item.id === product.id);       //array method
    if(index !== -1){
        cart[index].qty+=1; 
    }else{
        cart.push({...product, qty:1});        //update the state of variable 
    }
    localStorage.setItem('cart',JSON.stringify(cart));
    updateCartCount();
    alert(`${product.item} added to cart`);
}

//render product to card
function renderProducts(filteredProducts){
    productList.innerHTML='';
    if(filteredProducts.length == 0){
        productList.innerHTML = `<p class="text-muted">No Product available</p>`
        return;
    }
    filteredProducts.forEach(product => {
        const col = document.createElement('div')
        col.className = 'col-sm-6 col-md-4 col-lg-4 col-lg-4 mb-4';
        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img 
                    src="${product.thumbnail}"
                    class="card-img-top"
                    alt="${product.title}"
                />
                <div class="card-body d-flex flex-column">
                    <h4 class="card-title">${product.title}</h4>
                    <p class="card-text small text-muted">${product.brand}</p>
                    <p class="card-text mb-1 fw-semibold text-primary">₹${product.price.toFixed(
                      2
                    )}</p>
                    <p class="text-muted small mb-2">${
                      product.availabilityStatus
                    }</p>
                    <button class="btn btn-outline-primary mt-auto" data-id="${
                      product.id
                    }">
                        Add To cart
                    </button>
                </div>
            </div>
        `;
                    
        const button = col.querySelector('button');
        button.addEventListener('click', () => addToCart(product));
        productList.appendChild(col);
    });
    updateCartCount();
}

//populate categories in the filter

function populate(){
    const categories = [...new Set(products.map(p => p.category))];
    categories.forEach(cat =>{
        const option =document.createElement('option');
        option.value = cat;
        option.textContent = cat.charAt(0).toUpperCase()+cat.slice[1];
        categoryFilter.appendChild(option);
    })
}

//apply filter
function filterProduct(){
    const seletedCategory = categoryFilter.value;
    const min = parseFloat(minPrice.value) || 0;
    const max = parseFloat(maxPrice.value) || Infinity;
    const filtered = products.filter(p =>{
        const inCategory = seletedCategory === 'All' || p.category === seletedCategory;
        const inPrice = p.price >= min && p.price <= max;
        return inCategory && inPrice;
    })
    renderProducts(filtered);
}
applyFilterBtn.addEventListener('click', filterProduct);

// Initial render
populate();
renderProducts(products);
updateCartCount();
// renderProducts();