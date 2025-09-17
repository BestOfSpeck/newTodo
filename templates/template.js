const loadTemplate = (data, index) => {
  return `
       <div class="card">
        <span>
          ${data.title}
        </span>

          <div class="d-flex">
             <button class="card-btn">
              <img src="img/edit.png">
            </button>

            <button onclick="deleteNote(${index})" class="card-btn">
              <img src="img/delete.png">
            </button>
          </div>
       </div>
    `;
};

const loadEditNoteTemplate = () => {
  return `
      <form action="">

        <input type="text" id="form_name_input" placeholder="Name" />
        <input type="datetime-local" id="" placeholder="Datum und Uhrzeit" />
        <input type="time" name="" id="" placeholder="Uhrzeit" />
        <input type="text" name="" id="" placeholder="Zusätzliche Infos" />
      </form>
  `;
};
