// const detailBtn = document.getElementById('show-details');
// detailBtn.addEventListener('click', () => {
//     console.log('found')
// })

function fetchDetails(id) {
    const news_id = id;
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    try {
        fetch(url)
            .then(res => res.json())
            .then(json => showDetails(json.data[0]))
    } catch (error) {
        document.getElementById('error-data').innerText = `Data not found`
    }
}