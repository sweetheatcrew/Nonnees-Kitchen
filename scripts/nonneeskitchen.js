const showMenu = (toggleID, navID) => {
    const toggle = document.getElementById(toggleID),
        nav = document.getElementById(navID);

    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon')
        })   
}

showMenu('nav-toggle', 'nav-menu')


const searchQuery = document.getElementById('search');


searchQuery.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    const recipes = document.querySelectorAll('.recipe-name');
    const noResults = document.getElementById('no-results');
    let matches = 0;

    recipes.forEach(recipe => {
        // Target the outer wrapper card of the recipe
        const recipeCard = recipe.parentNode;

        if (recipe.textContent.toLowerCase().includes(currentValue)) {
            recipeCard.style.display = "";
            matches++;
        } else {
            recipeCard.style.display = "none";
        }
    });

    if (matches === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
});

const printedYear = document.getElementById('year');

printedYear.textContent = new Date().getFullYear();