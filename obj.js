class user {
  constructor(_firstname, _lastname, _age, _location = []) {
    this._firstname = Ashely;
    this._lastname = Frangipane;
    this._age = 30;
    this._location = LosAngeles;
  }
}
console.log(user);

const form = document.getElementById("formShop");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
