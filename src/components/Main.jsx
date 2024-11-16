import { useContext, useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Cards";
import { currentuserContext } from "./CurrentUserContext";

export default function Main(props) {
  const currentUser = useContext(currentuserContext);

  return (
    <div>
      <main className="elements">
        {props.cards.map((card) => {
          return (
            <Card
              card={card}
              onDelete={props.handleDelete}
              onLike={props.handleLike}
              key={card._id}
              setSelectCard={props.setSelectCard}
            />
          );
        })}
      </main>

      <div className="popup" id="popupopenimage">
        <div className="popup__overlay"></div>
        <div className="popup__content">
          <button className="popup__close"></button>
          <div className="popup__body popup__body_transparent">
            <img src="images/element1.jpg" alt="" className="popup__image" />
            <h2 className="popup__subtitle"></h2>
          </div>
        </div>
      </div>

      <div className="popup popup_confirmation">
        <div className="popup__overlay"></div>
        <div className="popup__content">
          <button className="popup__close"></button>
          <div className="popup__body">
            <img src="images/element1.jpg" alt="" className="popup_image" />
            <h2 className="popup__title">¿Estas seguro?</h2>
            <form className="form form_confirmation">
              <fieldset className="form__set">
                <input
                  type="submit"
                  className="form__submit"
                  value="Si, Guardar"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
