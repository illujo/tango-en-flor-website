function handleScroll() {
  // Get the current scroll position
  var scrollPosition = window.scrollY;
  var element = document.getElementById("header");
  if (scrollPosition > 0) {
    element.classList.add("scroll-header");
  } else {
    element.classList.remove("scroll-header");
  }

  // Log or do something with the scroll position
  console.log("Scroll Position: " + scrollPosition);
}

function menuClicked() {
  console.log("clicked");
  var element = document.getElementById("mobile-menu");
  if (!element.classList.contains("mobile-menu-open")) {
    element.classList.add("mobile-menu-open");
  } else {
    element.classList.remove("mobile-menu-open");
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
