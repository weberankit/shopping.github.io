const username=document.querySelector(".name")
const email=document.querySelector(".email")
const password=document.querySelector(".password")
const address=document.querySelector(".address")
const pin=document.querySelector(".pin-no")
const submitBtn=document.querySelector(".submit-btn")



const para=document.querySelector(".text")


let storeUserInfo=[]
submitBtn.addEventListener("click",storeuser)

 function storeuser(){

 
    storeUserInfo=[{
   nameUser:username.value,
   userEmail:email.value,
   userPass:password.value,
   userAdd:address.value,
   userPin:pin.value
}]

console.log(storeUserInfo)

localStorage.setItem("userInfo",JSON.stringify(storeUserInfo))





return storeUserInfo
}
let emailInfo=JSON.parse(localStorage.getItem("userInfo"))
console.log(emailInfo)
let emailId=emailInfo[0]
console.log(emailId.userEmail)
const regex=new RegExp(emailId.userEmail,'gi')

submitBtn.addEventListener("click",()=>{
let  setFlag=true
    localStorage.setItem("flag",JSON.stringify(setFlag))

if((email.value=="")||(username.value=="")||(password.value=="")){
alert("plz fill the detail")


}else{



    if(email.value===emailId.userEmail)
{
   alert("you have already used this Email ID")
}
else{

     window.location.href ="index.html"
   }


}


})


