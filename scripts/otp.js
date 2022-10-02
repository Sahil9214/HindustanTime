let usrdata = JSON.parse(localStorage.getItem("userdata"))

let num = document.getElementById("nom")
num.innerHTML=usrdata.number
num.style.color="blue"
num.style.textDecoration="underline"
console.log("usrdata.number: ", usrdata.number);

let cl = document.getElementById("cl").addEventListener("click",function(){
    alert(usrdata.otp)
})

document.getElementById("votp").addEventListener("click",function(){
    op = document.getElementById("otp").value
    if(usrdata.otp==op){
        alert("OTP Verified")
        window.location.href="index.html"
    }else{
        alert("Wrong OTP")
    }
})