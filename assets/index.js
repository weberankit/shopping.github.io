
const productShow=document.querySelector(".container-largeview-product")
const inputEl=document.querySelector(".search-input")
console.log(inputEl.value)
const btnSearch=document.querySelector(".search-btn")
const autoList=document.querySelector(".list-search")

/*
const navIcon=document.querySelector(".nav-icon")
if(window.innerWidth<700){
  <div class="nav-icon"><i class="fa-solid fa-bars"></i></div>
}
*/












//search suggestion
function loadData(data,element){
  if(data){
    element.innerHTML=" "
    console.log("hii")
  }
  let innerElement=""
  data.forEach((item)=>{
 innerElement +=`<li>${item}</li>`
    })
  element.innerHTML=innerElement 
  console.log(element)
let selectList=document.querySelectorAll(".list-search li")
selectList= Array.from(selectList)
console.log(selectList)
selectList.forEach(item=>{
  item.addEventListener("click",(e)=>{
  
    inputEl.value=e.currentTarget.textContent
    autoList.innerHTML=""
})
})
}
function filterData(data,search){
  return data.filter((x)=>x.toLowerCase().includes(search.toLowerCase()))
}
inputEl.addEventListener("input",()=>{
const filteredData=filterData(searchData,inputEl.value)
loadData(filteredData,autoList)
})


btnSearch.addEventListener("click",()=>{
  autoList.innerHTML=""
})


/**/
//filter item by seaching
function find(wordMatch,items){
return items.filter(item=>{

  console.log((item.category)==wordMatch)
/*
if((item.category)==wordMatch){
  
  console.log(item)
  return item
}

 
const regex=new RegExp(wordMatch,'gi')
if(item.category.match(regex)){

    return item
  
}
*/





 if(!(item.category.match(wordMatch)) ){
  console.log("not matching")
 return 
}else{
 //return item.category.match(wordMatch)
 const regex=new RegExp(wordMatch,'gi')
return item.category.match(regex) 
 }
 })
}

btnSearch.addEventListener("click",()=>{

let matchArray=find(inputEl.value,allData)
  console.log(matchArray)
////to remove space from input-field
inputEl.value=inputEl.value.trim()
if(!inputEl.value){
  console.log("hi")
}else{
  

 

  return(
  allItem.innerHTML=matchArray.map((item)=>{
    let  {id,name,price,desc,img}=item
    let search=basket.find((items)=>items.id===id) ||[];

    
    return returnItem(id,img,name,desc,price,search)
    })
    .join("")
    ////)
   



  )
}

})





//after click on  search item open in  bigger size
////function for large viw img change
 function largeSizeImg(element1,element2nd){
  let incrementImg=0
 element1.addEventListener("click",(e)=>{
   //console.log(imgViewLarge,"img",imgViewLarge.dataset.id)
 allData.forEach((item)=>{
   //console.log(imgViewLarge.dataset.id)
 if(item.id==element2nd.dataset.id){
  
 incrementImg=incrementImg+1
 if(incrementImg>=item.img.length){
   incrementImg=0
 }
   //console.log(item.img[incrementImg])
   element2nd.src=item.img[incrementImg]
 }
 
 })
 })
 }

//function for img movement show as img changes
 function imgsideChange(index){
  const boxSelect=productShow.querySelector(".box-img")
  let btnBox=productShow.querySelector(".img-view")
allData[index].img.map(()=>{
boxSelect.innerHTML+=`<div class="boxs box-1"></div>`
  })
const selectBox=boxSelect.querySelectorAll(".boxs")

let incrBoxBgm=0
selectBox[incrBoxBgm].classList.add("add-bgm")
btnBox.addEventListener("click",()=>{
  
  selectBox[incrBoxBgm].classList.remove("add-bgm")
  incrBoxBgm=incrBoxBgm+1
  if(incrBoxBgm>=allData[index].img.length){
   
    incrBoxBgm=0
  }

  selectBox[incrBoxBgm].classList.add("add-bgm")
})
}



