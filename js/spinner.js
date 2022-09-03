function showSpinner(loading) {
    const spinner = document.getElementById('spinner');
    if (loading === true) {
        spinner.classList.remove('d-none');
    } else if (loading === false) {
        spinner.classList.add('d-none');
    }
}