const inViewport = (entries) => {
    entries.forEach(entry => {
      if (entry.target.classList.contains('card')) {
        entry.target.classList.toggle("card-animation", entry.isIntersecting);
      }
    });
  };
  
  const observer = new IntersectionObserver(inViewport);
  
  // Attach observer to every [data-inviewport] element:
  const cardsInViewport = document.querySelectorAll('.card');
  cardsInViewport.forEach(cards => {
    observer.observe(cards);
  });
