document.querySelector('.search-bar button').addEventListener('click', function() {
    let query = document.querySelector('.search-bar input').value;
    if(query) {
        alert('Recherche pour: ' + query);
        // Ici, vous pouvez rediriger vers une page de résultats de recherche ou filtrer les vidéos.
    }
});
