//select tags
const searchbox    = document.getElementById('input');
const searchbutton = document.getElementById('btn');
const div = document.getElementById('searchresult');
//using async and await function using fetch data api convert into joson data
async function getData(result) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${result}`)
    const data = await response.json();
    const results =data.meals;
    //using map method fetch result from api
    results.map((res)=>{
        //create element
        console.log(res);
        const divElement =document.createElement('div');
        divElement.classList.add("card");
        const image =document.createElement('img');
        image.src = res.strMealThumb;
        const text = document.createElement('p').innerText=res.strMeal;
        divElement.append(image);
        divElement.append(text);
        searchresult.append(divElement);
    })
}

//add event lister click button and excuting the async function
searchbutton.addEventListener("click", ()=>{
 getData(searchbox.value);
})