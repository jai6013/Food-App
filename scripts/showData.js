async function getData(url){
    try {
        let res = await fetch(url)
        let data = await res.json()

        return data
    } 
    catch(e){
        console.log(e)
    }
} 

function appendData (news, parent){
    console.log(news)
    news.articles.forEach(({urlToImage,title,description,author}) => {
        let div = document.createElement("div")
        let tit = document.createElement("p")
        let img = document.createElement("img")
        let desc = document.createElement("p")
        let auth = document.createElement("p")
        auth.innerHTML = `author : ${author}`
        auth.style.fontSize= "13px"
        img.src = urlToImage
        img.style.height = "150px"
        tit.innerHTML = title
        tit.id = "title"
        desc.id = "description"
        desc.style.marginTop = "5px"
        desc.innerHTML = description

        div.append(tit,img,desc,auth)
        div.addEventListener("click",() => {
            var story = title
            window.location.href = "showStories.html"
            run()
        })
        parent.append(div)
    });
}


export {getData, appendData}