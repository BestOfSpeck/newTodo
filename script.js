let container = document.getElementById("content_container");
let popupContainer = document.getElementById("popup_container");
let headerAddButton = document.getElementById("header_add_btn");
let headerSaveButton = document.getElementById("header_save_btn");

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
  let formNameInput = document.getElementById("form_name_input");
  let formDatetimeInput = document.getElementById("form_Datetime_input");

  let data = {
    title: formNameInput.value,
    datetime: formDatetimeInput.value,
  };

  dataArray.push(data);
  localStorage.setItem("data", JSON.stringify(dataArray));

  headerSaveButton.classList.add("d-none");
  headerAddButton.classList.remove("d-none");
  headerAddButton.style.display = "";
  popupContainer.style.display = "none";
  container.classList.remove("d-none");
  await render();
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
  headerAddButton.classList.add("d-none");
  headerSaveButton.classList.remove("d-none");

  popupContainer.innerHTML = loadEditNoteTemplate();
}
