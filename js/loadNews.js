function loadNews(data, categoryName) {
    const url = `https://openapi.programming-hero.com/api/news/category/${data}`;
    try {
        fetch(url)
            .then(res => res.json())
            .then(json => sortNews(json.data, categoryName))
    } catch (error) {
        const errorData = document.getElementById('error-data');
        errorData.classList.remove('d-none');
        console.log(error);
    }
    showSpinner(true);
}