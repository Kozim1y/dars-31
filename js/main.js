var elForm = document.querySelector(".form-name");
var elResult = document.querySelector(".result");
var elNameJs = document.querySelector(".name-js");

var Budget = 90;
var Contract = 70;
var Supper_Contract = 50;

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  var elLastName = document.querySelector(".last-name").value;
  var elName = document.querySelector(".first-name").value;
  var elPoints = parseFloat(document.querySelector(".points").value, 10);

  if (elPoints >= Budget) {
    elNameJs.textContent = `${elLastName} ${elName}`
    elResult.textContent = "Tabriklaymiz Davlat Granti asosida o'qishga tavsiya etildingiz!"
  } 
  else if (elPoints >= Contract) {
    elNameJs.textContent = `${elLastName} ${elName}`
    elResult.textContent = "Tabriklaymiz To'lov Kantrakti asosida o'qishga tavsiya etildingiz!"
  }
  else if (elPoints >= Supper_Contract) {
    elNameJs.textContent = `${elLastName} ${elName}`
    elResult.textContent ="(Pulini ko'tarsanggiz tabriklaymiz). Qo'shimcha To'lov Kantrakti asosida o'qishga tavsiya etildingiz!"
  }
  else {
    elNameJs.textContent = `${elLastName} ${elName}`
    elResult.textContent = "O'qishga tavsiya etilmadingiz : ("
  }















})