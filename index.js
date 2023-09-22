// Očkování - objekty
//-----------------------------------------------------------
// Vytvořte objekt s údaji o uživateli.

// Pokračujme v našem registračním systému na očkováni. Zatím se umíme uživatele zeptat na jméno a věk.

// const userName = prompt('Vítejte! Zadejte své celé jméno:');
// const userAge = Number(prompt('Zadejte věk uživatele:'));
// document.body.innerHTML +=
//   '<p>Zaregistrovaný pacient: ' + userName + ', věk: ' + userAge + '</p>';

// Vytvořte objekt person, do kterého vložte uživatelem zadané údaje. Objekt bude mít následující strukturu

// {
//   name: 'Květoslav Voňavý',
//   age: 67,
// }

const person = {
  name: prompt('Vítejte! Zadejte své celé jméno:'),
  age: Number(prompt('Zadejte věk uživatele:')),
  password: prompt('Zadej své heslo.'),
  language: window.navigator.language,
};
const language = window.navigator.language;
document.body.innerHTML +=
  '<p>Uživatel: ' + person.name + ' ,věk: ' + person.age + '</p>';
// Přidejte do objektu person údaj o tom, v jakém jazyce si uživatel přeje komunikovat. Zjistěte jej z objektu window.

// const language = window.navigator.language;
// document.body.innerHTML += language;

// Poté, co uživatel zadá všechny údaje, vypište do stránky objekt person se všemi jeho vlastnostmi v nějakém hezkém formátu a zkontrolujte, že obsahuje správné informace.
// document.body.innerHTML +=
//   '<p>Uživatel: ' +
//   person.name +
//   ' ,věk: ' +
//   person.age +
//   '</p>' +
//   '<p>Byl úspěšně zaregistrován.</p>';

//-------------------------------------------------------------------------------------------
// Registrace na očkování
// V předchozí lekci jsem vytvářeli stránku pro registraci na očkování. Chtěli jsme po uživateli jméno a věk. Nyní budeme chtít, aby uživatel zadal také heslo. To bychom v pozdější verzi aplikaci mohli použít například k přihlášení do systému.
// Vytvořte novou stránku, nebo pokračujte ve stránce z předchozí lekce pro registraci na očkování.
// Nejdříve nechte uživatele zadat všechny hodnoty, tedy jméno, věk i heslo. Uložte si je do dobře pojmenovaných proměnných.
// Napište první podmínku, ve které zkontrolujte, že věk uživatele je větší nebo roven 65. Pokud ano, vypište do stránky „věk v pořádku“. Pokud uživateli není alespoň 65 let, vypište „nízký věk“.
// Napište druhou podmínku, která zkontroluje, zda je zadané heslo delší než osm znaků. Pokud není, vypište „slabé heslo“. Heslo se bude kontrolovat pouze v případě, kdy uživatel splnil první podmínku (věk alespoň 65 let).

// if (person.age < 65) {
//   document.body.innerHTML += '<p>Nízký věk pro očkování.</p>';
// } else {
//   if (person.age >= 65) {
//     document.body.innerHTML += '<p>Věk je v pořádku.</p>';
//     if (person.password.length > 8) {
//       document.body.innerHTML += '<p>Heslo je v pořádku.';
//     } else {
//       document.body.innerHTML += '<p>Slabé heslo!';
//     }
//   }
// }

if (person.age >= 65) {
  document.body.innerHTML += '<p>Věk je v pořádku.</p>';
  if (person.password.length <= 8) {
    document.body.innerHTML += '<p>Slabé heslo</p>';
  } else {
    document.body.innerHTML += '<p>Heslo v pořádku.</p>';
  }
} else {
  document.body.innerHTML += '<p>Nízký věk.</p>';
}
