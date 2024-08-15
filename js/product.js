let product;

async function fetchProduct(){
    console.log(window.location.search);
    const urlParams= new URLSearchParams(window.location.search)
    const id=urlParams.get("id")
    const res=await fetch(`https://dummyjson.com/products/${id}`)
     product=await res.json()

    document.getElementById("main-image").src= product.thumbnail
    str=``
    desc=``
    product.images.map((image)=>{
        str+=`<div class="pro-card">
                <img src="${image}" alt="no-image" onmouseover="changePic('${image}')">
             </div>
            
             `
})
    document.getElementById("card").innerHTML=str

    document.getElementById("category").textContent=`${product.category.toUpperCase()}`
    document.getElementById("title").textContent=`${product.title}`
    document.getElementById("description").textContent=`${product.description}`
    document.getElementById("rating").innerHTML=`<span><button class="ratingss">${product.rating} <span><i class="fa-solid fa-star"></i></span></button></span>`
    document.getElementById("discount-price").textContent=`$${product.price}`
    document.getElementById("original-price").textContent=`$${Math.ceil(product.price*100/product.discountPercentage)}`
    document.getElementById("discount-percentage").textContent=`${product.discountPercentage}%OFF`
    document.getElementById("details").innerHTML=`<p style="margin-bottom:10px;"><b>Brand: </b>${product.brand}</p>
                                        <p style="margin-bottom:10px;"><b>sku: </b>${product.sku}</p>
                                        <p style="margin-bottom:10px;"><b>Warranty Information: </b>${product.warrantyInformation}</p>
                                        <p style="margin-bottom:10px;"><b>Shipping Information: </b>${product.shippingInformation}</p>`


    }

fetchProduct()
function changePic(image){
    document.getElementById("main-image").src=image

}


// add to cart 

async function addToCart(){
     
    localStorage.setItem(product.id,JSON.stringify(product))
    
    window.location.href='../pages/cart.html'
}
async function buynow(){
    alert("YOUR PRODUCT PURCHASED SUCCESSFULY");
}