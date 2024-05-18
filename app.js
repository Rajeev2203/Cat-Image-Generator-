let url = "https://api.thecatapi.com/v1/images/search" ;

let btn = document.querySelector("button");

btn.addEventListener("click",async() =>{
    let pic = await catPic();
    let catImg = document.querySelector("#catimg");
    catImg.setAttribute("src",pic);
});

async function catPic(){
    try{
        let res = await axios.get(url);
        return res.data[0].url ;
    }
    catch(e){
        console.log("Error -",e);
    }
} 