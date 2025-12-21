function renderTask(value) {
  const container = document.getElementById("allContent");

  const newDiv = document.createElement("div");
  newDiv.className = "content-item";

  const selectIcon = document.createElement("button");
  selectIcon.className = "icon selectIcon";

  const newSpan = document.createElement("span");
  newSpan.textContent = value;

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
}

function addNewEntry() {
  const input = document.getElementById("entry");
  const text = input.value.trim();
  if (text) {
    renderTask(text);
    input.value = "";
    input.focus();
  }
}
