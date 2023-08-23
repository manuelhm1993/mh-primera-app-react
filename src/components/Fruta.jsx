import React from "react"; // En este caso si es necesario importar React

const Fruta = () => {
    // Array común y corriente
    const frutas = ['🍏', '🍓', '🍌', '🍒'];

    return (
        // Esta expresión es el React.Fragment resumido
        <>        
            {/* Iterar un array con react, se hace exactamente igual que en blade */}
            <ul>
                {
                    // Se usa map ya que para que se pueda renderizar, es necesario el return, foreach no retorna
                    frutas.map((fruta, index) => {
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
