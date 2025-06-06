'use strict';

$(document).ready(function (){
    $('.admin-login').click();
});

    window.changeCredentials = function (email, password) {
        $('#email').val(email);
        $('#password').val(password);
    };

    $(document).on('click', '.admin-login', function () {
            changeCredentials('admin@omarhajjoub.com', '123456');
        },
    );

    $(document).on('click', '.doctor-login', function () {
            changeCredentials('doctor@omarhajjoub.com', '123456');
        },
    );

$(document).on('click', '.patient-login', function () {
        changeCredentials('patient@omarhajjoub.com', '123456');
    },
);

