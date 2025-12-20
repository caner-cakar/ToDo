function addNewEntry() {
  const container = document.getElementById("allContent");
  const newEntry = document.getElementById("entry");
  if (newEntry.value.trim() == "") {
    return;
  }
  const newDiv = document.createElement("div");
  newDiv.textContent = newEntry.value;
  container.appendChild(newDiv);
  newEntry.value = "";
}
