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
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="">
            <img class="img-fluid" src = "${data.image_url}">
        </div>
        <div class="ps-3 pt-2 d-flex align-items-center">
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


// Modal
//     <div class="modal fade" id="show-details" tabindex="-1" aria-labelledby="show-detailsLabel" aria-hidden="true">
//         <div class="modal-dialog">
//             <div class="modal-content">
//                 <div class="modal-header">
//                     <h5 class="modal-title" id="show-detailsLabel">Modal title</h5>
//                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div class="modal-body">
//                     ...
//                 </div>
//                 <div class="modal-footer">
//                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                     <button type="button" class="btn btn-primary">Save changes</button>
//                 </div>
//             </div>
//         </div>
//     </div>