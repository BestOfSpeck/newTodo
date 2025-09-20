let container = document.getElementById("content_container");
let popupContainer = document.getElementById("popup_container");
let headerAddButton = document.getElementById("header_add_btn");
let headerSaveButton = document.getElementById("header_save_btn");

let dataArray = [];

async function init() {
  const data = getData();

  if (data) {
    dataArray = JSON.parse(data);
    console.log(dataArray);
  }

  await render();
}

const getData = () => {
  return localStorage.getItem("data");
};

async function saveData() {
  let formNameInput = document.getElementById("form_name_input");
  let formDatetimeInput = document.getElementById("form_Datetime_input");
  let formTimeInput = document.getElementById("form_Time_input");
  let formInfoInput = document.getElementById("form_info_input");

  const date = new Date(formDatetimeInput.value);
  let formatedDate = customFormat(date);

  let data = {
    title: formNameInput.value,
    datetime: formatedDate,
    time: formTimeInput,
    info: formInfoInput,
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

function customFormat(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} - ${hours}:${minutes}`;
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
