(() => {
  const header = document.querySelector("header");
  const win = window;
  win.onscroll = () => {
    if (win.pageYOffset > 300) {
      header.classList.add("fix-header");
    } else {
      header.classList.remove("fix-header");
    }
  };
})();
