const App = () => {
    const saludo = "Saludo desde constante. Dentro del componente principal.";

    // Objetos para renderizar las clases de bootstrap
    const clasesColor = {
        primary: 'text-primary',
        success: 'text-success',
        danger: 'text-danger',
    };

    const clasesBoton = {
        primary: 'btn-primary',
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
    const frutas = ['🍏', '🍓', '🍌', '🍒'];

    // Manejo de eventos
    const BotonClick = () => {
        return (
            <button
                className={'btn ' + clasesBoton.primary}
            >
                Hacer click
            </button>
        );
    };

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
                        // Cada li se debe identificar con un key único
                        return <li key={fruta}>{index + 1} - {fruta}</li>;
                    }) 
                }
            </ul>

            <BotonClick />
        </div>
    );
};

export default App;
