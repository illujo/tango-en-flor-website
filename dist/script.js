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

document.querySelectorAll(".workshop-header").forEach((header) => {
  header.addEventListener("click", () => {
    const desc = header.nextElementSibling;

    // Close any already-open descriptions
    document.querySelectorAll(".workshop-desc.open").forEach((openDesc) => {
      if (openDesc !== desc) {
        openDesc.style.maxHeight = null;
        openDesc.classList.remove("open");
      }
    });

    // Toggle the current one
    const isOpen = desc.classList.contains("open");
    if (isOpen) {
      desc.style.maxHeight = null;
      desc.classList.remove("open");
    } else {
      desc.style.maxHeight = desc.scrollHeight + "px";
      desc.classList.add("open");
    }
  });
});

document.querySelectorAll(".info-header").forEach((header) => {
  header.addEventListener("click", () => {
    const desc = header.nextElementSibling;

    // Close any already-open descriptions
    document.querySelectorAll(".info-desc.open").forEach((openDesc) => {
      if (openDesc !== desc) {
        openDesc.style.maxHeight = null;
        openDesc.classList.remove("open");
      }
    });

    // Toggle the current one
    const isOpen = desc.classList.contains("open");
    if (isOpen) {
      desc.style.maxHeight = null;
      desc.classList.remove("open");
    } else {
      desc.style.maxHeight = desc.scrollHeight + "px";
      desc.classList.add("open");
    }
  });
});
