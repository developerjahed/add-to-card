const displayLocalStorageCart=()=>{
  const cart=getCart();
  for(const name in cart){
      displayProduct(name)
  }
  
}


const addItem=()=>{
   const productName=document.getElementById('productName');
   const name=productName.value;
   if(!name){
       return;
   }

// display in the ui
   displayProduct(name);
//    add to local storage
addProductToCart(name);
   productName.value='';
}
const displayProduct=name=>{
    const ul=document.getElementById('products');
    const li=document.createElement('li');
    li.innerText=name;
    ul.appendChild(li);
}

const getCart=()=>{
   const cart= localStorage.getItem('cart');
   let cartObj;
   if(cart){
     cartObj=JSON.parse(cart);
   }else{
       cartObj={};
   }
   return cartObj;
}

const addProductToCart=name=>{
    const cart=getCart();
    cart [name]=1;
    console.log(cart);
    const cartSrtingified=JSON.stringify(cart);
    localStorage.setItem('cart', cartSrtingified);
}
displayLocalStorageCart();