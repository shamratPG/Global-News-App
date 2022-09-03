function displayNavItems(data) {
    const categoryContainer = document.getElementById('category-nav');
    data.forEach(element => {
        // console.log(element.category_name)
        const category = document.createElement('a');
        category.classList.add("nav-link")
        category.innerText = `${element.category_name}`;
        categoryContainer.appendChild(category);
    });
}
