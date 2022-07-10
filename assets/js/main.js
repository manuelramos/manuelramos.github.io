console.log("loaded JS");
// Add event listener to all li elements

var menuItems = document.querySelectorAll("li");
menuItems.forEach(function(item) {
    item.addEventListener("click", function() {
        menuItems.forEach(function(item) {
            item.classList.remove("active")
        });
        this.classList.add("active");
    });
});

document.querySelector("#nav-item-home").classList.add("active");

// all li elements

