function addNewEntry() {
  const container = document.getElementById("allContent");
  const newEntry = document.getElementById("entry");
  if (newEntry.value.trim() == "") {
    return;
  }
  const newDiv = document.createElement("div");
  newDiv.className = "content-item";
  const newSpan = document.createElement("span");
  newSpan.textContent = newEntry.value;
  newDiv.appendChild(newSpan);
  container.appendChild(newDiv);
  newEntry.value = "";
}
