document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    document.body.classList.add("page-ready");
  });

  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (!href || href.startsWith("#")) return;

      e.preventDefault();

      document.body.classList.remove("page-ready");
      document.body.classList.add("page-exit");

      setTimeout(() => {
        window.location.href = href;
      }, 250);
    });
  });
});