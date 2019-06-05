function getLocalStorage() {
  localStorage.setItem("data", JSON.stringify(memberSave));
}
//Instansiating important DOM
var input = document.getElementById("item");
var label = document.getElementById("viktig");
var banan = document.getElementById("banan");

banan.addEventListener("click", function() {
  location.href = "bananabreak.html";
});

//Adding information to the "memberSave" to be displayed
var memberSave = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : [];

//implementing sortablejs
//Lage Todo sorterbar og kunne ta i mot elementer
var todo = document.getElementById("todo");
var sortable = Sortable.create(todo, {
  group: {
    name: "todo",
    pull: true,
    put: ["todo", "doing", "done"]
  }
});

//Lage doing sorterbar og kunne ta i mot elementer
var doing = document.getElementById("doing");
var sortable = Sortable.create(doing, {
  group: {
    name: "doing",
    pull: true,
    put: ["todo", "done", "doing"]
  }
});

//Lage done sorterbar og kunne ta i mot elementer
var done = document.getElementById("done");
var sortable = Sortable.create(done, {
  group: {
    name: "done",
    pull: true,
    put: ["todo", "doing", "done"]
  }
});

// Adding items to addItemTodo - Click + icon or press Enter button.
//Should return nothing if nothing is typed in to the input-field.
document.getElementById("add").addEventListener("click", function() {
  var value = document.getElementById("item").value;

  if (value === "") {
  } else {
    addItemTodo(value);
    document.getElementById("item").value = "";
  }
});

// enter for å legge til task
input.onkeyup = e => {
  var value = document.getElementById("item").value;

  if (e.keyCode == 13 && value) {
    addItemTodo(input.value);
    input.value = "";
  }
};

