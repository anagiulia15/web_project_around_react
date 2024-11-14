import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";
import { useState, useEffect } from "react";
import { currentuserContext } from "./components/CurrentUserContext";
import api from "./utils/api";
import EditProfilePopup from "./components/EditProfilePopup";
import EditAvatarPoupup from "./components/EditAvatarPopup";
import AddPlacePopup from "./components/AddplacePopup";
import PopupDelete from "./components/PopupDelete"

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [isImageOpen, setImageOpen] = useState(false);
  const [selectedCard, setselectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  function handleAddPlaceSubmit() {
    api.storeCard().then(() => {});
  }
  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function handleClosePopups() {
    setisEditAvatarPopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisEditProfilePopupOpen(false);
    setImageOpen(false);
  }
  useEffect(() => {
    api.getUserinfo().then((user) => {
      setCurrentUser(user);
    });
  }, []);

  function onUpdateUser({ name, about }) {
    api.updateUser(name, about).then((user) => {
      setCurrentUser(user);
      handleClosePopups();
    });
  }

  return (
    <currentuserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          handleEditAvatarClick={handleEditAvatarClick}
          handleEditProfileClick={handleEditProfileClick}
          handleAddPlaceClick={handleAddPlaceClick}
        />
        <Main
          setSelectCard={(element) => {
            setselectedCard(element);
            setImageOpen(true);
          }}
        />
        <Footer />
        <ImagePopup
          selectedCard={selectedCard}
          open={isImageOpen}
          handleClosePopups={handleClosePopups}
        />

        <EditProfilePopup
          isEditProfilePopupOpen={isEditProfilePopupOpen}
          onUpdateUser={onUpdateUser}
          handleClosePopups={handleClosePopups}
        />
        <EditAvatarPoupup
          isEditProfilePopupOpen={isEditAvatarPopupOpen}
          onUpdateUser={onUpdateUser}
          handleClosePopups={handleClosePopups}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          handleClosePopups={handleClosePopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        {/*
       <PopupDelete
       handleSubmit={handleSubmit}
      isOpen={}
      handleClose={handleClosePopups}/>

     <handleSubmit/>
    */}
       
       
      </div>
    </currentuserContext.Provider>
  );
}
export default App;
