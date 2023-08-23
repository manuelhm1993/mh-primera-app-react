import { useState } from "react"; // useState es un hook que pertenece a react que permite controlar los cambios de un objeto

const Contador = () => {
    // Para poder indicarle a react que renderice el resultado del incremento, se usa el hook useState
    // Uso de destructory, se le pasa el valor por default a useState y se extrae el contador y el modificador
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        // Modificar el contador a través del modificador para que react sepa que debe renderizar al cambiar
        setContador(contador + 1);
    };

    return (
        <>
            {/* Para indicarle a react que debe renderizar esta sección cuando contador aumente, se usan state y hooks */}
            <h1>Contador: {contador}</h1>

            <button
                className="btn btn-primary mb-3"
                onClick={incrementar}
            >
                Incrementar
            </button>
        </>
    );
};

export default Contador;
