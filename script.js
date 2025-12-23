const storage = {
  get: () => JSON.parse(localStorage.getItem("tasks")) || [],
  set: (data) => localStorage.setItem("tasks", JSON.stringify(data)),
};

window.addEventListener("load", () => {
  getDataFromJson();

  const input = document.getElementById("entry");
  if (!input) return;

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addNewEntry();
    }
  });
});

function renderTask(value) {
  const container = document.getElementById("allContent");
  const newDiv = document.createElement("div");
  newDiv.className = "content-item";

  newDiv.innerHTML = `
    <button class="icon selectIcon" style="background-image: url('img/${
      value.lineT ? "checked" : "notselected"
    }.png')"></button>
    <span style="text-decoration: ${value.lineT ? "line-through" : "none"}">
      ${value.text}
    </span>
    <button class="icon trashIcon"></button>
  `;

  const [selectIcon, newSpan, trashIcon] = newDiv.children;

  selectIcon.onclick = () => {
    value.lineT = !value.lineT;
    selectIcon.style.backgroundImage = `url('img/${
      value.lineT ? "checked" : "notselected"
    }.png')`;
    newSpan.style.textDecoration = value.lineT ? "line-through" : "none";
    updateStorage(value);
  };

  trashIcon.onclick = () => {
    newDiv.remove();
    const tasks = storage.get().filter((t) => t.text !== value.text);
    storage.set(tasks);
  };

  container.appendChild(newDiv);
}

function addNewEntry() {
  const input = document.getElementById("entry");
  const val = input.value.trim();
  if (!val) return;

  const newTask = { text: val, lineT: false };
  renderTask(newTask);
  storage.set([...storage.get(), newTask]);

  input.value = "";
  input.focus();
}

function getDataFromJson() {
  storage.get().forEach(renderTask);
}

function updateStorage(updatedTask) {
  const tasks = storage
    .get()
    .map((t) => (t.text === updatedTask.text ? updatedTask : t));
  storage.set(tasks);
}
