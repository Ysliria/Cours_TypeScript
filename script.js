var form = document.getElementById('signupForm'); // Assertion Type
var firstname = document.getElementById('firstname'); // Assertion Type
var age = document.getElementById('age'); // Assertion Type
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
var colors = ['red', 'blue', 'green', 'orange'];
var numbers;
var test = ['test', 3, true];
var others; // notation équivalente à la précédente
var tuple;
var anObject = {
    color: 'red',
    year: 2020,
    speed: 240
};
var aFunction; // type fonction
// Objet ENUM
var Level;
(function (Level) {
    Level[Level["ADMIN"] = 0] = "ADMIN";
    Level[Level["MODERATOR"] = 1] = "MODERATOR";
    Level[Level["SUPPORT"] = 2] = "SUPPORT";
    Level[Level["USER_READ_ONLY"] = 3] = "USER_READ_ONLY";
})(Level || (Level = {}));
// on peut définir les index manuellement : ADMIN = 6
// Appel : Level.ADMIN
// Type ANY pas de vérificatin type UNKNOWN vérification : pivilégié UNKNOWN
// Paramêtre optionnel
function buildName(firstname, lastname) {
    return firstname + ' ' + lastname;
}
// Valeur par défaut
function reBuildName(firstname, lastname) {
    if (lastname === void 0) { lastname = 'DOE'; }
    return firstname + ' ' + lastname;
}
var aliasType; // équivaut à let aliasType: number|string;
// Literal type :
function calcul(arg1, arg2, calcul) {
    if (calcul == 'addition') {
        return arg1 + arg2;
    }
    else if (calcul == 'soustraction') {
        return arg1 + arg2;
    }
}
