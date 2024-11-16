import { useContext, useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Cards";
import { currentuserContext } from "../contexts/CurrentUserContext";
import Popup from "./Popup";

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
      <Popup />
    </div>
  );
}
