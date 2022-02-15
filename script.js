/*$("#btn-danger").click(function (e) {
    $alertDanger =
    REGARDER POUR UNE MODALE
});*/
$(function () {

// DROPDOWN

    $(".dropdown").click(function (event) {
        let dropdowns = document.getElementsByClassName("dropdown-menu");
        let dropdownToggle = document.getElementsByClassName("dropdown-toggle");

        let dropdownItems = document.getElementsByClassName("dropdown-item");

        for (let i = 0; i < dropdownItems.length; i++) {
            dropdownItems[i].classList.toggle("show");
            console.log(dropdownItems[i].className);
        }

    });
});


