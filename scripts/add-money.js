
// function getTextFieldValueById(id) {
//   const textValue = document.getElementById(id).innerText;
//   const textNumber = parseFloat(textValue);
//   return textNumber;
// }



document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("input-pin-number");

    if (isNaN(addMoney)) {
      alert("Failed to add money");
      return;
    }

    // wrong way to verify. do not try it at your serious website
    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");
      const newBalance = balance + addMoney;

      document.getElementById("account-balance").innerText = newBalance;
     
    } else {
      alert("Failed to add the money.");
    }
  });
