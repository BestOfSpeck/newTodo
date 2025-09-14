const loadTemplate = (data, index) => {
  return `
       <div class="card">
        <span>
          ${data}
        </span>

        <button onclick="deleteNote(${index})" class="card-delete-btn">
          <img src="../img/delete.png">
        </button>
       </div>
    `;
};
