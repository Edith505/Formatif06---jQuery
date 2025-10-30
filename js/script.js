$(document).ready(function () {
    //selection des éléments
    $('#fullnameHelp').hide();
    $('#emailHelp').hide();
    $('#levelHelp').hide();
    $('#langageHelp').hide();


    //erreur de saisi nom
    $('#fullname').on('input', function () {
        const nomSaisi = $(this).val().trim();
        if (nomSaisi.length < 2) {
            $('#fullnameHelp').show();
        } else {
            $('#fullnameHelp').hide();
        }
    })

    //erreur de saisi nom
    $('#email').on('input', function() {
        const email = $(this).val().trim();
        if (!isValidEmail(email)) {
            $('#emailHelp').show();
        } else {
            $('#emailHelp').hide();
        }
    });

    //fonction Validation email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});