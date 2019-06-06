// POP-UP JS
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("help-btn").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("help-btn").style.display = "block";
}
var change = 1;
function setInvert() {
  if (change == 1) {
    document.getElementById("header").style.background = "#add8e6";
    document.getElementById("done-header").style.background = "#000000";
    document.getElementById("done-header").style.fontWeight = "900";
    document.getElementById("done-header").style.color = "#fff";
    document.getElementById("doing-header").style.background = "#ffff00";
    document.getElementById("doing-header").style.fontWeight = "900";
    document.getElementById("todo-header").style.background = "#ff0000";
    document.getElementById("todo-header").style.fontWeight = "900";
    document.getElementById("viktig").style.fontWeight = "900";
    document.getElementById("Group").style.fontWeight = "900";
    document.getElementById("item").style.fontWeight = "900";
    document.getElementById("cardInfoBtn").style.fontWeight = "900";
    document.getElementById("cancelBtn").style.fontWeight = "900";
    document.getElementById("invertBtn").style.fontWeight = "900";
    document.getElementById("help-btn").style.fontWeight = "900";
    document.body.style.fontSize = "30px";
    change = 2;
  } else {
    document.getElementById("header").style.background = "#ffd553";
    document.getElementById("done-header").style.background = "#66B85A";
    document.getElementById("done-header").style.fontWeight = "normal";
    document.getElementById("done-header").style.color = "#000000";
    document.getElementById("doing-header").style.background = "#e7ce89";
    document.getElementById("doing-header").style.fontWeight = "normal";
    document.getElementById("todo-header").style.background = "#339DA4";
    document.getElementById("todo-header").style.fontWeight = "normal";
    document.getElementById("viktig").style.fontWeight = "normal";
    document.getElementById("Group").style.fontWeight = "normal";
    document.getElementById("item").style.fontWeight = "normal";
    document.getElementById("cardInfoBtn").style.fontWeight = "normal";
    document.getElementById("cancelBtn").style.fontWeight = "normal";
    document.getElementById("invertBtn").style.fontWeight = "normal";
    document.getElementById("help-btn").style.fontWeight = "normal";
    document.body.style.fontSize = "15px";
    change = 1;
  }
}

const mybutton = document.getElementById("invertBtn");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cardInfoBtn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
function displayCardInfo() {
  cardInfoBtn.onclick = function() {
    modal.style.display = "block";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

displayCardInfo();
