import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado, loading } = useClima();
  const { name, main } = resultado;
  const kelvin = 273.15;
  return (
    <div className="contenedor">
      {!loading ? (
        <>
          <h2>El Clima de {name} es: </h2>
          <p>
            Temperatura Actual: {parseInt(main.temp - kelvin)}{" "}
            <span>&#x2103;</span>
          </p>
          <p>
            Temperatura Minima: {parseInt(main.temp_min - kelvin)}{" "}
            <span>&#x2103;</span>
          </p>
          <p>
            Temperatura Maxima: {parseInt(main.temp_max - kelvin)}{" "}
            <span>&#x2103;</span>
          </p>
        </>
      ) : (
        <p>Cargando....</p>
      )}
    </div>
  );
};

export default Resultado;
