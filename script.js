
    // ── Scroll reveal
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ── Navbar shadow on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    // ── Smooth scroll helper
    function scrollTo(selector) {
      const el = document.querySelector(selector);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    // ── Mobile hamburger
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    function closeMobile() {
      mobileMenu.classList.remove('open');
    }

    // ── Smooth scroll for all # links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        closeMobile();
      });
    });

    // ── Animate progress bars when visible
    const progFills = document.querySelectorAll('.prog-fill');
    const progObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const width = fill.style.width;
          fill.style.width = '0';
          setTimeout(() => { fill.style.width = width; }, 100);
          progObserver.unobserve(fill);
        }
      });
    }, { threshold: 0.5 });
    progFills.forEach(f => progObserver.observe(f));