let header = document.createElement('header');
document.body.appendChild(header);

let nav = document.createElement('nav');
header.appendChild(nav);

let main = document.createElement('main');
document.body.appendChild(main);

//-----------------------------------------------------

let burger = document.createElement('div');
burger.classList.add('burger');
burger.innerHTML = '<i class="fas fa-bars"></i>';
nav.appendChild(burger);

burger.addEventListener('click', () => {
    if (navList.style.display === 'none') {
        navList.style.display = 'block';
    } else {
        navList.style.display = 'none';
    }
})
//----------------------------------------------------
    let navList = document.createElement('ul');
    navList.classList.add('lists');
    header.appendChild(navList);

    for (i = 0; i < 5; i++){
        let element = document.createElement('a');
        element.href = '#';
        element.innerText = `Link`;
        navList.appendChild(element);
    };
//--------------------------------------------------

let section1 = document.createElement('section');
section1.style["background"] = `url('image/1.jpg')`;
section1.style['backgroundSize'] = 'cover';
main.append(section1);

let counter = 2;
setInterval(function () {
    section1.style["background"] = `url('image/${counter}.jpg')`;
    section1.style['backgroundSize'] = 'cover';
    
    
    counter++;

    if (counter === 4) {
        counter = 1;
    }
}, 2000);

//----------------------------------------------
let section2 = document.createElement('section');
let timer = document.createElement('p');
timer.innerText = getCurrentTime();
section2.append(timer);

setInterval(function () {
    timer.innerText = getCurrentTime();
    section2.append(timer);
}, 1000);

main.append(section2);
function getCurrentTime() {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let hoursDisplay = hours > 9 ? hours + ':' : '0' + hours + ':';
    let minutesDisplay = minutes > 9 ? minutes + ':' : '0' + minutes + ':';
    let secondsDisplay = seconds > 9 ? seconds : '0' + seconds;

    return `${hoursDisplay}${minutesDisplay}${secondsDisplay}`;
}

//---------------------------------------------------

let section3 = document.createElement('section')

let form = document.createElement('form');
section3.append(form);

let labelName = document.createElement('label');
form.append(labelName);
labelName.innerText = 'Your Name:'

let inputName = document.createElement('input');
inputName.setAttribute('id', 'inputName');
form.append(inputName);

let labelEmail = document.createElement('label');
form.append(labelEmail);
labelEmail.innerText = 'Your Email address:';

let inputEmail = document.createElement('input');
inputEmail.setAttribute('id', 'inputEmail');
form.append(inputEmail);

let labelTextarea = document.createElement('label');
form.append(labelTextarea);
labelTextarea.innerText = 'Type your message:';

let inputTextarea = document.createElement('textarea');
inputTextarea.setAttribute('id', 'inputTextarea');
form.append(inputTextarea);

let submit = document.createElement('button');
form.append(submit);
submit.innerText = 'Send';

main.append(section3)


submit.addEventListener('click', (event) => {

    let username = document.querySelector('#inputName').value,
        email = document.querySelector('#inputEmail').value,
        message = document.querySelector('#inputTextarea').value;

    if (username == null || username == '') {
        inputName.value = 'type your name';  
    } else if (email == null || email == '') {
        inputEmail.value = 'type your email';
    } else if (message == null || message == '') {
        inputTextarea.value = 'type your message';
    } else {
        submit.innerHTML = 'Send';
    }
    event.preventDefault();
});
//---------------------------------------------
let footer = document.createElement('footer');
footer.innerHTML = 'Copyright <span class="far fa-copyright" style="font-weight: bold;"> Vaidas Šauklys</span>';
document.body.appendChild(footer);



