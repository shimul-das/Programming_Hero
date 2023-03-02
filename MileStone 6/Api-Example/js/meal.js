const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const meal_container = document.getElementById('meals-container');
    meal_container.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `                
        <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <!-- Button trigger modal -->
          <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#MealDetails">
         Details
          </button>
        </div>
      </div>`;
        meal_container.appendChild(mealDiv);
    });

}
loadMeals('chicken');

const searchMeals = () => {
    console.log('button Clicked');
    const searchText = document.getElementById('search-field').value;
    //search meal
    console.log(searchText);
    loadMeals(searchText);
}

const loadMealDetail = idMeal=>{
    const url=(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    fetch(url)
    .then(res => res.json())
    .then(data =>displayMealDetails(data.meals[0]))
    console.log(idMeal);

}

const displayMealDetails=meal=>{
 document.getElementById('MealDetailsLabel').innerText=meal.strMeal;
 const mealsDetails=document.getElementById("MealDetails-body");
 mealsDetails.innerHTML=`
 <img class="img-fluid src="meal.strMealThumb">
 `

}