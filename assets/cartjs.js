let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];
console.log(basket)
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  console.log(cartIcon)
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
console.log(cartIcon)
};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
 let { id, item } = x;
 // let search = allData.find((y) => y.id == id) || [];
 //console.log(search)
             
             let mearch=allData.filter((z)=>{
              
              if(z.id == id){
               //  console.log(z)
               return z
            }
               }) 
               console.log(basket.length)
             console.log(mearch)
                return `
         <div class="cart-item">
         <img width="100" src=${mearch[0].img[0]} data-id=${mearch[0].id} alt="" />
         <div class="details">
 
           <div class="title-price-x">
               <h4 class="title-price">
                 <p>${mearch[0].name}</p>
                 <p class="cart-item-price">$ ${mearch[0].price}</p>
               </h4>
               <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
           </div>
 
           <div class="buttons">
               <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
           
 
               <div id=${id} class="quantity">${item}</div>
               <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
           </div>
 
           <h3>$ ${item * mearch[0].price}</h3>
         </div>
       </div>`
            
          }).join(""))

             
    

   





  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="index.html">
      <button class="HomeBtn">Back to home</button>
    </a>
    `;
  }
};

generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
  calculation()
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
  calculation()
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
  calculation()
};

let clearCart = () => {
  basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
  calculation()
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = allData.find((y) => y.id == id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    label.innerHTML = `
    <h2>Total Bill : $ ${amount}</h2>
    <button class="checkout">Checkout</button>
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    `;
  } else return;
};

TotalAmount();




