function adjustLayout() {
    const grid = document.querySelector('.book-grid');
    if (window.innerWidth < 480) {
      grid.style.gridTemplateColumns = '1fr';
    } else if (window.innerWidth < 768) {
      grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
      grid.style.gridTemplateColumns = 'repeat(5, 1fr)';
    }
  }
 

document.querySelectorAll(".book-card img").forEach(img => {
      const link = img.getAttribute("data-url");
      if (link) {
        img.addEventListener("click", () => {
          window.open(link, "_blank");
        });
      }
    });
