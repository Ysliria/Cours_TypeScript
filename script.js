var form = document.getElementById('signupForm');
var firstname = document.getElementById('firstname');
var age = document.getElementById('age');
function gift(age) {
    return age + 3;
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (+age.value < 18) {
        console.log('Inscription refusée !');
    }
    else {
        console.log("\n            Bienvenue ".concat(firstname.value, ".\n            Vous avez ").concat(age.value, ".\n            Vous aurez droit \u00E0 un cadeau quand vous aurez ").concat(gift(+age.value), " ans.\n       "));
    }
});
