const handleSearch=(e)=>{
    const inputValue=document.getElementById("food-name").value; 
    const container = document.getElementById("meal-container");
    container.innerHTML = "";




    const loadAllMeal = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.meals) { 
                    displayNotFound(); 
                } else {
                    displayMeal(data.meals); 
                }
            })
    };




    const displayMeal = (meals) => {
        const mealContainer = document.getElementById("meal-container");
        const showDetails = document.getElementById("show-details");
        
    
        meals.forEach((meal) => {
            const div = document.createElement("div");
            div.classList.add("card");

            const showdiv = document.createElement("div");
            showdiv.classList.add("card1");
    
            div.innerHTML = `
                <img class="card-img" src="${meal.strMealThumb}" alt="...." />
                <h2>Name : ${meal.strMeal}</h5>
                <h4>Category : ${meal.strCategory}</h5>
            `;

            showdiv.innerHTML = `
                <img class="card-img" src="${meal.strMealThumb}" alt="...." />
                <h2>Name : ${meal.strMeal}</h5>
                <h4>Category : ${meal.strCategory}</h5>
                <h4>Ingredients :</h5>
                <p>${meal.strIngredient1}</p>
                <p>${meal.strIngredient2}</p>
                <p>${meal.strIngredient3}</p>
                <p>${meal.strIngredient4}</p>
                <p>${meal.strIngredient5}</p>
                <p>${meal.strIngredient6}</p>
                <p>${meal.strIngredient7}</p>
                <p>${meal.strIngredient8}</p>
            `;

            div.addEventListener("click", (e) => {
                showDetails.innerHTML = "";
                showDetails.appendChild(showdiv);
            });
    
            mealContainer.appendChild(div);

        });
    };



    const displayNotFound = () => {
        const div = document.createElement("div");
        div.classList.add("notFound");

        div.innerHTML = `
        <h3>No results found!</h3>
        `;

        container.appendChild(div);
    };


    
    loadAllMeal();

    document.getElementById("food-name").value=""; 

    }


  









    









    



    
