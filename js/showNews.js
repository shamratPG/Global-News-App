function showNews(data) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    data.forEach(element => {
        console.log(element);
        const newsItem = document.createElement('div');
        newsItem.classList.add('card', 'mb-3', 'shadow', 'rounded-4');

        const maxLength = 500;
        const str = element.details.length > maxLength ? element.details.substr(0, maxLength) + '...' : element.details;

        const authorName = element.author.name !== null ? element.author.name : 'Author Name is not found!';
        console.log(authorName)
        newsItem.innerHTML = `
        <div class="row g-1">
            <div class="col-md-3">
                <img src="${element.thumbnail_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-9">
                <div class="card-body">
                    <h5 class="card-title text-primary py-3">${element.title}</h5>
                    <p class="card-text">${str}</p>
                    <div>
                        <div >
                            <img class="img-fluid rounded-circle" src="${element.author.img}" alt="Author Image" style="height: 70px; width: auto;">
                            <span class="ps-3 text-secondary">${authorName}</span>
                        </div>                    
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>        
        `;
        newsContainer.appendChild(newsItem);
    });

}


/*
text-truncate
<div class="card mb-3 shadow">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural
                    lead-in to
                    additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
</div> */