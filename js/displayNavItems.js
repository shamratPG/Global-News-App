function displayCategory(data) {
    const categoryContainer = document.getElementById('category-nav');
    data.forEach(element => {
        // console.log(element.category_name)
        const category = document.createElement('a');
        category.classList.add("nav-link", "pointer", "fw-semibold");
        const att = document.createAttribute("onclick");
        att.value = `loadNews('${element.category_id}', '${element.category_name}')`;

        category.setAttributeNode(att);
        category.innerText = `${element.category_name}`;
        categoryContainer.appendChild(category);
    });
}
