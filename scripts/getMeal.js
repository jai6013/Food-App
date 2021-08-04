async function getDayMeal(url){
  try {

    let response = await fetch(url);
    let getMeal = await response.json();
    
    return getMeal
  } catch (e){
    console.log(e)
  }
  }

  function appendDatas(recipies, parent){
    recipies.meals.forEach(({strMeal: meal,strMealThumb:image,strInstructions:instructions}) => {
        let div = document.createElement("div")
        let p = document.createElement("p")
        let img = document.createElement("img")
        let ints = document.createElement("p")
        img.src = image
        ints = `INSTRUCTIONS: ${instructions}`
        p.innerHTML = meal

        div.append(img,p,ints)

        parent.append(div)
    });
}

export {getDayMeal, appendDatas};

