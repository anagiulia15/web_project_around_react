import PopupWithForm from "./PopupWithForm";

export default function PopupDelete(){
    return(
        <PopupWithForm
        name="profile"
        title="borrar tarjeta"
        handleSubmit={handleSubmit}
        isOpen={isEditProfilePopupOpen}
        handleClose={handleClosePopups} >
            
        </PopupWithForm>
)}



