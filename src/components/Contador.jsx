const Contador = () => {
    let contador = 0;

    const incrementar = () => {
        contador++;

        // El contador incrementa, pero no se renderiza si no hay algo que se lo indique a react
        console.log(contador);
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
