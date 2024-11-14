import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";


export default function AddPlacePopup({
    isEditProfilePopup,
    handleClosePopups,
    
    onUpdateUser,
    isOpen,
   onAddPlaceSubmit 
}){
   
    const ref=useRef()
      // Después de cargar el usuario actual desde la API
      // sus datos serán usados en componentes gestionados.
    
      function handleSubmit(e) {
        // Evita que el navegador navegue hacia la dirección del formulario
        e.preventDefault();
    
        // Pasa los valores de los componentes gestionados al controlador externo
    onAddPlaceSubmit()    
      }
    
      return(
        <PopupWithForm
        name="avatar"
        title="editar avatar"
        isOpen={isOpen}
        
        handleClose={handleClosePopups}
        handleSubmit={handleSubmit}
      >
        <fieldset className="form__set">
          <input
            type="url"
            className="form__input form__input_avatar"
            name="avatar"
            required
            ref={ref}
          />
        </fieldset>
      </PopupWithForm> 
      )
     }
