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

const navLinks = [...document.querySelectorAll('.navbar .btn-nav')]
  .filter(a => a.hash && document.querySelector(a.hash));

const sections = navLinks.map(a => document.querySelector(a.hash));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const idx = sections.indexOf(entry.target);
    if (idx === -1) return;

    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      navLinks[idx].classList.add('active');
    }
  });
}, { root: null, threshold: 0.6 });

sections.forEach(sec => io.observe(sec));

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const navbar = document.getElementById('navbar');
    navbar?.classList.remove('navbar-flex');
  });
});
