document.getElementById("searchBtn").addEventListener("click", function(){
    const foodName = document.getElementById("inputText").value
    if (foodName<=0){
        alert("Please Type a food Name")
    }
    else{  
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then(res=>res.json())
    .then(data=>{ 
        console.log(data)
        displayFood(data)})
}

const displayFood = foods=>{
    const foodsDiv = document.getElementById("foodsContainer")
    foodsDiv.innerText = "";
    if (foods != null) {
    foods.meals.map(food=>{
    const foodDiv = document.createElement("div")
        foodDiv.className="foods"
        console.log(food)
    const foodInfo =`<div class = food onclick="displayFoodDetails('${food.idMeal}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <img src="${food.strMealThumb}">
    <h3 class="foodName">${food.strMeal}</h3>
    </div>`
    
    foodDiv.innerHTML= foodInfo
    foodsDiv.appendChild(foodDiv)
    
    });
    // FoodName = document.getElementById("inputText").value = ""
}
else{
    alert("input a valid food name");
}
} 
})

const displayFoodDetails=name=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`)
    .then(res=> res.json())
    .then(data=> {
        console.log(data.meals[0])
        renderFoodInfo(data.meals[0])})
}

const renderFoodInfo = (food) => {

    const foodDetailsDiv = document.getElementById('foodsDetails');
    foodDetailsDiv.innerHTML = `
    <img class="img-fluid rounded mb-4" src="${food.strMealThumb}" alt="">
    <h2>${food.strMeal}</h2>
    <h4> Ingredient</h4>
    <p> ${food.strIngredient1}: ${food.strMeasure1}</p>
    <p> ${food.strIngredient2}: ${food.strMeasure2}</p>
    <p> ${food.strIngredient3}: ${food.strMeasure3}</p>
    <p> ${food.strIngredient4}: ${food.strMeasure4}</p>
    <p> ${food.strIngredient5}: ${food.strMeasure5}</p>
    <p> ${food.strIngredient6}: ${food.strMeasure6}</p>
    <p> ${food.strIngredient7}: ${food.strMeasure7}</p>
    <p> ${food.strIngredient8}: ${food.strMeasure8}</p>
    <p> ${food.strIngredient9}: ${food.strMeasure9}</p>
    <p> ${food.strIngredient10}: ${food.strMeasure10}</p>


    
    `;
};
