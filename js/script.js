document.addEventListener("DOMContentLoaded", async function () {
  const loadElements = document.querySelectorAll("load[src]");
  for (const element of loadElements) {
    const src = element.getAttribute("src");
    const response = await fetch(src);
    const html = await response.text();
    element.insertAdjacentHTML("afterend", html);
    element.remove();
  }
  // Инициализация карусели после загрузки всех частичных HTML-файлов
  $("#carouselExampleControls").carousel({
    interval: 2000,
  });
});
