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
        <input type="time" name="" id="form_Time_input" placeholder="Uhrzeit" />
        <input type="text" name="" id="form_info_input" placeholder="Zusätzliche Infos" />
      </form>
  `;
};
