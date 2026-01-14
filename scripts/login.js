// function getInputFieldValueById(id) {
//   const inputValue = document.getElementById(id).value;
//   const inputNumber = parseFloat(inputValue);

//   return inputNumber;
// }

document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // get phone number and pin
    // const phoneNumber = document.getElementById("phone-number").value;
    // const pinNumber = document.getElementById("pin-number").value;
    // console.log(phoneNumber, pinNumber);

    const phoneNumber = getInputFieldValueById("phone-number");
    const pinNumber = getInputFieldValueById("pin-number");
    console.log(phoneNumber, pinNumber);

    // bad way to validate
    if (phoneNumber === 1712345678 && pinNumber === 1234) {
      console.log("you are logged in");
      window.location.href = "/main.html";
    } else {
      alert("Wrong phone number or pin.");
    }
  });
