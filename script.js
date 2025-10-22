
/**
 * Converts an integer number into its Roman numeral representation.
 *
 * The function maps standard Roman numeral symbols to their corresponding
 * decimal values, then iteratively subtracts and appends symbols to build
 * the Roman numeral string. 
 **/

const convertNo = (numberInput) => {


  const romanValues = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let roman = '';
    for (let key in romanValues) {
        while (numberInput >= romanValues[key]) {
            roman += key;
            numberInput -= romanValues[key];
        }
    }
    return roman;

};
/**
 * Handles user input, validates it, and updates the page with
 * either an error message or the Roman numeral conversion result.
 *
 * This function is triggered when the user clicks the "Convert" button.
 * It retrieves the number entered in the input field, validates the value,
 * and displays either a validation message or the Roman numeral equivalent.
 **/


  const getuserInput = (event) => {
  event.preventDefault();

  const userInput = parseInt(document.getElementById("number").value);

  if (!userInput) {
     document.getElementById("output").innerText = "Please enter a valid number";
     return;
  }

  if (userInput <= -1) {
     document.getElementById("output").innerText = "Please enter a number greater than or equal to 1";
     return;
  }

  if (userInput >= 4000) {
     document.getElementById("output").innerText = "Please enter a number less than or equal to 3999";
     return;
  }

  document.getElementById("output").innerText = convertNo(userInput);
  
};
 const convertBtn = document.getElementById("convert-btn");
  convertBtn.addEventListener("click", getuserInput);




