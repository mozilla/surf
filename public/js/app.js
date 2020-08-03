(() => {

  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const header = document.querySelector("header");
  const win = window;
  const availableIntersectionObserver = ("IntersectionObserver" in window);
  const mobileMenuLinks = document.querySelector(".mobile-menu-fixed");


  win.onscroll = () => {
    if (win.pageYOffset > 300) {
      header.classList.add("fix-header");
      document.body.classList.add("slide-in-header");
    } else {
      document.body.classList.remove("slide-in-header");
      header.classList.remove("fix-header");
      if (document.querySelector(".show-menu")) {
        closeMenu();
      }
    }
  };

  const closeMenu = () => {
    mobileMenuLinks.classList.remove("show-menu");
  }

  const doMobileMenu = () => {
    mobileMenuButton.classList.toggle("open");
    if (mobileMenuButton.classList.contains("open")) {
      mobileMenuLinks.classList.add("show-menu");
      return;
    }
    return closeMenu();
  }


  mobileMenuButton.addEventListener("click", doMobileMenu);


  if (!availableIntersectionObserver) {
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "-50px",
    threshold: .25,
  };

  const watchedEls = document.querySelectorAll("[data-observing]");
  const onObservation = (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      if (entry.target.classList.contains("docs")) {
        entry.target.classList.add("init-pages")
      }
      if (entry.target.classList.contains("opacity-0")) {
        entry.target.classList.add("opacity-1");
      }
      if (entry.target.classList.contains("fade-up")) {
        entry.target.classList.add("init-fade-up");
      }

      observer.unobserve(entry.target);
    });
  };
  const observer = new IntersectionObserver(onObservation, observerOptions);
  watchedEls.forEach(el => {
    observer.observe(el);
  });

})();
