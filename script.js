$(function () {

    // DROPDOWN INSIDE NAVBAR

    $(".dropdown").click(function (event) {
        let dropdownItems = document.getElementsByClassName("dropdown-item");
        let dropdownDivider = document.getElementsByClassName("dropdown-divider");

        // DISPLAY ELEMENTS ONLY WHILE TOGGLE DOWN
        for (let i = 0; i < dropdownItems.length; i++) {
            dropdownItems[i].classList.toggle("show");
        }
        // DISPLAY DIVIDER ONLY WHILE TOGGLE DOWN
        for (let i = 0; i < dropdownDivider.length; i++) {
            dropdownDivider[i].classList.toggle("show");
        }
    });

    // DROPDOWN FOR MOBILE NAVBAR

    $(".navbar-toggler-icon").click(function (event) {
        let dropdownItems = document.getElementsByClassName("nav-item");

        // DISPLAY ELEMENTS FROM THE NAVBAR ONLY AFTER TOGGLE BUTTON HAS BEEN CLICKED
        for (let i = 0; i < dropdownItems.length; i++) {
            dropdownItems[i].classList.toggle("hidden");
        }
    });

    // POPINS

    $(".popins-btn").click(function (event) {

        let popinButton = document.getElementById("pop-btn");
        popinButton.dataset.target = "#modal-primary";

        // HIDE MODAL IF ESC PRESSED
        let popins = document.getElementsByClassName("modal");
        $(document).on('keydown', function (event) {
            if (event.key == "Escape") {
                for (let i = 0; i < popins.length; i++) {
                    popins[i].classList.toggle("hidden");
                }
            }
        });

        // HIDE MODAL IF CLICK OUTSIDE
        $(document).click(function (e) {
            if ($(e.target).is('.modal')) {
                for (let i = 0; i < popins.length; i++) {
                    popins[i].classList.toggle("hidden");
                }
            }
        });
    });

    // TABS

    $(".tab-item").click(function () {
        let tabItem = document.getElementsByClassName("tab-item");
        let tabContent = document.getElementsByClassName("tab-pane");

        for (let i = 0; i < tabItem.length; i++) {
            tabItem[i].classList.remove("active");
        }

        let activeItem = this;
        activeItem.classList.toggle("active");

        //for (let i = 0; i < tabContent.length; i++) {
            //tabContent[1].classList.toggle("hidden");
        //}
    });
});


