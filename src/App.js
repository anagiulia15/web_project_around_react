import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";
import PopupImage from "./components/PopupImage";
import { useState } from "react";

function App() {
  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
   setisAddPlacePopupOpen(true)
  }
  function handleCardClick(card) {
    setselectedCard(card)
   }
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen,setisAddPlacePopupOpen]=useState(false)
  const [isEditAvatarPopupOpen,setisEditAvatarPopupOpen]=useState(false)
  const [selectedCard,setselectedCard]=useState(null)
  function handleClosePopups() {
    setisEditAvatarPopupOpen(false)
    setisAddPlacePopupOpen(false)
    setisEditProfilePopupOpen(false)
    setselectedCard(null)
  }

  return (
    <div className="page">
      <Header
        handleEditAvatarClick={handleEditAvatarClick}
        handleEditProfileClick={handleEditProfileClick}
        handleAddPlaceClick={handleAddPlaceClick}
      />
      <Main setSelectCard={setselectedCard} />
      <Footer />
      <PopupImage selectedCard={selectedCard} handleClosePopups={handleClosePopups}/>
      <PopupWithForm name="profile" title="editar perfil" isOpen={isEditProfilePopupOpen} handleClose={handleClosePopups}>
        <fieldset className="form__set">
          <input
            type="text"
            class="form__input form__input_name"
            name="name"
            minlength="2"
            maxlength="40"
            placeholder="Nombre"
            required
          />
          <span className="form__error form__error_name"></span>
          <input
            type="text"
            className="form__input form__input_about"
            name="about"
            minlength="2"
            maxlength="200"
            placeholder="Acerca de mi"
            required
          />
          <span className="form__error form__error_about"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name="card" title="nuevo lugar" isOpen={isAddPlacePopupOpen} handleClose={handleClosePopups} >
        <fieldset class="form__set">
          <input
            type="text"
            class="form__input form__input_name"
            name="name"
            placeholder="Título"
            required
            minlength="2"
            maxlength="30"
          />
          <span class="form__error form__error_name"></span>
          <input
            type="url"
            required
            class="form__input form__input_link"
            name="link"
            placeholder="Enlace de la imagen"
          />
          <span class="form__error form__error_link"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name="avatar" title="editar avatar" isOpen={isEditAvatarPopupOpen} handleClose={handleClosePopups}>
        <fieldset class="form__set">
          <input
            type="url"
            class="form__input form__input_avatar"
            name="avatar"
            required
          />
        </fieldset>
      </PopupWithForm>
    </div>
  );
}
export default App;
