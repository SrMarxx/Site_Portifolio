const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin');
const iconclose = document.querySelector('.close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

function verifica(senha) {
    var forca = 0;
    if (senha.length > 7){                     
        if (senha.match(/[a-z]+/)) forca++;
        if (senha.match(/[A-Z]+/)) forca++;
        if (senha.match(/d+/)) forca++;
        if (senha.match(/W+/)) forca++;
    };
    return forca;
}
  
function mostra_res(senha) {
  var res = verifica(senha);
  var cor;
  var msg;
  if (res < 2) {
    cor = "red";
    msg = "Fraca";
  } else if (res == 2) {
    cor = "orange";
    msg = "Média";
  } else {
    cor = "green";
    msg = "Forte";
  }
  document.getElementById("forca").innerHTML = "<span style='color:" + cor + ";'>" + msg + "</span>";
}