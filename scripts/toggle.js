

// function showSectionById(id) {
  // hide all the sections
//   document.getElementById("add-money-form").classList.add("hidden");
//   document.getElementById("cash-out-form").classList.add("hidden");


  // show the section with the provide id as parameter
//   document.getElementById(id).classList.remove("hidden");
// }


document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    console.log("show add money button clicked");
    showSectionById("add-money-form");
  });
document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    showSectionById("cash-out-form");
  });


  document
    .getElementById("show-transaction-history")
    .addEventListener("click", function () {
      showSectionById("transaction-section");
    });