btnSearch.addEventListener("click" ,()=>{
  console.log(allItem)
  let shopall=document.querySelectorAll(".shop div img")
  console.log(shopall)
shopall.forEach((item)=>{
  item.addEventListener("click",()=>{
    productShow.classList.add("contoflarge") 
  })
})

const selectitem=document.querySelectorAll(".item")
console.log("eeeee",selectitem)
selectitem.forEach((item,index)=>{
  item.addEventListener("click",()=>{
  console.log(index,"item",item.id.slice(11))
  let imgStore=item.children[0].src
let storeDetailProduct=item.children[3]
console.log(storeDetailProduct)
const stroeDeatail=storeDetailProduct.children
let storeTitle=stroeDeatail[0].textContent
let storePara=stroeDeatail[1].textContent
let storepricing=stroeDeatail[2].children
let priceProduct=storepricing[0].textContent
/**/
    productShow.innerHTML=`
     <div class="viewLarge">
      
    <div class="close-btn-largeimg"><i class="bi bi-x-square"></i></div>
    <div class="parent-para">
    <div class="image">  <img width="220" src=${imgStore} data-id=${item.id.slice(11)} alt=""></div>
    <div class="para">${storePara}</div>
    </div>
   
   <div class="flex">
    <div class="product-title">${storeTitle}</div>
    <div class="img-view" ><i class="bi bi-arrow-right-circle-fill"></i>
    <div class="box-img">
    </div>
    </div>
    <div class="price">Rs${priceProduct}</div>
    </div>
   
    <div class="reviews"></div>
    </div>
  `  

imgsideChange(index)









let imgView=productShow.querySelector(".img-view")
let imgViewLarge=productShow.querySelector(".image img")
largeSizeImg(imgView,imgViewLarge)
console.log(imgViewLarge.dataset.id)


  let closeBtnImg=productShow.querySelector(".close-btn-largeimg")
  console.log(closeBtnImg)
closeBtnImg.addEventListener("click",function(){
    productShow.classList.remove('contoflarge')
    console.log("hi")
  })


  })
})


})






function returnItem(id,img,name,desc,price,search){
  return`
  <div id=product-id-${id} class="item">
  <img width="220" class="item-img" src=${img[0]} alt="">
  <div class="img-position" ><i class="bi bi-arrow-right-circle-fill"></i></div>
  <div class="img-position-back"data-set=${id} ><i class="bi bi-arrow-left-circle-fill"></i></div>
  <div class="details">
<div class="product-info">
    <h3>${name}</h3>
    <div class="wishlist-icon" onclick="addWish(${id})" data-info=${[id,name,img[0],price]}><i class="fa-solid fa-heart"></i></div>
    
    </div>
    <p>${desc}</p>
    <div class="price-quantity">
      <h2>$ ${price} </h2>
      <div class="buttons">
        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
        <div id=${id} class="quantity">
        ${search.item === undefined ? 0 : search.item}
        </div>
        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
      </div>
    </div>
  </div>
  </div>
  `
}
//display colour wishlist after searching
btnSearch.addEventListener("click",()=>{
  displayColorWishHeart()
})


const allItem=document.querySelector(".all-item")
let basket= JSON.parse(localStorage.getItem("data")) ||[]
let generateItem=()=>{
return(
allItem.innerHTML=allData.map((item)=>{
let  {id,name,price,desc,img}=item

let search=basket.find((items)=>items.id===id) ||[];
return returnItem(id,img,name,desc,price,search)
})
.join("")
)
}


generateItem()





let wishProduct=allItem.querySelectorAll(".wishlist-icon")
let wishListItem=document.querySelector(".wishlist-item")

/*
wishProduct.forEach((items)=>{

  items.addEventListener("click",()=>{
  console.log(items.dataset.info)
let copydata=items.dataset.info.slice(0)
 
copydata=copydata.split(",")
console.log(copydata)
console.log(wishListItem)

wishListItem.innerHTML+=`
<div class="item-wish" data-id=${copydata[0]} >
<i class="bi bi-plus-lg"></i>
<li >${copydata[1]}</li>
<li >${copydata[2]}</li>
<li >${copydata[3]}</li>

</div>`






  })
})


*/
let storeListWish=[];

function addWish(id){
  

  console.log(id)
  let itemID=id
let search=storeListWish.find(item=>item.id===itemID.id) 
console.log(search)
if(search===undefined){
  storeListWish.push({
    id:itemID.id,
    color:"red"
 })
}else{
storeListWish = storeListWish.filter(function(item) {
    return item !== search
/*if(item!==search){
  console.log(storeListWish)
}*/

})
  

}
  console.log(storeListWish)
localStorage.setItem("wishlist",JSON.stringify(storeListWish));
//storeListWish= JSON.parse(localStorage.getItem("wishlist"))
//console.log()
/**/
wishListItem.innerHTML=storeListWish.map((item)=>{
  return displaywishList(item.id)
}).join("")


//renderListLocalstorage()
deleteItem()//to select all item so theat we can delererr
wishListCart()
displayWishCloseIcon()
displayColorWishHeart()



}















