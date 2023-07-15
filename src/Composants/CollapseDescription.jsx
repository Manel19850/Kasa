import React, { useState } from "react";
import "./CollapseDescription.scss";

function Description(props) {
  const [isContentVisible, setContentVisible] = useState(false);

  const showContent = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <div>
      <div className="Ap-deroulante">
        <div className="description-container">
          <div className="description">
            Description
            <span>
              {isContentVisible ? (
                <span><i className="fa-solid fa-chevron-up" onClick={showContent}></i></span>
              ) : (
                <span><i className="fa-solid fa-chevron-down" onClick={showContent}></i></span>
              )}
            </span>
          </div>
          {isContentVisible && (
            <div className="description-content">
              <span>{props.content}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Description;