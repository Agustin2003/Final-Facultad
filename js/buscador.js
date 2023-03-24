

document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')) {
        document.querySelectorAll('.peliculas').forEach(peli => {
            peli.textContent.toLowerCase().includes (e.target.value)
            ? peli.classList.remove('filtro')
            : peli.classList.add("filtro");
        })
    }
})