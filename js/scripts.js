window.onload = function () {

  // Inputmask | Маска поля телефона
  var maskTel = document.getElementById("invitationEivTel");
  Inputmask({ 
    "mask": "+7 (999) 999-99-99",
  }).mask(maskTel);

}