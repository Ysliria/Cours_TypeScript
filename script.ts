const form = document.getElementById('signupForm') as HTMLFormElement; // Assertion Type
const firstname = document.getElementById('firstname') as HTMLInputElement; // Assertion Type
const age = document.getElementById('age') as HTMLInputElement; // Assertion Type

function gift(age: number): number {
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

let colors: Array<string> = ['red', 'blue', 'green', 'orange'];
let numbers : number[];

let test: (string | number | boolean)[] = ['test', 3, true];
let others: Array<string|number|boolean>; // notation équivalente à la précédente

let tuple: [string, number];

let anObject: {color: string; year: number; speed: number} = {
    color: 'red',
    year: 2020,
    speed: 240
}

let aFunction: Function; // type fonction

// Objet ENUM
enum Level {
    ADMIN,
    MODERATOR,
    SUPPORT,
    USER_READ_ONLY
}
// on peut définir les index manuellement : ADMIN = 6
// Appel : Level.ADMIN

// Type ANY pas de vérificatin type UNKNOWN vérification : pivilégié UNKNOWN

// Paramêtre optionnel
function buildName(firstname: string, lastname?: string): string {
    return firstname + ' ' + lastname;
}

// Valeur par défaut
function reBuildName(firstname: string, lastname: string = 'DOE'): string {
    return firstname + ' ' + lastname;
}

// Alias de type
type NumStr = number | string;
let aliasType: NumStr; // équivaut à let aliasType: number|string;

// Literal type :
function calcul(arg1: number, arg2: number, calcul: 'addition'|'soustraction') {
    if (calcul == 'addition') {
        return arg1 + arg2;
    } else if (calcul == 'soustraction') {
        return arg1 + arg2;
    }
}
