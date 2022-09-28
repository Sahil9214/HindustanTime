 const key = `e4aaa246655d44f2916ad92c921dbf63`;
 const API  = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e4aaa246655d44f2916ad92c921dbf63`;


async function news(){

    try{

        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`)

        let data = await res.json()
            console.log(data.articles)
            append(data.articles)
    }catch(err){
          console.log(err)
    }
}
news()

function append(data){
    let top_news = document.getElementById("top_news");
    top_news.innerHTML = null;
    // let h1 = document.createElement("h1");
    // h1.innerText = "TOP NEWS"
    data.forEach((el)=>{
        
        let main = document.createElement("div");
       

        let info_div = document.createElement("div");
        

        let h3 = document.createElement("h3");
        h3.innerText = el.title;

        let p1 = document.createElement("p");
        p1.innerText = el.author;

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

// http://api.mediastack.com/v1/news
// ? access_key = YOUR_ACCESS_KEY
// & date = 2020-07-17

const key2 = `abed3d74fed26ac830266a35c9967fee`
async function news2(){

    try{

        let res = await fetch(`https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=b0599e59600b4c129dd569247aca6d0b`)

        let data = await res.json()
            console.log(data)
            append2(data.articles)
    }catch(err){
          console.log(err)
    }
}
news2()

function append2(data){
    let latest_news = document.getElementById("latest_news");
    latest_news.innerHTML = null;

    for(let i=0;i<data.length;i++){
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
