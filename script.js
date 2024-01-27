 function handleScroll() {
            // Get the current scroll position
            var scrollPosition = window.scrollY;
            var element = document.getElementById('header');
            if(scrollPosition > 0){
                element.classList.add('scroll-header');
            } else {
                element.classList.remove('scroll-header');
            }

            // Log or do something with the scroll position
            console.log("Scroll Position: " + scrollPosition);
        }