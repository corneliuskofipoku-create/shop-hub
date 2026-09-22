const buttons=document.querySelectorAll('.filter');
const products=document.querySelectorAll('.product');
const count=document.getElementById('resultCount');
let cart=0;

buttons.forEach(button=>{
  button.addEventListener('click',()=>{
    buttons.forEach(b=>b.classList.remove('active'));
    button.classList.add('active');
    const filter=button.dataset.filter;
    let visible=0;
    products.forEach(product=>{
      const show=filter==='All'||product.dataset.category===filter;
      product.style.display=show?'block':'none';
      if(show) visible++;
    });
    count.textContent=`${visible} product${visible===1?'':'s'}`;
  });
});

function addToCart(name){
  cart++;
  document.getElementById('cartCount').textContent=cart;
  const toast=document.getElementById('toast');
  toast.textContent=`${name} added to cart`;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),1800);
}
function showCart(){
  const toast=document.getElementById('toast');
  toast.textContent=cart?`You have ${cart} item${cart===1?'':'s'} in your cart`:'Your cart is empty';
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),1800);
}
