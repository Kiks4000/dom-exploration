addEventListener('keyup', function(event) {
    var firstName = document.getElementById('firstname');
    var displayFirstName = document.getElementById('display-firstname');
    displayFirstName.innerHTML = firstName.value;
}
);

addEventListener('keyup', function(event) {
    var password = document.getElementById('pwd');
    var passwordConfirmation = document.getElementById('pwd-confirm');
    if (password.value.length < 6) {
        password.style.borderColor = 'red';
    } else {
        password.style.borderColor = 'black';
    }
    if (password.value !== passwordConfirmation.value) {
        passwordConfirmation.style.borderColor = 'red';
    } else {
        passwordConfirmation.style.borderColor = 'black';
    }
}
);
    addEventListener('change', function(event) {
        var select = document.getElementById('toggle-darkmode');
        if (select.value === 'dark') {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    }
    );