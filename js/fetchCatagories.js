
function fetchCatagories() {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    try {
        fetch(url)
            .then(res => res.json())
            .then(json => displayNavItems(json.data.news_category))
    } catch (error) {
        document.getElementById('error-data').innerText = `Data not found`
    }
}

fetchCatagories();

