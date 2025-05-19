
document.addEventListener('DOMContentLoaded', () => {
    // Search
    const searchBar = document.getElementById('searchBar');
    const sections = document.querySelectorAll('main section');
    searchBar.addEventListener('input', function() {
        const term = this.value.toLowerCase();
        sections.forEach(sec => {
            sec.style.display = sec.textContent.toLowerCase().includes(term) ? '' : 'none';
        });
    });
    // Back to Top
    const backBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    // Lazy load images
    const imgs = document.querySelectorAll('img[loading="lazy"]');
    imgs.forEach(img => {
        img.addEventListener('load', () => img.classList.add('loaded'));
    });
});