function addItemTodo(text) {
  var board = document.getElementById("board");

  //lage div til todo og div til items
  var list = document.getElementById("todo");
  var item = document.createElement("div");
  item.classList = "board-item-content";
  item.innerText = text;
  var input = document.getElementById("item");

  //Creating the remove
  var remove = document.createElement("div");
  remove.classList.add("remove");
  var removeSVG =
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
  remove.innerHTML = removeSVG;

  var info = document.createElement("div");
  info.classList.add("info");
  var infoSVG =
    "<?xml version='1.0' encoding='UTF-8'?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background='new 0 0 510 510' version='1.1' viewBox='0 0 510 510' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'><path d='m255 0c-140.25 0-255 114.75-255 255s114.75 255 255 255 255-114.75 255-255-114.75-255-255-255zm25.5 382.5h-51v-153h51v153zm0-204h-51v-51h51v51z'/></svg>";
  info.innerHTML = infoSVG;

  // add click event for removing
  remove.addEventListener("click", function() {
    item.style.display = "none";
    // få grid til å refreshe array.slice ??
  });

  var test = document.createElement("div");


  //make labels
  var label = document.createElement("div");
  label.classList.add("label");
  var greenLabelSVG =
    '<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 511.996 511.996" version="1.1" viewBox="0 0 511.996 511.996" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"> <path d="m256.03 511.96c-65.578 0-131.16-24.962-181.08-74.885-6.378-6.378-6.38-16.72 0-23.099 6.378-6.378 16.72-6.38 23.1 0 87.11 87.11 228.85 87.11 315.96 0 87.11-87.11 87.11-228.85 0-315.96-87.11-87.11-228.85-87.11-315.96 0-56.361 56.361-78.483 139.24-57.733 216.3 2.345 8.711-2.814 17.673-11.525 20.018-8.707 2.345-17.673-2.814-20.018-11.525-23.783-88.306 1.575-183.29 66.173-247.89 99.849-99.849 262.31-99.847 362.16 0 99.847 99.849 99.847 262.31 0 362.16-49.925 49.923-115.5 74.886-181.08 74.886z" fill="#507C5C"/> <circle cx="256.04" cy="256.01" r="154.6" fill="#CFF09E"/><path d="m256.03 426.92c-94.246 0-170.92-76.675-170.92-170.92s76.675-170.92 170.92-170.92 170.92 76.675 170.92 170.92-76.676 170.92-170.92 170.92zm0-309.18c-76.234 0-138.26 62.021-138.26 138.26s62.021 138.26 138.26 138.26 138.26-62.021 138.26-138.26-62.021-138.26-138.26-138.26z" fill="#507C5C"/></svg>';
  var yellowLabelSVG =
    '<?xml version="1.0" encoding="UTF-8"?><svg class="" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path class="active-path" d="m512 256c0 141.39-114.61 256-256 256s-256-114.61-256-256 114.61-256 256-256 256 114.61 256 256z" fill="#FFE800" data-old_color="#E76E54" data-original="#E76E54"/><path class="" d="m384 256c0 70.691-57.309 128-128 128s-128-57.309-128-128 57.309-128 128-128 128 57.309 128 128z" fill="#ff0" dataoriginal="#DD523C"/></svg>';
  var redLabelSVG =
    '<?xml version="1.0" encoding="UTF-8"?><svg width="17px" height="17px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m512 256c0 141.39-114.61 256-256 256s-256-114.61-256-256 114.61-256 256-256 256 114.61 256 256z" fill="#e76e54"/><path d="m384 256c0 70.691-57.309 128-128 128s-128-57.309-128-128 57.309-128 128-128 128 57.309 128 128z" fill="#dd523c"/></svg>';

  if (document.getElementById("viktig").value === "green") {
    label.innerHTML = greenLabelSVG;
    label.setAttribute("id", "GREEN");
  } else if (document.getElementById("viktig").value === "yellow") {
    label.innerHTML = yellowLabelSVG;
    label.setAttribute("id", "YELLOW");
  } else if (document.getElementById("viktig").value === "red") {
    label.setAttribute("id", "RED");
    label.innerHTML = redLabelSVG;
  }

  // legge til "ansatte" til item
  var select = document.getElementById("Group");
  var arr = ["D", "T", "U", "M", "B"];

  var option = document.createElement("div");
  option.classList.add("ansatt");

  if (select.value === "Danial") {
    option.innerHTML = arr[0];
    option.setAttribute("id", "Danial");
  } else if (document.getElementById("Group").value === "Thomas") {
    option.innerHTML = arr[1];
    option.setAttribute("id", "Thomas");
  } else if (document.getElementById("Group").value === "Umu") {
    option.innerHTML = arr[2];
    option.setAttribute("id", "Umu");
  } else if (document.getElementById("Group").value === "Martin") {
    option.innerHTML = arr[3];
    option.setAttribute("id", "Martin");
  } else if (document.getElementById("Group").value === "Benjamin") {
    option.innerHTML = arr[4];
    option.setAttribute("id", "Benjamin");
  }

  info.addEventListener("click", function() {
    var editInput = document.createElement("input");
    var inputEditText = document.createElement('h1');
    inputEditText.innerHTML = "Edit your task"
    inputEditText.classList = "displayEditText"
    editInput.classList = "input-display";
    board.appendChild(editInput);
    board.appendChild(inputEditText);

    editInput.onkeyup = e => {
      if (e.keyCode == 13 && editInput.value) {
        item.innerText = editInput.value;
        editInput.style.display = "none";
        inputEditText.style.display = "none";
        item.appendChild(remove);
        item.appendChild(info);
        item.appendChild(option);
        item.appendChild(label);
      }
    };
  });

  //legge til items til hoved-div
  item.appendChild(remove);
  item.appendChild(info);
  item.appendChild(option);
  item.appendChild(label);
  list.appendChild(item);

  // lagre tasks med info til objekt
  var taskSave = {
    Task: input.value,
    Label: label.id,
    Member: option.id
  };
  //legge tasks med info fra objekt til i array
  memberSave.push(taskSave);
  getLocalStorage();
}

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
    document.getElementById("header").style.filter = "hue-rotate(90deg)";
    document.getElementById("invertBtn").style.filter = "hue-rotate(-19deg)";
    document.getElementById("help-btn").style.filter = "hue-rotate(-290deg)";
    document.getElementById("cardInfoBtn").style.filter = "hue-rotate(-120deg)";
    document.getElementById("cancelBtn").style.filter = "hue-rotate(190deg)";
    document.getElementById("done-header").style.filter = "hue-rotate(120deg)";
    document.getElementById("done-header").style.fontWeight = "900";
    document.getElementById("working-header").style.filter ="hue-rotate(120deg)";
    document.getElementById("working-header").style.fontWeight = "900";
    document.getElementById("todo-header").style.filter = "hue-rotate(120deg)";
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
    document.getElementById("header").style.filter = "hue-rotate(0deg)";
    document.getElementById("invertBtn").style.filter = "hue-rotate(0deg)";
    document.getElementById("help-btn").style.filter = "hue-rotate(0deg)";
    document.getElementById("cardInfoBtn").style.filter = "hue-rotate(0deg)";
    document.getElementById("cancelBtn").style.filter = "hue-rotate(0deg)";
    document.getElementById("done-header").style.filter = "hue-rotate(0deg)";
    document.getElementById("done-header").style.fontWeight = "normal";
    document.getElementById("working-header").style.filter = "hue-rotate(0deg)";
    document.getElementById("working-header").style.fontWeight = "normal";
    document.getElementById("todo-header").style.filter = "hue-rotate(0deg)";
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

/*
mybutton.addEventListener('click', () => { 
  var rannumber1=Math.floor(Math.random() * 256 ); 
  var rannumber2=Math.floor(Math.random() * 256 ); 
  var rannumber3=Math.floor(Math.random() * 256 ); 
  var ranrgb="rgb("+rannumber1+","+rannumber2+","+rannumber3+")";
  document.getElementById("header").style.backgroundColor=ranrgb; });
*/
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cardInfoBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
function displayCardInfo() {
  cardInfoBtn.onclick = function() {
    modal.style.display = "block";
    span.onclick = function() {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };
}
displayCardInfo();
