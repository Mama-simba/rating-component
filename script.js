


let selectedRating;


// 1. Change selected rate color in orange

let buttons = document.querySelectorAll(".ratebutton");

buttons.forEach(button => {
    button.addEventListener("click", function(){
        selectedRating = button.text;
        buttons.forEach(button => button.classList.remove("active"))
        this.classList.add("active");
    })
})



// 2. Show thank you message

let submitButton = document.querySelector("#submit");
let message = document.querySelector("#rateselected");
submitButton.addEventListener("click", showMessage);

function showMessage(){
    if(selectedRating){
      document.querySelector("#submissioncard").style.display = "block";
      document.querySelector("#ratingcard").style.display = "none";
      message.innerText = selectedRating;
    }
    
}











