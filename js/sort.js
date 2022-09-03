function sortNews(data, categoryName) {
    const sortedData = data.sort((a, b) => b.total_view - a.total_view);
    showNews(sortedData, categoryName);
}