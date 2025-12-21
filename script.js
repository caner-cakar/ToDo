function addNewEntry() {
  const container = document.getElementById("allContent");
  const newEntry = document.getElementById("entry");
  const text = newEntry.value.trim();
  if (!text) {
    return;
  }
  const newDiv = document.createElement("div");
  newDiv.className = "content-item";

  const selectIcon = document.createElement("button");
  selectIcon.className = "icon selectIcon";

  const newSpan = document.createElement("span");
  newSpan.textContent = text;

  const trashIcon = document.createElement("button");
  trashIcon.className = "icon trashIcon";

  selectIcon.onclick = function () {
    if (this.style.backgroundImage.includes("checked.png")) {
      this.style.backgroundImage = "url('img/notselected.png')";
      newSpan.style.textDecoration = "none";
    } else {
      this.style.backgroundImage = "url('img/checked.png')";
      newSpan.style.textDecoration = "line-through";
    }
  };

  trashIcon.onclick = function () {
    newDiv.remove();
  };

  newDiv.append(selectIcon, newSpan, trashIcon);
  container.appendChild(newDiv);
  newEntry.value = "";
  newEntry.focus();
}

function checkContentSize()
{
  const container = document.getElementById("allContent");
}
