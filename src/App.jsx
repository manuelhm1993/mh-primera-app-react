const App = () => {
    const saludo = "Saludo desde constante. Dentro del componente principal.";

    // Objeto para renderizar las clases de bootstrap
    const clasesColor = {
        primary: 'text-primary',
        success: 'text-success',
        danger: 'text-danger',
    };

    // Simulación de un usuario logeado
    const user = true;

    // Componente login
    const SaludoBienvenida = () => {
        return <h2 className={clasesColor.success}>¡Bienvenido!</h2>;
    }

    // Componente logout
    const SaludoDespedida = () => {
        return <h2 className={clasesColor.danger}>¡Hasta luego!</h2>;
    }

    // Array común y corriente
    const frutas = ['🍏', '🍓', '🍌'];

    // Return del contenido de App
    return (
        <div className="container">
            <h1 className={clasesColor.primary}>{saludo}</h1>

            {(user) ? <SaludoBienvenida /> : <SaludoDespedida />}

            {/* Iterar un array con react, se hace exactamente igual que en blade */}
            <ul>
                {
                    // Se usa map ya que para que se pueda renderizar, es necesario el return, foreach no retorna
                    frutas.map((fruta, index) => {
                        // Para el correcto renderizado de los elementos se debe ligar el elemento con un key único, como su index
                        // En el caso de los arrays, no es recomendable si dicho array no es dinámico, porque los índices cambian
                        return <li key={fruta}>{index + 1} - {fruta}</li>;
                    }) // Como se está operando dentro de las llaves de renderizado, no se finaliza con ';'
                }
            </ul>
        </div>
    );
};

export default App;
