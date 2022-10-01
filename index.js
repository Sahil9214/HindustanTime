
//Left side
const left = document.getElementById("left_bar");

const getData = async () => {

    try {

        let res = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=368d5c72177441deb75ef482bdaa8817`)
        let data = await res.json();
        console.log("data", data.articles);
        appendData(data.articles)

    }
    catch (err) {
        console.log("err", err)
    }

}
getData()

const appendData = (data) => {

    left.innerHTML = null;

    data.forEach((el) => {

        let div = document.createElement("div");

        let h3 = document.createElement("h4");
        h3.innerText = el.title;

        let pub = document.createElement("p");
        pub.innerText = el.publishedAt;

        div.append(h3, pub);
        left.append(div)



    });




}

//Top NEWS
const ind = document.getElementById("india")


const india = async () => {
    try {
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=368d5c72177441deb75ef482bdaa8817`);
        let data = await res.json();
        console.log("topnews", data.articles)
        dataappend(data.articles)
    }
    catch (err) {
        console.log(err)
    }
}
india()




const dataappend = (data) => {

    ind.innerHTML = null;



    for (let i = 0; i < data.length - 13; i++) {


        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = data[i].urlToImage;

        let h4 = document.createElement("h4");
        h4.innerText = data[i].title;

        let h5 = document.createElement("h5");
        h5.innerText = data[i].source.name;
        h5.style.color = "#00b1cd";

        let p = document.createElement("p");
        p.innerText = data[i].description;
        let value = document.createElement("div");
        value.id = "value1";
        value.append(h4, h5, p);

        let imagee = document.createElement("div");
        imagee.id = "img0";
        imagee.append(img);



        div.append(value, imagee)

        ind.append(div)


    }



}
//Cricket

let score = document.getElementById("cricket")
const cricket = async () => {
    try {
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=368d5c72177441deb75ef482bdaa8817`);
        let data = await res.json();
        console.log("cricket", data.articles);
        cricketdata(data.articles)

    }
    catch (err) {
        console.log(err);
    }
}

cricket()


const cricketdata = (data) => {

    ind.innerHTML = null;



    for (let i = 0; i < data.length; i++) {


        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = data[i].urlToImage;

        let h4 = document.createElement("h4");
        h4.innerText = data[i].title;

        let h5 = document.createElement("h5");
        h5.innerText = data[i].source.name;
        h5.style.color = "#00b1cd";

        let p = document.createElement("p");
        p.innerText = data[i].description;


        let value3 = document.createElement("div");
        value3.id = "value2";
        value3.append(h4, h5, p);

        let imagee3 = document.createElement("div");
        imagee3.id = "img2";
        imagee3.append(img);



        div.append(value3, imagee3)

        score.append(div)


    }



}

//BOLLYWOOD


let bolly = document.getElementById("bollywood")
const bollywoo = async () => {
    try {
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=368d5c72177441deb75ef482bdaa8817`);
        let data = await res.json();
        console.log("bollywood", data.articles);
        bollywooddata(data.articles)

    }
    catch (err) {
        console.log(err);
    }
}

bollywoo()


const bollywooddata = (data) => {

    ind.innerHTML = null;



    for (let i = 0; i < data.length; i++) {


        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = data[i].urlToImage;

        let h4 = document.createElement("h4");
        h4.innerText = data[i].title;

        let h5 = document.createElement("h5");
        h5.innerText = data[i].source.name;
        h5.style.color = "#00b1cd";

        let p = document.createElement("p");
        p.innerText = data[i].description;


        let value4 = document.createElement("div");
        value4.id = "value3";
        value4.append(h4, h5, p);

        let imagee4 = document.createElement("div");
        imagee4.id = "img3";
        imagee4.append(img);



        div.append(value4, imagee4)

        bolly.append(div)


    }



}

let photos = document.getElementById("photos");

const photo = async () => {

    try {
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=368d5c72177441deb75ef482bdaa8817`);
        let data = await res.json();
        console.log("bollywood_right bar", data);

        right_bar(data.articles)

    }

    catch (err) {
        console.log(err)
    }
}
photo()

const right_bar = (data) => {

    photos.innerHTML = null;
    for (let i = 0; i < data.length; i++) {


        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = data[i].urlToImage;

        let h4 = document.createElement("h4");
        h4.innerText = data[i].title;

        let h5 = document.createElement("h5");
        h5.innerText = data[i].source.name;
        h5.style.color = "#00b1cd";

        // let p = document.createElement("p");
        // p.innerText = data[i].description;


        let value4 = document.createElement("div");
        value4.id = "value43";
        value4.append(h4, h5);

        let imagee4 = document.createElement("div");
        imagee4.id = "img43";
        imagee4.append(img);



        div.append(value4, imagee4)

        photos.append(div)


    }





}


let arr = ["https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Screen_Shot_2019-03-05_at_11.38.45_AM.max-1000x1000.png",
    "https://tpc.googlesyndication.com/simgad/7346223132333446866?", "https://tpc.googlesyndication.com/simgad/24399595203410796?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qk9S-FPN-8RCEZTXiATvBXX9UCprw", "https://m.media-amazon.com/images/I/61b7Ew7kjYL._AC_SX451_SY423_.jpg",
"https://brand-img1.hotstarext.com/image/upload/v1585728139/Disnet%20Plus%20Hotstar%20Logo/D_Hotstar_logo_Dark_BG_120x120.png","https://media-exp1.licdn.com/dms/image/C4D22AQEmXTaNX_bl3A/feedshare-shrink_800/0/1664337031117?e=2147483647&v=beta&t=VmOYwXAklppqu9YwST_k5F3Mn29kigkcrJ62s5M__AE",
"https://s0.2mdn.net/simgad/8887184346372631890"];
let id;
let i = 0;
const advertigment = document.getElementById("adversright");
const start = (arr) => {

    

    let image = document.createElement("img");

    image.src = arr[i];

    advertigment.append(image)
    i++;
  setInterval(function () {
        advertigment.innerHTML = null
        if (i === arr.length) {
            i = 0
        }
        else {
            image.src = arr[i];

            advertigment.append(image);
            i++
        }
    }, 3000)
}
start(arr)




let shop=document.getElementById("advertigment_shop");

const shop_now=async()=>{

try{
    let res=await fetch(`https://fakestoreapi.com/products/category/electronics`)
    let data=await res .json();
    console.log("electronics",data);
    ShopnowData(data);
}
catch(err){
    console.log(err);
}

}
shop_now();


ShopnowData=(data)=>{

data.forEach((el)=>{

let div=document.createElement("div");

let title=document.createElement("p");
title.innerText=el.title;


let image= document.createElement("img");
image.src=el.image;

div.append(image,title);
shop.append(div);


})


}






