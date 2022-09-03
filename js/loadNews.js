function loadNews(data, categoryName) {
    const url = `https://openapi.programming-hero.com/api/news/category/${data}`;
    try {
        fetch(url)
            .then(res => res.json())
            .then(json => sortNews(json.data, categoryName))
    } catch (error) {
        document.getElementById('error-data').innerText = `Data not found`
    }
    showSpinner(true);
}