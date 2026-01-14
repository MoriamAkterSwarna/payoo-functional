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

      // add to transaction history
      const div = document.createElement("div");
      div.classList.add("bg-white", "p-4", "my-4", "shadow", "rounded-lg");
      div.innerHTML = `
                <h4 class="text-xl font-bold">Add Money</h4>
                <p>Added: ${addMoney} Tk. New Balance: ${newBalance}</p>
                <p class="text-emerald-400 text-sm">Transaction Date: ${new Date().toLocaleString()}</p>
            `;

      document.getElementById("transaction-container").appendChild(div);
    } else {
      alert("Failed to add the money.");
    }
  });
