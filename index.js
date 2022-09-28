
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
        console.log("topnews",data.articles)
        dataappend(data.articles)
    }
    catch (err) {
        console.log(err)
    }
}
india()




const dataappend = (data) => {

    ind.innerHTML = null;
 


    for (let i = 0; i < data.length-13; i++) {


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
        let value=document.createElement("div");
        value.id="value1";
        value.append(h4,h5,p);

      let imagee=document.createElement("div");
      imagee.id="img0";
      imagee.append(img);

     

      div.append(value,imagee)

        ind.append(div)


    }



}
//Cricket

let score=document.getElementById("cricket")
const cricket =async()=>{
    try{
let res=await fetch( `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=368d5c72177441deb75ef482bdaa8817`);
let data= await res.json();
console.log("cricket",data.articles);
cricketdata(data.articles)

    }
    catch(err){
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


        let value3=document.createElement("div");
        value3.id="value2";
        value3.append(h4,h5,p);

      let imagee3=document.createElement("div");
      imagee3.id="img2";
      imagee3.append(img);

     

      div.append(value3,imagee3)

        score.append(div)


    }



}

//BOLLYWOOD


let bolly=document.getElementById("bollywood")
const bollywoo =async()=>{
    try{
let res=await fetch( `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=368d5c72177441deb75ef482bdaa8817`);
let data= await res.json();
console.log("bollywood",data.articles);
bollywooddata(data.articles)

    }
    catch(err){
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


        let value4=document.createElement("div");
        value4.id="value3";
        value4.append(h4,h5,p);

      let imagee4=document.createElement("div");
      imagee4.id="img3";
      imagee4.append(img);

     

      div.append(value4,imagee4)

        bolly.append(div)


    }



}

let advertigment=document.getElementById("adver");

const advert=async()=>{

try{
    let res=await fetch(``);
    let data=await res.json();
    console.log(data)
}
   
catch(err){
    console.log(err)
}    
   }
advert()

