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

function appendData (recipies, parent){
    console.log(recipies)
    recipies.meals.forEach(({strMeal: meal,strMealThumb:image}) => {
        let div = document.createElement("div")
        let p = document.createElement("p")
        let img = document.createElement("img")

        img.src = image

        p.innerHTML = meal

        div.append(img,p)

        parent.append(div)
    });
}


export {getData, appendData}