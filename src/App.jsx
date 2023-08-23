// Usando la extensión es7 react/redux/graphQL/react-native snnipets, se puede usar el atajo rafc para crear la estructura básica
// Los componentes react tienen extensión .jsx en una app react pueden coexistir componentes .js y .jsx

// import React from 'react' // El comando rafc trae el import react, en versiones anteriores era necesario para los componentes

const App = () => {
    const saludo = "Saludo desde constante. Dentro del componente principal.";

    // Se puede crear un objeto con las clases a utilizar y llamarlo con las llaves igual que una variable
    const clasesColor = {
        primary: 'text-primary',
        danger: 'text-danger',
        info: 'text-info',
    };

  return (
    // El className sirve para agregar clases los elementos HTML
    <div className="container">
        {/* El uso de variables dentro del componente es igual que en laravel blade, pero con solo un par de llaves sin comillas */}
        <p className={clasesColor.primary}>{saludo}</p>
    </div>
  );
};

export default App;
