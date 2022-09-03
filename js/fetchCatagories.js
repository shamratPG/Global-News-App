
function fetchCatagories() {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    try {
        fetch(url)
            .then(res => res.json())
            .then(json => displayCategory(json.data.news_category))
    } catch (error) {
        const errorData = document.getElementById('error-data');
        errorData.classList.remove('d-none');
        console.log(error);
    }
}

fetchCatagories();

