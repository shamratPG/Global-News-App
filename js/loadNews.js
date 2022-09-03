function loadNews(data) {
    const url = `https://openapi.programming-hero.com/api/news/category/${data}`;
    try {
        fetch(url)
            .then(res => res.json())
            .then(json => showNews(json.data))
    } catch (error) {
        document.getElementById('error-data').innerText = `Data not found`
    }
}