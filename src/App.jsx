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

    // Manejo de eventos - función oyente 
    const manejoClick = (e) => {
        console.log('Diste click en el botón: ' + e.target.textContent);
    };

    // Manejo de eventos - componente - objeto fuente (siempre usar PascalCase)
    const BotonClick = () => {
        return (
            <button
                // Se puede usar todo tipo de lógica dentro de las llaves de renderizado, en este caso template strings
                className={`btn ${clasesBoton.primary}`}

                // A la escucha del click
                onClick={(e) => manejoClick(e)}
            >
                Hacer click
            </button>
        );
    };

    // Return del contenido de App
    return (
        <div className="container">
            {/* Atributos de clase y renderizado de variables */}
            <h1 className={clasesColor.primary}>{saludo}</h1>

            {/* Lógica condicional con el operador ternario */}
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

            {/* Llamar a un componente que está a la escucha de un evento */}
            <BotonClick />
        </div>
    );
};

export default App;