/*function to add wishlist item to cart



*/
function wishListCart(){

const itemAddedToCart=wishListItem.querySelectorAll(".list-add-cart")
console.log(itemAddedToCart)

itemAddedToCart.forEach((item)=>{
item.addEventListener("click",()=>{
item.innerHTML='<i class="fa-sharp fa-solid fa-check"></i>'


setInterval(()=>{
item.innerHTML='<i class="fa-sharp fa-solid fa-cart-shopping"></i>'
},1000)


  
  console.log(item)

  console.log(item.dataset.unique)
  let itemIdCart=item.dataset.unique
let searchItem=basket.find((itemlist)=>{
  if(itemlist.id===itemIdCart){
   return itemlist
 }
 })
console.log(searchItem,"searchItem",itemIdCart)

if(searchItem === undefined){
  basket.push({
    id:itemIdCart,
    item:1
  })

}else{
  searchItem.item+=1;
}

localStorage.setItem("data", JSON.stringify(basket));
calculation()

})


})
console.log("HI AM I ALE TO DO THIS")
}











function renderListLocalstorage(){
storeListWish= JSON.parse(localStorage.getItem("wishlist"))||[]

wishListItem.innerHTML=storeListWish.map((item)=>{
  return displaywishList(item.id)
}).join("")
deleteItem()////to select all item so theat we can delererr
wishListCart()
} 
renderListLocalstorage()






function displaywishList(items){
let wishdata;
wishdata= allData.map( itemList=>{
  if(items==itemList.id){
    console.log(itemList)
    showItem=itemList
return `
  <div data-unique=${items} class="list-detail">
  <div class="list-info">
  
  
  <ul><img width="22" src=${itemList.img[0]}> </ul>
  <ul>${itemList.name}</ul>
  </div>
<div class="list-add-cart" data-unique=${items}><i class="fa-sharp fa-solid fa-cart-shopping"></i></div>

  <div class="list-img">
     <ul class="wish-price">RS ${itemList.price}</ul>
 <ul class="list-delete" data-list=${items}><i class="fa-solid fa-xmark"></i></ul>


</div>
</div>
`
}
}).join("")

return wishdata


}
//function to delete wish list
/**/




let closeWishList=document.querySelector(".close-wishlist")
let openWishList=document.querySelector(".open-wishlist")
let wishBox=document.querySelector(".wishlist-item")
closeWishList.addEventListener("click",()=>{

  wishBox.classList.add("hide")
  openWishList.style.display="block"
  if(wishBox.classList.contains("hide")){
    wishBox.style.display="block" 

  }
  displayWishCloseIcon()
})
openWishList.addEventListener("click",()=>{
  openWishList.style.display="none" 

  wishBox.classList.remove("hide")
 if(!wishBox.classList.contains("hide")){
    wishBox.style.display="none"

  }
  
})

function displayWishCloseIcon(){
  let closeWishList=document.querySelector(".close-wishlist")
let wishBox=document.querySelector(".wishlist-item")
  let openWishList=document.querySelector(".open-wishlist")
  let wishListItem=document.querySelector(".wishlist-item")



  if(wishBox.children.length == 0){
    
    openWishList.style.display="none"
     closeWishList.style.display="none"


  }else{

    closeWishList.style.display="block"

    closeWishList.addEventListener("click",()=>{

     openWishList.style.display="block";
    })
    if(wishListItem.classList.contains("hide")){
      openWishList.style.display="block";
       console.log("back")
    }
    
  }
}



function deleteItem(){
let deleteawishItem=wishListItem.querySelectorAll(".list-delete")
deleteawishItem.forEach(item=>{
  item.addEventListener("click",(e)=>{
    console.log(item)
  storeListWish= storeListWish.filter(itemstore=>{
  return  itemstore.id!==item.dataset.list
  })
  console.log(storeListWish);
   localStorage.setItem("wishlist",JSON.stringify(storeListWish));
   /// storeListWish= JSON.parse(localStorage.getItem("wishlist"))
     renderListLocalstorage()
     displayWishCloseIcon()
     displayColorWishHeart()
  })
})
console.log(deleteawishItem)

}





function displayColorWishHeart(){
  let wishProduct=allItem.querySelectorAll(".wishlist-icon")

  wishProduct.forEach((item)=>{
    console.log(item)

  let storeColor=JSON.parse(localStorage.getItem("wishlist"))||[];
  const infoCopy=item.dataset.info.split(",")
  const idWishlistItem=infoCopy[0]
  let findColor=storeColor.find((idColor)=>{
  
    if(idColor.id==idWishlistItem){
     item.classList.add(".iconswish")
      return item
    }  
 })
 

console.log(findColor)

console.log(item)
if(findColor!==undefined){
  
// or  item.style.color="red"
 if(idWishlistItem==findColor.id){ item.style.color="red"}

}else{
  item.style.color="pink"
}

  })
  
  }


  displayColorWishHeart()
  
  
  






















