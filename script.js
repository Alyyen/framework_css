/*$("#btn-danger").click(function (e) {
    $alertDanger =
    REGARDER POUR UNE MODALE
});*/
$(function () {

    // DROPDOWN INSIDE NAVBAR

    $(".dropdown").click(function (event) {
        let dropdownItems = document.getElementsByClassName("dropdown-item");

        for (let i = 0; i < dropdownItems.length; i++) {
            dropdownItems[i].classList.toggle("show");
        }
    });

    // DROPDOWN FOR MOBILE NAVBAR

    $(".navbar-toggler-icon").click(function (event) {
        let dropdownItems = document.getElementsByClassName("nav-item");

        for (let i = 0; i < dropdownItems.length; i++) {
            dropdownItems[i].classList.toggle("hidden");
        }
    });
});


