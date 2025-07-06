document.addEventListener('DOMContentLoaded', () => {
    const dataBlocks = document.querySelectorAll('.data-block');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    dataBlocks.forEach(block => {
        observer.observe(block);
    });
}); 