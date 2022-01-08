const form = document.getElementById('signupForm');
const firstname = document.getElementById('firstname') as HTMLInputElement;
const age = document.getElementById('age') as HTMLInputElement;

function gift(age: number) {
    return age + 3;
}

form.addEventListener('submit', e => {
    e.preventDefault();

    if (+age.value < 18) {
        console.log('Inscription refusée !');
    } else {
        console.log(`
            Bienvenue ${firstname.value}.
            Vous avez ${age.value}.
            Vous aurez droit à un cadeau quand vous aurez ${gift(+age.value)} ans.
       `);
    }
});
