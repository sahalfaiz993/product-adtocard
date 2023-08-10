const product = [
  {
    id: 0,
    image: "./images/5.jpeg",
    title: `MacBook`,
    price: 2000,

  },

  {
    id: 1,
    image: `./images/6.jpeg`,
    title: `PlayStation`,
    price: 3000,

  },
  {
    id: 2,
    image: `./images/7.jpeg`,
    title: `AirPods`,
    price: 34000,

  },

  {
    id: 3,
    image: `./images/8.jpeg`,
    title: `New Tshirt`,
    price: 400,

  },
  {
    id: 4,
    image: `./images/5.jpeg`,
    title: `New Tshirt`,
    price: 400,

  },
];

const categories = [...new Set(product.map((item) => { return item }))]
let i = 0

document.getElementById('root').innerHTML = categories.map((item) => {
  var { image, title, price } = item;
  return (`
  <div class='box'>
  <div class='img-box'>
  <img class='images' src=${image}></img>
  </div>
  <div class='bottom'>
  <p>${title}</p>
  <h2>$ ${price}</h2> 
    <button onclick= 'addtocart("${i++}")'>Add to cart </button>
    </div>
  </div>`
  )
}).join('')

var cart = [];
function addtocart(a) {
  swal("Good job!", "You clicked the button!", "success");
  cart.push({ ...categories[a] });
  displaycart();
  document.querySelector(".slidebar").style.display = "block"
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}



function displaycart(a) {

  let j = 0, total = 0
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById('cartItem').innerHTML = "Your cart is empty"
    document.getElementById("total").innerHTML = 0;
  }
  else {
    document.getElementById("cartItem").innerHTML = cart.map((item) => {
      var { image, title, price } = item;
      total = Number(total + price);
      document.getElementById("total").innerHTML = total;

      return (`
    <div class 'cart-item'>
   <div class='row-img'>
   <img class = 'rowing' src=${image}>
   </div>
   <pn style = 'font-size:12px;'>${title}</p>
   <h2   style = 'font-size:15px;'>${price}.00</h2> 
        <i class='fa-solid fa-trash'  onclick='delElement(" + (j++) + ")'></i>></div>`
      )
    }).join('')






  }



}




