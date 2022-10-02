import navbar from "./navbar.js"
     console.log(navbar);

    let navbar1=document.getElementById("navbar");
    navbar1.innerHTML=navbar()

    import footer from "./footer.js"

    let footer1 = document.getElementById("footer");
    console.log(footer)
    footer1.innerHTML = footer();

    import tpschin from "./typesachin.js"
     console.log(navbar);

    let type1=document.getElementById("types");
    type1.innerHTML=tpschin()




// const key = `b0d6ca33bfec4371a11f04b298305209`;
const key = `b0599e59600b4c129dd569247aca6d0b`;
const API  = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e4aaa246655d44f2916ad92c921dbf63`;


async function trending(){

   try{

       let res= await fetch(`https://newsapi.org/v2/top-headlines?language=en&apiKey=${key}`);

       let data = await res.json()
           console.log(data.articles)
           append(data.articles)
   }catch(err){
         console.log(err)
   }
}
trending()

function append(data){
   let top_news = document.getElementById("top_news_div");
   top_news.innerHTML = null;
   // let h1 = document.createElement("h1");
   // h1.innerText = "TOP trending"
   data.forEach((el)=>{
       
       let main = document.createElement("div");
      

       let info_div = document.createElement("div");
       

       let h3 = document.createElement("h3");
       h3.innerText = el.title;

       let p1 = document.createElement("p");
       p1.innerText =  el.publishedAt;

       let h4 = document.createElement("h4");
       h4.innerText = el.source.name;

       let img_div = document.createElement("div");
      

       let img = document.createElement("img");
       img.src = el.urlToImage;        ;

       info_div.append(h3,h4,p1);
       img_div.append(img)
      
        main.append(info_div,img_div)
        main.addEventListener("click",(el)=>{
           console.log(el.title)
        })

        top_news.append(main)

   });
      
}




async function news2(){

   try{

       let res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&language=en&apiKey=${key}`)

       let data = await res.json()
           console.log(data)
           append2(data.articles)
   }catch(err){
         console.log(err)
   }
}
news2()

function append2(data){
   let latest_news = document.getElementById("latest_news_div");
   latest_news.innerHTML = null;

   for(let i=0;i<data.length-1;i++){
       let div = document.createElement("div");

       let h5 = document.createElement("h3");
       h5.innerText = data[i].title;

       let p1 = document.createElement("p");
       p1.innerText = data[i].author;

       let p = document.createElement("p");
       p.innerText = data[i].description;

       let img=document.createElement("img");
       img.src = data[i].image;

       div.append(h5,p1,p);
      
       latest_news.append(div)

   }

}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
 showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
 showSlides(slideIndex = n);
}

function showSlides(n) {
 let i;
 let slides = document.getElementsByClassName("mySlides");
 let dots = document.getElementsByClassName("dot");
 if (n > slides.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slides.length}
 for (i = 0; i < slides.length; i++) {
   slides[i].style.display = "none";
 }
 for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";
}

function advertise() {

   let x = ["https://media.istockphoto.com/vectors/burning-diya-on-happy-diwali-holiday-sale-promotion-advertisement-vector-id847584744","https://cdn3.vectorstock.com/i/1000x1000/23/47/sale-and-promotion-advertisement-for-happy-diwali-vector-34342347.jpg","https://assets.thehansindia.com/h-upload/2021/10/25/1118823-sbi.jpg","https://thumbs.dreamstime.com/z/advertisement-template-shopping-sale-promotion-offer-happy-diwali-festival-india-vector-127951625.jpg"]


   let i = 0;
   let container1 = document.getElementById("advertise");
   container1.innerHTML = null;

  let img = document.createElement("img");
 
  img.src = x[0];
  container1.append(img);
   
  i++;

  setInterval(function() {


if(i == x.length){
      i = 0;
    }
    
    img.src = x[i]

    container1.append(img);

      i++;

  },2000)

}

advertise();

async function viral_news(){

   try{

       let res = await fetch(`https://newsapi.org/v2/top-headlines?language=en&category=general&country=in&apiKey=${key}`)

       let data = await res.json()
           console.log(data.articles)
           show(data.articles)
   }catch(err){
         console.log(err)
   }
}
viral_news()

function show(data){
   let viral_news = document.getElementById("viral_news");
   viral_news.innerHTML = null;
   // let h1 = document.createElement("h1");
   // h1.innerText = "TOP tech"
   data.forEach(({title,author,source:{name},urlToImage})=>{
       
       let div = document.createElement("div");
      

       let infoDiv = document.createElement("div");
       

       let h3 = document.createElement("h3");
       h3.innerText = title;

       let p1 = document.createElement("p");
       p1.innerText = author;

       let h4 = document.createElement("h4");
       h4.innerText = name;

       let imgDiv = document.createElement("div");
      

       let img = document.createElement("img");
       img.src = urlToImage;        ;

       infoDiv.append(h3);
       imgDiv.append(img)
      
        div.append(infoDiv,imgDiv)
        
        viral_news.append(div)

   });
      
}

async function shopping(){

 try{

     let res = await fetch(`https://fakestoreapi.com/products`)

     let data = await res.json()
         console.log("shopping:",data)
          show1(data)
 }catch(err){
       console.log(err)
 }
}
shopping()

function show1(data){
 let shopping = document.getElementById("shopping");
 shopping.innerHTML = null;
 // let h1 = document.createElement("h1");
 // h1.innerText = "TOP trending"
 for(let i=0;i<data.length-14;i++){
     
     let div = document.createElement("div");
     // div.style.display = "flex"
     // div.style.width = "100%";
     // div.style.height = "200px"
     // div.style.cursor = "pointer"
    

     let shopInf = document.createElement("div");
     // shopInf.style.width = "100%"
     // shopInf.style.flex = "2"
     

     let h3 = document.createElement("h3");
     h3.innerText = data[i].title;

     let p1 = document.createElement("p");
     p1.innerText = data[i].price;

     let btn = document.createElement("button");
     btn.innerText = "BUY NOW";
     btn.style.padding = "10px"
     btn.style.backgroundColor = "skyblue";
     btn.style.border = "none";
     btn.style.fontWeight = "bold" ;
     btn.style.color = "white";
     btn.style.cursor = "pointer"

     let shopImg = document.createElement("div");
     // shopImg.style.flex = "1"
    

     let img = document.createElement("img");
      img.src = data[i].image;   
     // img.style.width = "50%"
     // img.id = "shopping_pics"     

     shopInf.append(h3,p1,btn);
     shopImg.append(img);
    
      div.append(shopImg,shopInf)
      
      shopping.append(div)

 };
    
}

//  const youtube_key;
//  const API_KEY = AIzaSyBWuaDNXvXZisZwd5oSqrY4fJQvLM2T05k;


