// // //card 1
// const myInput = document.getElementById("input-1");

// myInput.addEventListener("input", function(event){
//   const value = event.target.value;
// if (!/^\d*$/.test(value)) {
//     alert("Please enter only numbers.");
//     event.target.value = value.replace(/[^\d]/g, "");
// }
// });

// myInput.addEventListener("click", function(event){
//   const value = myInput.value;
//   if (value === "") {
//     alert("Please enter a value.");
//     event.preventDefault();
//   } else if (!/^\d*$/.test(value)) {
//     alert("Please enter only numbers.");
//     event.preventDefault();
//   }
// });

// //input 2
// const myInput2 = document.getElementById("second-input");
// myInput2.addEventListener("input", function(event){
//   const value = event.target.value;
//   if (!/^\d*$/.test(value)) {
//     alert("Please enter only numbers.");
//     event.target.value = value.replace(/[^\d]/g, "");
//   }
// });
// myInput2.form.addEventListener("click", function(event){
//     const value = myInput.value;
//     if (!/^\d*$/.test(value)) {
//       alert("Please enter only numbers.");
//       event.preventDefault();
//     }
// });
// const numberInput = document.getElementById("input-1");
// numberInput.addEventListener("input", function() {
//       const value = numberInput.value;
//       if (value === "") {
//         alert("Please enter a value.");
//       } else if (!/^\d*$/.test(value)) {
//         alert("Please enter only numbers.");
//         numberInput.target.value = value.replace(/[^\d]/g, "");
//       }
//     });
    
//     numberInput.addEventListener("click", function() {
//       const value = inputElement.value;
//       if (value === "") {
//         alert("Please enter a value.");
//         numberInput.preventDefault();
//       } else if (!/^\d*$/.test(value)) {
//         alert("Please enter only numbers.");
//         numberInput.preventDefault();
//       }
//     });
// const numberInput = document.getElementById("numberInput");
  
// numberInput.addEventListener("input", function(event) {
//   const value = event.target.value;
//   if (value === "") {
//     alert("Please enter a value.");
//   }
// });

// numberInput.form.addEventListener("submit", function(event) {
//   const value = numberInput.value;
//   if (value === "") {
//     alert("Please enter a value.");
//     event.preventDefault();
//   }
// });
//----------------------------------------------------------
// const numberInput = document.getElementById("input-1");
  
//   numberInput.addEventListener("input", function(event) {
//     const value = event.target.value;
//     if (value === "") {
//       alert("Please enter a value.");
//     }
//   });
  
//   numberInput.from.addEventListener("submit", function(event) {
//     const value = numberInput.value;
//     if (value === "") {
//       alert("Please enter a value.");
//       event.preventDefault();
//     }
//   });
//---------------------------------------------
//first card
//input-1
const myInput = document.getElementById("input-1");

myInput.addEventListener("input", function(event) {
  const value = event.target.value;
  if (!/^\d*$/.test(value)) {
    alert("Please enter only numbers.");
    event.target.value = value.replace(/[^\d]/g, "");
  }
});

const myButton = document.getElementById("first-card");

myButton.addEventListener("click", function(event) {
  const value = myInput.value;
  if (value === "") {
    alert("Please enter a value.");
  }
});

//input 2
const myInput2 = document.getElementById("input-2");

myInput2.addEventListener("input", function(event) {
  const value = event.target.value;
  if (!/^\d*$/.test(value)) {
    alert("Please enter only numbers.");
    event.target.value = value.replace(/[^\d]/g, "");
  }
});

const myButton2 = document.getElementById("first-card");

myButton2.addEventListener("click", function(event) {
  const value = myInput.value;
  if (value === "") {
    alert("Please enter a value.");
  }
});

//card 2
const myInput4 = document.getElementById("input-3");

myInput4.addEventListener("input", function(event) {
  const value = event.target.value;
  if (!/^\d*$/.test(value)) {
    alert("Please enter only numbers.");
    event.target.value = value.replace(/[^\d]/g, "");
  }
});
const myInput5 = document.getElementById("input-4");


const myButton3 = document.getElementById("second-card");

myButton3.addEventListener("click", function(event) {
  const value = myInput5.value;
  if (value === "") {
    alert("Please enter a value.");
  }
});

//input 2



