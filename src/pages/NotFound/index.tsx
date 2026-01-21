import "./not-found.css";
import bytePet from "@assets/byte-cat00.gif";
import iconBack from "@assets/icon-back.svg";
import lit from "../../literals.json";

const NotFound = () => {
  return (
    <div className="notFoundPage">
      <div className="textWrapper">404</div>
      <img src={bytePet} alt="Byte Pet" className="img" />
      <div className="wrapperDesc">
        <div className="wrapperText">
          <p className="subText">{lit.notFoundPage.subText}</p>
          <p className="descText">{lit.notFoundPage.descText}</p>
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
