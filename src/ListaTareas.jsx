// importamos con llave{} porque no es un export default, sino un export normal de una constante en el archivo task.js
import { tasks as data } from "./Task";
import { useState, useEffect } from "react";


function ListaTareas() {
  const [tasks, setTasks] = useState([]);

  // esto se va a ejecutar cuando cargue el componente ListaTareas()
  useEffect(() => {
    setTasks(data);
  }, []);

  if (tasks.length === 0) {
    return <h1>No hay tareas pendientes.</h1>;
  }

  return (
    <div>
    
        {/* // recorro las tareas con map() y en map por cada tarea voy a retornar un div */}

        {tasks.map((task) => (
          <div key={task.id}>
            <h1>{task.titulo}</h1>
            <p>{task.descripcion}</p>
          </div>
        ))}
    </div>
  );
}

export default ListaTareas;
