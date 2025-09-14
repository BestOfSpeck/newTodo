const loadTemplate = (data, index) => {
  return `
       <div class="card">
        <span>
          ${data}
        </span>

          <div class="d-flex">
             <button onclick="openEditPopup()" class="card-btn">
              <img src="img/edit.png">
            </button>

            <button onclick="deleteNote(${index})" class="card-btn">
              <img src="img/delete.png">
            </button>
          </div>
       </div>
    `;
};
