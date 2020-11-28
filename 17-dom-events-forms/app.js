const form = document.querySelector("#signup-form");
const creditCardInput = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#tos");
const vegetableSelect = document.querySelector("#vegetable");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("cc", creditCardInput.value);
//   console.log("tos", termsCheckbox.checked);
//   console.log("vegetable", vegetableSelect.value);
// });

const formData = {};
for (let input of [creditCardInput, termsCheckbox, vegetableSelect]) {
  input.addEventListener("input", ({target}) => {
    const {name, type, value, checked} = target;
    formData[name] = type === 'checkbox' ? checked : value;
    console.log(formData);
  });
}

// creditCardInput.addEventListener("input", function (e) {
//   formData.cc = e.target.value;
// });
// termsCheckbox.addEventListener("input", function (e) {
//   formData.tos = e.target.checked;
// });
// vegetableSelect.addEventListener("input", function (e) {
//   formData.veggie = e.target.value;
// });

// {
//   cc: '123456',
//   tos: true,
//   veggie: 'carrot'
// }
