import React, { useState } from "react";
import "./CollapseEquipement.scss";

function Equipement(props) {
  const [isContentVisible, setContentVisible] = useState(false);

  const showContent = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <div>
      <div className="Ap-deroulante">
          <div className="equipement">
            Equipement
            <span>
              {isContentVisible ? (
               <span> <i className="fa-solid fa-chevron-up" onClick={showContent}></i></span>
              ) : (
                <span><i className="fa-solid fa-chevron-down" onClick={showContent}></i></span>
              )}
            </span>
          </div>
          {isContentVisible && (
            <div className="equipement-content">
            <span> {props.content} </span>
            </div>
          )}
      </div> 
    </div>
  );
}

export default Equipement;