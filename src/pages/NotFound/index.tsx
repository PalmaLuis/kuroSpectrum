import "./not-found.css";
// import bytePet from "@assets/byte-cat.gif";
import bytePet from "@assets/cat.png";
import iconBack from "@assets/icon-back.svg";

const NotFound = () => {
  return (
    <div className="notFoundPage">
      <div className="textWrapper">404</div>
      <img src={bytePet} alt="Byte Pet" className="img" />
      <div className="wrapperDesc">
        <div className="wrapperText">
          <p className="subText">Opps, creo que nos perdimos.</p>
          <p className="descText">Regresemos a un lugar familiar</p>
        </div>
        <button className="buttonDefault">
          <img src={iconBack} alt="Back Icon" />
          Regresar a casa
        </button>
      </div>
    </div>
  );
};

export default NotFound;
