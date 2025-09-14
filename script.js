let input = document.getElementById("header_input");
let container = document.getElementById("content_container");
let popupContainer = document.getElementById("popup_container");
let dataArray = [];

async function init() {
  const data = getData();

  if (data) {
    dataArray = JSON.parse(data);
  }

  await render();
}

const getData = () => {
  return localStorage.getItem("data");
};

async function saveData() {
  dataArray.push(input.value);
  localStorage.setItem("data", JSON.stringify(dataArray));

  await render();
  input.value = "";
}

function deleteNote(index) {
  dataArray.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(dataArray));
  render();
}

async function render() {
  container.innerHTML = "";
  dataArray.forEach((item, index) => {
    container.innerHTML += loadTemplate(item, index);
  });
}

function openEditPopup() {
  container.classList.add("d-none");
  popupContainer.style.display = "flex";
}
