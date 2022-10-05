let namestebtn = document.querySelector('button');
namestebtn.addEventListener('click', inputmsg);

function inputmsg() {
    let name = prompt('Enter name of student ');
    namestebtn.textContent = 'Roll no.1 : ' + name;

}