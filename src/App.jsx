// Usando la extensión es7 react/redux/graphQL/react-native snnipets, se puede usar el atajo rafc para crear la estructura básica
// Los componentes react tienen extensión .jsx en una app react pueden coexistir componentes .js y .jsx

// import React from 'react' // El comando rafc trae el import react, en versiones anteriores era necesario para los componentes

const App = () => {
    const saludo = "Saludo desde constante. Dentro del componente principal.";

    // Se puede crear un objeto con las clases a utilizar y llamarlo con las llaves igual que una variable
    const clasesColor = {
        primary: 'text-primary',
        success: 'text-success',
        danger: 'text-danger',
    };

    // Simulación de un usuario logeado
    const user = true;

    // Componente login (se pueden crear componentes anidados)
    const SaludoBienvenida = () => {
        // El return es importante, ya que si no retorna el contenido, no se renderiza
        return <h2 className={clasesColor.success}>¡Bienvenido!</h2>;
    }

    // Componente logout (se pueden crear componentes anidados)
    const SaludoDespedida = () => {
        // El return es importante, ya que si no retorna el contenido, no se renderiza
        return <h2 className={clasesColor.danger}>¡Hasta luego!</h2>;
    }

    return (
        // El className sirve para agregar clases los elementos XML todo el componente debe ir dentro de un div padre como en livewire
        <div className="container">
            {/* El uso de variables dentro del componente es igual que en laravel blade, pero con solo un par de llaves sin comillas */}
            <h1 className={clasesColor.primary}>{saludo}</h1>

            {/* Dependiendo de la condición de login se muestra un contenido u otro. Todo debe ir dentro de llaves {} y div */}
            {(user) ? <SaludoBienvenida /> : <SaludoDespedida />}
        </div>
    );
};

export default App;
