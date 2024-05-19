function add(e) {
  e.preventDefault();
  let newItemText = document.querySelector(".add_item_box input").value;
  if (newItemText) {
    let newLI = document.createElement("li");
    newLI.className = "items";
    newSpan = document.createElement("span");
    newSpan.innerText = newItemText;
    newLI.appendChild(newSpan);
    newDiv = document.createElement("div");
    newDiv.className = "items_icons";
    newIconOne = document.createElement("i");
    newIconOne.className = "fa-solid fa-pen";
    newIconOne.addEventListener("click", editItem);
    newIconTwo = document.createElement("i");
    newIconTwo.className = "fa-solid fa-trash";
    newIconTwo.addEventListener("click", deleteItem);
    newDiv.appendChild(newIconOne);
    newDiv.appendChild(newIconTwo);
    newLI.appendChild(newDiv);
    document.querySelector(".list_items").appendChild(newLI);
    document.querySelector(".add_item_box input").value = "";
  }
}

function deleteItem(e) {
  let res = confirm(
    `Are you sure you want to delete "${
      e.target.parentElement.parentElement.querySelector("span").innerText
    }"?`
  );
  if (res) {
    e.target.parentElement.parentElement.remove();
  }
}

function editItem(e) {
  let selectedItemLI = e.target.parentElement.parentElement;
  let selectedItemActionDiv = e.target.parentElement;
  let newIcon = document.createElement("i");
  newIcon.className = "fa-solid fa-check";
  newIcon.addEventListener("click", submitEditedItem);
  let newInput = document.createElement("input");
  newInput.type = "text";
  newInput.value = selectedItemLI.querySelector("span").innerText;
  selectedItemLI.querySelector("span").style.display = "none";
  selectedItemActionDiv.querySelector(".fa-pen").style.display = "none";
  selectedItemActionDiv.querySelector(".fa-trash").style.display = "none";
  selectedItemActionDiv.prepend(newIcon);
  selectedItemLI.prepend(newInput);
}

function submitEditedItem(e) {
    let selectedItemLI = e.target.parentElement.parentElement;
    let selectedItemActionDiv = e.target.parentElement;
    let editedItemText = selectedItemLI.querySelector("input").value;
    if(editedItemText) {
        selectedItemActionDiv.querySelector(".fa-check").remove();
        selectedItemActionDiv.querySelector(".fa-pen").style.display = "inline-block";
        selectedItemActionDiv.querySelector(".fa-trash").style.display = "inline-block";
        selectedItemLI.querySelector("span").innerText = editedItemText;
        selectedItemLI.querySelector("span").style.display = "inline-block";
        selectedItemLI.querySelector("input").remove();
    }
}


function search(e) {
    e.preventDefault();
    let searchQuery = document.querySelector(".search_box input").value;
    let items = document.querySelectorAll(".list_items li");
    if(items.length) {
        items.forEach(item => {
            if(item.innerText.includes(searchQuery)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    }
}