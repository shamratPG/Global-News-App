function showDetails(data) {
    console.log(data);

    const newsTitle = data.title !== null && data.title !== '' ? data.title : 'No title found!';
    const authorName = data.author.name !== null && data.author.name !== '' ? data.author.name : 'No name found!';
    const viewCount = data.total_view !== null ? data.total_view : 'None';
    const details = data.details !== null ? data.details : 'None';


    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = ``;
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = `
        <div class="modal-header">
            <h5 class="modal-title" id="show-detailsLabel">${newsTitle}</h5>
            <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="">
            <img class="w-100" src = "${data.image_url}">
        </div>
        <div class="mt-3 ps-3 pt-2 d-flex align-items-center">
            <img class="img-fluid rounded-circle" src="${data.author.img}" alt="Author Image" style="height: 40px; width: auto;">
            <span class="ps-3 text-secondary">${authorName}</span>
            
            <div class="text-primary ps-4">
                <i class="fa-solid fa-eye pe-1"></i>
                <span>${viewCount}</span>
            </div> 
        </div>
        <div class="modal-body text-start">
            <p>${details}</p>
        </div>
    `;
    modalContainer.appendChild(modalContent)
}