/*console.log(generateItem()) plz correc t it*/
/*below herw to large-img something deleted*/
const selectImg=allItem.querySelectorAll(".item-img")
console.log(selectImg)
selectImg.forEach(item=>{
  item.addEventListener("click",(e)=>{
    //scrolling -features add-to-cart
    console.log(item,"fish",e.y,e.x)
    window.scrollTo(e.x , e.y)
    productShow.classList.add("contoflarge") 
    //increment("7eeeac")
  })
})




  function ImgChangeItem(){
const imgChangeBtn=allItem.querySelectorAll(".img-position")||[]
const backBtnImg=allItem.querySelectorAll(".img-position-back")||[]

let incr=0
imgChangeBtn.forEach((item,index)=>{
  item.addEventListener("click",()=>{
    const imgChangeSrc=item.parentElement.children[0]
    incr=incr+1
  allData.forEach((x,dataIndex)=>{
if(index===dataIndex){
  if(incr>=x.img.length){
    incr=0
   }
let ImgSrc=x.img
imgChangeSrc.src=ImgSrc[incr]
}
})
})
})

backBtnImg.forEach((item,index)=>{
  item.addEventListener("click",()=>{
    const imgChangeSrc=item.parentElement.children[0]
    incr=incr-1
    allData.forEach((x,dataIndex)=>{
   if(index===dataIndex){
      if(incr<0){
        incr=x.img.length-1
       }
       let ImgSrc=x.img
      imgChangeSrc.src=ImgSrc[incr]
      console.log("decre,e",incr)
}
   })
 })
})
  }
ImgChangeItem()
 

btnSearch.addEventListener("click",ImgChangeItem)

const addTocart=allItem.querySelector(".bi bi-plus-lg")
console.log(addTocart,"hey see this we are geeting our output")


let increment=(id)=>{
console.log("hi ia m ging there oyu can  alls join us",id)
let selectedItem=id
console.log(selectedItem,"selectite ")
let search=basket.find(item=>item.id===selectedItem.id)
if(search === undefined){
    basket.push({
        id:selectedItem.id,
        item:1
    })
}else{
    search.item+=1;
}
update(selectedItem.id);
localStorage.setItem("data", JSON.stringify(basket));
console.log(basket,selectedItem.id)
}
let decrement=(id)=>{
let selectedItem=id
let search=basket.find(item=>item.id === selectedItem.id)
if(search === undefined)return;
else if(search.item === 0)return
else{
    search.item -= 1;
}
update(selectedItem.id);
basket = basket.filter((x) => x.item !== 0);
// console.log(basket);
localStorage.setItem("data", JSON.stringify(basket));
}
let update = (id) =>{
    let search=basket.find(item=>item.id === id)
    console.log(search,id);
    console.log(document.getElementById(id))

document.getElementById(id).innerHTML=search.item

calculation()
}
let calculation=()=>{
let cartIcon=document.getElementById("cartAmount")
cartIcon.innerHTML=basket.map((items)=>items.item).reduce((x,y)=>x+y,0)
}
calculation()


//after click on item open in  bigger size

let allitemProduct=document.querySelectorAll(".all-item .item")
console.log(allitemProduct)

