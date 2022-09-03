function fetchDetails(id) {
    const news_id = id;
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    try {
        fetch(url)
            .then(res => res.json())
            .then(json => showDetails(json.data[0]))
    } catch (error) {
        const errorData = document.getElementById('error-data');
        errorData.classList.remove('d-none');
        console.log(error);
    }
}