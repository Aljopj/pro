
function displayCartItems(){
    str=``
    if(localStorage.length==0){
    window.location.href='../index.html'

    }
    else{
        for(i=0;i<localStorage.length;i++){
            const key =localStorage.key(i);
            const product = JSON.parse(localStorage.getItem(key));
             str+=`
            <div>
                <div class="men-card">
                    <div class="image">
                        <img src="${product.thumbnail}" alt="">
                    </div>
                    <div class="content">
                        <h3 class="son">${product.id}</h3>  
                        <h5 class="category">${product.category.toUpperCase()}</h5>
                        <h4>${product.title.length>=20?`${product.title.substring(0,20)}...`:product.title}</h4>
                        <div> <span><button class="ratings">${product.rating} <span><i class="fa-solid fa-star"></i></span></button></span></div>
                        <span class="discount-price">$${product.price}</span>
                        <span class="original-price">$${Math.ceil(product.price*100/product.discountPercentage)}</span>
                        <span class="discount-percentage">${product.discountPercentage}% OFF</span>
    
                       
                  
                    </div>
    
                    <div class="content-buttons">
                        <button class="remove-btn" onclick="removeItem(${key})">REMOVE</button>
                       
                    </div>
              
                </div>
            </div>`
    
            
    
        }
        document.getElementById("products").innerHTML=str
    }

}


displayCartItems()

function removeItem(key){
          
            localStorage.removeItem(key);
            displayCartItems()
    
}