function clickLargeImage(){
allitemProduct.forEach((item,index)=>{
  
item.addEventListener("click",(id)=>{
 
  console.log(item.id,allData[index].id)
  console.log(item.id.slice(11))
let selecteditemID=item.id.slice(11)
if(selecteditemID===allData[index].id){
 
  productShow.innerHTML=`
  <div class="viewLarge">
 
  <div class="close-btn-largeimg"><i class="bi bi-x-square"></i></div>
<div class="parent-para">
<div class="image"><img width="220" data-id=${allData[index].id} src=${allData[index].img[0]} alt=""></div>
<div class="para">${allData[index].desc}</div>
</div>
<div class="flex">
<div class="product-title">${allData[index].name}</div>
<div class="img-view" ><i class="bi bi-arrow-right-circle-fill"></i>
<div class="box-img">
</div>
 </div>
  <div class="price">$ ${allData[index].price}</div>
  </div>
 
<div class="reviews"></div>
</div>
`
console.log("hello",allData[index].img)

imgsideChange(index)

}
/*

function imgsideChange(){
  const boxSelect=productShow.querySelector(".box-img")
  let btnBox=productShow.querySelector(".img-view")
allData[index].img.map(()=>{
boxSelect.innerHTML+=`<div class="boxs box-1"></div>`
  })
const selectBox=boxSelect.querySelectorAll(".boxs")

let incrBoxBgm=0
selectBox[incrBoxBgm].classList.add("add-bgm")
btnBox.addEventListener("click",()=>{
  
  selectBox[incrBoxBgm].classList.remove("add-bgm")
  incrBoxBgm=incrBoxBgm+1
  if(incrBoxBgm>=allData[index].img.length){
   
    incrBoxBgm=0
  }

  selectBox[incrBoxBgm].classList.add("add-bgm")
})
}


*/

let closeBtnImg=productShow.querySelector(".close-btn-largeimg")
console.log(closeBtnImg)
closeBtnImg.addEventListener("click",function(){
  productShow.classList.remove('contoflarge')
  console.log("hi")
})



let imgView=productShow.querySelector(".img-view")
let imgViewLarge=productShow.querySelector(".image img")

 

largeSizeImg(imgView,imgViewLarge)



})

})

//let closeBtnImg=productShow.querySelector(".close-btn-largeimg")
//console.log(closeBtnImg)


/*
  productShow.innerHTML=`
  <div class="image">  <img width="220" src=${img} alt=""></div>
  <div class="product-title">${item.name}</div>
  <div class="price">${item.price}</div>
  <div class="reviews"></div>
  
  
})

})

  `


*/

}
clickLargeImage()


console.log(clickLargeImage())




//after succesfful login login text change using loginflag
const classAdd=document.querySelector(".detailUser")
const loginPageInfo=document.querySelector(".login-page-info")
let flagLogin=JSON.parse(localStorage.getItem("flag"))

let userInfo=JSON.parse(localStorage.getItem("userInfo"))
console.log(userInfo)
/**/
if(userInfo){
let userNametoShow=userInfo[0]
if(flagLogin){
  loginPageInfo.innerHTML=`<i class="bi bi-chevron-bar-down"></i> Hi ${userNametoShow.nameUser}`
  loginPageInfo.addEventListener("click",()=>{
    classAdd.classList.toggle("add-on-click")
    })
}
}
const logout=document.querySelector(".detailUser")
logout.addEventListener("click",loggingout)
function loggingout(){
  logout.remove()
localStorage.removeItem("flag")
loginPageInfo.innerHTML=` <a href="login-page.html">login</a> `
}


//sliding banner

const slideContainer=document.querySelector(".slider-container")

imgSlide.forEach(item=>{
  slideContainer.innerHTML+=`<div class="slide">
  <img src=${item.img} class="slide-img" alt="" />

  </div>`
})




/*
slideContainer.innerHTML=`
<div class="slide">
<img src="img/nature-1.jpg" class="slide-img" alt="" />
<h1>A</h1>
</div>
<div class="slide">
  <img src="img/n-2.jpg" class="slide-img" alt="" />
<h1>N</h1>
</div>
<div class="slide">
  <img src="img/n-3.jpg" class="slide-img" alt="" />
<h1>K</h1>
</div>
<div class="slide">
  <img src="img/n-4.jpg" class="slide-img" alt="" />
  <h1>I</h1>
</div>
<div class="slide">
<div>
  <img src="img/n-5.jpg" class="person-img" alt="" />
  <h4>Ankit kr</h4>
  <h1>T</h1>
</div>
</div>


`*/
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function(slide,index){


slide.style.left=`${index*100}%`


})
let counter=0;
/*
nextBtn.addEventListener("click",function(){
counter++ ;

carousel()

})


prevBtn.addEventListener("click",function(){
counter-- ;
carousel()
})
function carousel(){

if(counter===slides.length){
    counter=0
}

if(counter<0){
    counter=slides.length-1
}
slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });

}

*/

function forslidig(){
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
      });
}

function clearit(){
 counter++
if(counter>=slides.length){
    counter=0
}
forslidig()
}

const set= setInterval(clearit,2000)




slides.forEach(function(slide,index){
    slide.addEventListener("click",function(e){
        clearTimeout(set)

    nextBtn.style.display = "block";
    prevBtn.style.display = "block";

nextBtn.addEventListener("click",function(){
      counter++ ;
      carousel()
})
prevBtn.addEventListener("click",function(){
        counter-- ;
        carousel()
    })
    
})
})



function carousel() {
    // working with slides ;
     if (counter === slides.length) {
     counter=0
  
     }
     if (counter < 0) {
      counter = slides.length - 1
     }
    
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }











  //to stop someone from inspect
  /*


  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });


  document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }
  */





