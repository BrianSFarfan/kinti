window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) {
      navbar.classList.add("navbar-fixed");
    } else if (window.scrollY < 100) {
      navbar.classList.remove("navbar-fixed");
    }else{
      navbar.classList.remove("navbar-fixed");
    }
  });


document.querySelectorAll('button[id^="filter-"]').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.id.replace('filter-', 'art-');
        const cards = document.querySelectorAll('.step');

        document.querySelectorAll('button[id^="filter-"]').forEach(btn => {
            btn.classList.remove('selected');
        });

        button.classList.add('selected');

        cards.forEach(card => {
            if (card.id === category) {
                card.classList.add("mostrar");
            } else {
                card.classList.remove("mostrar");
            }
        });
    });
});


document.querySelectorAll('button[id^="actionMenu"]').forEach(button => {
    button.addEventListener('click', () => {
        const navbar = document.getElementById("navbar");
        if (navbar) {
            navbar.classList.toggle("navbar-flex");
        }
    });
});
