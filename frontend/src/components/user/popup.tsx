import React, { useState, useEffect } from "react";





interface PopupProps {
  message: string;
}

const Popup: React.FC<PopupProps> = ({ message }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [doNotShowAgain, setDoNotShowAgain] = useState<boolean>(false);

  useEffect(() => {
    const hidePopup = localStorage.getItem("hidePopup");
    if (hidePopup === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    if (doNotShowAgain) {
      localStorage.setItem("hidePopup", "true");
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;
// const popupOverlay = {
//         position:'fixed',
//         top: '0',
//         left: '0',
//         width: '100%',
//         height: '100%',
//         background: 'rgba(0, 0, 0, 0.4)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: '999',
//     };

    

  
  
  
  
  
  
  
  
  


// const popupBox ={
//   background: 'white',
//   padding: '20px',
//   borderRadius: '8px',
//   width: '300px',
//   position: 'relative',
//   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
// }
  

// const popupClose ={ 
//     position: 'absolute',
//   top: '8px',
//   right: '12px',
//   background: 'none',
//   border: 'none',
//   fontSize: '20px',
//   cursor: 'pointer'
// }
 


// const popupCheckbox ={
//     display: 'flex',
//   alignItems: 'center',
//   marginTop: '12px',
//   fontSize: '14px',
// }
  



  return (
    <div className="popup-overlay alert">
      <div className="popup-box alert-horizontal" >
        <button className="popup-close" onClick={handleClose}>
          ×
        </button>
        <p className="popup-message">{message}</p>
        <label className="popup-checkbox">
          <input
            type="checkbox"
            checked={doNotShowAgain}
            onChange={(e) => setDoNotShowAgain(e.target.checked)}
          />
          Don’t show this again
        </label>
      </div>
    </div>
  );
};

export default Popup;
