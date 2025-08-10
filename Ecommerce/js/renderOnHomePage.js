import products from './products.js';
const productList = document.getElementById('trendingProducts')
const trending3 = products.filter(product => product.id<=3);

trending3.forEach(product =>{
    const newCard = document.createElement('div');
    newCard.className = "col-sm-2 col-md-3 col-lg-4";
    newCard.innerHTML=`
                        <div class="card h-100 shadow-sm">
                            <img 
                                src="${product.thumbnail}"
                                class="card-img-top"
                                alt="${product.title}"
                            />
                            <div class="card-body p-2 d-flex flex-column">
                                <h2 class="card-title">${product.title}</h2>
                                <p class="card-text text-muted fw-semibold">${product.brand}</p>
                                <p class="card-text text-primary">${product.price}</p>
                                <button class="btn btn-outline-primary mt-auto">Add to Cart</buttton>
                            </div>
                        </div>
    `;
    productList.appendChild(newCard)
})