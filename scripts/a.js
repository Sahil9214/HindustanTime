function adduser(){
    let name = document.getElementById("name").value
    let number = document.getElementById("numinput").value

    let u = {
        name,
        number,
        "otp":"1234"
    }
    localStorage.setItem("userdata",JSON.stringify(u))
    window.location.href="otp.html"
}

let btn = document.getElementById("submit").addEventListener("click",adduser)

