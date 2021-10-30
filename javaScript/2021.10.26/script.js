// Sukurkite HTML dokumentą, kuris <body> dalyje turės tris žymas, t.y. <header>, <main>, <footer>. 	
// <header> dalyje bus navigacijos meniu su 5 nuorodomis, kuris bus “Responsive” (mobilioje versjoje turi būti “toggler” mygtukas, kurį paspaudus atsiranda meniu)	
// <main> dalyje bus trys <section>:	
// Pirmas <section> turės pilno pločio ir aukčio “slider” foną, kuriame bus trys paveikslėliai, kurie keisis kas 2 sekundės;	
// Antras <section> turės pilno pločio ir ne mažesnę nei 300px aukščio laikrodį (laikas rodomas kaip tekstas), kuriame bus matomos dabartinės valandos, minutės ir sekundės (atsinaujins realiu laiku);
// Trečias <section> turės kontaktų formą, kurią užpildžius, po ja pasirodys žinutė, kurioje nurodoma, kad forma užpildyta sėkmingai.


// let header = document.createElement('header');
// document.body.appendChild(header);

// let main = document.createElement('main');
// let section1 = document.createElement('section');



// let footer = document.createElement('footer');
// document.body.appendChild(footer);


// let section = document.createElement('section');
// main.appendChild(section);



// for (let i = 1; i <= 2; i++) {
//     let section = document.createElement('section');
//     main.appendChild(section);
// };
    

// setTimeout(() => {
//       section.innerHTML = `<img src='8batai.jpeg'>`;
//     }, 1000 * 2),
//     main.appendChild(section)

let header = document.createElement('header');

nav = document.createElement('nav');
nav.setAttribute('id', 'myTopNav', 'class', 'topnav');
nav.classList.add('topnav');
header.appendChild(nav);
document.body.appendChild(header);

let a1 = document.createElement('a');
let a2 = document.createElement('a');
let a3 = document.createElement('a');
let a4 = document.createElement('a');
let a5 = document.createElement('a');

a1.innerHTML = ` <a href="https://github.com/nonamez/fs2-5/tree/master/JS/2021-10-18/array-methods/assets/js">Link</a>`;
a2.innerHTML = ` <a href="https://github.com/nonamez/fs2-5/tree/master/JS/2021-10-18/array-methods/assets/js">Link</a>`;
a3.innerHTML = ` <a href="https://github.com/nonamez/fs2-5/tree/master/JS/2021-10-18/array-methods/assets/js">Link</a>`;
a4.innerHTML = ` <a href="https://github.com/nonamez/fs2-5/tree/master/JS/2021-10-18/array-methods/assets/js">Link</a>`;
a5.innerHTML = ` <a href="https://github.com/nonamez/fs2-5/tree/master/JS/2021-10-18/array-methods/assets/js">Link</a>`;

nav.append(a1, a2, a3, a4, a5);
nav.appendChild(a1);
nav.appendChild(a2);
nav.appendChild(a3);
nav.appendChild(a4);
nav.appendChild(a1, a2, a3, a4, a5);




let main = document.createElement('main');


let sectionFirst = document.createElement('section');
main.appendChild(sectionFirst);
let div = document.createElement('div');
div.setAttribute('class');
sectionFirst.appendChild(div);

var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = 'https://via.placeholder.com/150/300AAA';
images[1] = 'https://via.placeholder.com/150/000300';
images[2] = 'https://via.placeholder.com/150/AAA300';

function changePicture() {
    document.sectionFirst.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;
document.body.appendChild(sectionFirst);