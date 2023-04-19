import React, { useState } from "react";

const Agenda = () => {
  const [selection, setSelection] = useState([]);

  const opciones = [
    { id: 1, dia: "Monday:" },
    { id: 2, dia: "Thuesday:" },
    { id: 3, dia: "Wednesday:" },
    { id: 4, dia: "Thursday:" },
    { id: 5, dia: "Friday:" },
  ];

  const horas = [
    "9 to 1 am ",
    "1 to 3 pm",
    "3 to 6 pm",
  ];

  const handleSelection = (evento) => {
    const optionSelected = evento.target.value;
    if (selection.includes(optionSelected)) {
      setSelection(selection.filter((dia) => dia !== optionSelected));
    } else {
      setSelection([...selection, optionSelected]);
    }
  };

  const selectAll = () => {
    const todos = opciones.flatMap(opcion =>
      horas.map(hora => `${opcion.dia} ${hora}`)
    );
    setSelection(todos);
  }
  const deselectAll = () => {
    setSelection([]);
  }

  return (
    <div className="textColorGreen textItalic text-center">
      <h3>Select your available days and time for a visit:</h3>
      {opciones.map((opcion) => (
        <div key={opcion.id}>
          <h4>{opcion.dia}</h4>
          {horas.map((hora) => (
            <label key={hora}>
              <input
                
                type="checkbox"
                className="form-checkbox focus:outline-none focus:ring-2 hover:border-green-300 selecter"
                value={`${opcion.dia} ${hora}`}
                checked={selection.includes(`${opcion.dia} ${hora}`)}
                onChange={handleSelection}
              />
              {hora}
            </label>
          ))}
        </div>
      ))}
      <div className="buttonSmallBlack">
       <button onClick={selectAll}>Select all</button> 
      </div>
      <div className="buttonSmallBlack" >
        <button onClick={deselectAll}>Deselect All</button>
      </div>
    </div>
  );
};

export default Agenda;
