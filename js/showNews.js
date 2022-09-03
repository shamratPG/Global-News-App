function showNews(data, categoryName) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    const errorData = document.getElementById('error-data');
    errorData.classList.add('d-none');

    const numberOfNews = data.length;

    const newsNumberContainer = document.getElementById('news-number');
    newsNumberContainer.innerHTML = ``;
    console.log(data);
    if (numberOfNews === 0) {
        errorData.classList.remove('d-none');

    } else if (numberOfNews > 0) {
        newsNumberContainer.innerHTML = `
            <h4 class="p-3">${numberOfNews} News Items found in <span class="text-primary"> ${categoryName}</span> category</h4>
        `;


        data.forEach(element => {
            // console.log(element);
            const newsItem = document.createElement('div');
            newsItem.classList.add('card', 'mb-3', 'shadow', 'rounded-4');

            const maxLength = 500;
            const str = element.details.length > maxLength ? element.details.substr(0, maxLength) + '...' : element.details;

            const authorName = element.author.name !== null && element.author.name !== '' ? element.author.name : 'No name found!';
            const viewCount = element.total_view !== null ? element.total_view : 'None';
            newsItem.innerHTML = `
            <div class="row g-1">
                <div class="col-md-3">
                    <img src="${element.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-9">
                    <div class="card-body d-flex flex-column justify-content-between h-100">
                    <div>
                        <h5 class="card-title text-primary py-3">${element.title}</h5>
                        <p class="card-text">${str}</p>
                    </div>
                    <div class="d-flex justify-content-between py-3">
                        <div class="d-flex align-items-center">
                            <img class="img-fluid rounded-circle" src="${element.author.img}" alt="Author Image" style="height: 70px; width: auto;">
                            <span class="ps-3 text-secondary">${authorName}</span>
                            <div class="text-primary ps-4">
                                <i class="fa-solid fa-eye pe-1"></i>
                                <span>${viewCount}</span>
                            </div> 
                        </div> 
                        <sapn>
                            <i onclick="fetchDetails('${element._id}')" class="pointer fa-sharp fa-solid fa-angles-right p-4" data-bs-toggle="modal" data-bs-target="#show-details"></i>
                        </span>   
                    </div>
                </div>
            </div>        
            `;
            newsContainer.appendChild(newsItem);
        });
    }
    showSpinner(false);

}


/*

type="button"
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