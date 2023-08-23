import React from "react"; // En este caso si es necesario importar React

// Todas las propiedades, parámetros, hijos se van a recibir en el objeto props
const Fruta = (props) => {
    console.log(props);
    
    return (
        // Esta expresión es el React.Fragment resumido
        <>        
            {/* Iterar un array con react, se hace exactamente igual que en blade */}
            <ul>
                {
                    // Se usa map ya que para que se pueda renderizar, es necesario el return, foreach no retorna
                    // props es un objeto que tiene en su interior los parámetros recibidos, no usar this. porque es un arrow function
                    props.frutasProp.map((fruta, index) => {
                        // Cada li se debe identificar con un key único
                        return <li key={fruta}>{index + 1} - {fruta}</li>;
                    }) 
                }
            </ul>

            <p>Lorem ipsum dolor sit amet.</p>
        </>
    )
}

export default Fruta
