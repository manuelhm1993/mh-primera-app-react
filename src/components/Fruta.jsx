// Array común y corriente
const frutas = ['🍏', '🍓', '🍌', '🍒'];

const Fruta = () => {
  return (
    <div>
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
    </div>
  )
}

export default Fruta
