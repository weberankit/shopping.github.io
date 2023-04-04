//login-page
let loginLocalstorage=JSON.parse(localStorage.getItem("userInfo"))
console.log(loginLocalstorage)
const item=loginLocalstorage[0]
console.log(item.nameUser,item.userEmail)
const loginMsg=document.querySelector(".login-issue")
const loginEmail=document.querySelector(".login-email")
const loginPassw=document.querySelector(".login-password")
const loginBtn=document.querySelector(".login-btn")

loginBtn.addEventListener("click",()=>{

console.log(loginEmail.value,item.userEmail)

let setFlag=false
if((loginEmail.value==item.userEmail)&&(loginPassw.value==item.userPass)){
    setFlag=true
    localStorage.setItem("flag",JSON.stringify(setFlag))
     window.location.href ="index.html"

}else{
    
loginMsg.textContent="plz enter correct deatil"


}

})

