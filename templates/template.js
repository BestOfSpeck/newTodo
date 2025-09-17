const loadTemplate = (data, index) => {
  return `
       <div class="card">
        <div>
          <div class="card-title-container">
            ${data.title}

            <span>${data.datetime}</span>
          </div>
        </div>

          <div class="d-flex">
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
        <input type="datetime-local" id="form_Datetime_input" placeholder="Datum und Uhrzeit" />
        <input type="time" name="" id="" placeholder="Uhrzeit" />
        <input type="text" name="" id="" placeholder="Zusätzliche Infos" />
      </form>
  `;
};
