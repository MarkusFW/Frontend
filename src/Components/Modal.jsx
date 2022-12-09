import "./Modal.css";

function Modal({modalTitle}) {
  
  function onCancel () {
    console.log ("Canceled")
  }
  function onConfirm () {
    console.log ("Confirmed")
  }

  return (
    <div>
      <div className="modal">
        <p className="modal__title">{ modalTitle }</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={ onCancel }>Cancel</button>
          <button className="btn" onClick={ onConfirm }>Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;
