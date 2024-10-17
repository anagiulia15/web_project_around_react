import { useEffect,useState } from "react";
import Header from "./header";
import api from "../utils/api";
import Card from "./card";

export default function Main(props) {
  const [userName, setuserName] = useState(false)
  const [userDescription,setuserDescription]=useState(false)
  const [userAvatar,setuserAvatar]=useState(false)
  const [cards,setCards]=useState([])
  useEffect(()=>{
    api
    .getUserinfo()
    .then((user) => {
      setuserName(user.name)
      setuserDescription(user.description)
      setuserAvatar(user.avatar)
    })},[])

    useEffect(()=>{
      api.getCards()
      .then((
        cards
      ) => {
      setCards(cards)
      })
    },[

    ])
  return (
    <div>
      {userName}
      <main className="elements">
        {cards.map((card)=>{
          return <Card card={card}
          setSelectCard={props.setSelectCard}/> 
        })}
      </main>

      <div class="popup" id="popupopenimage">
        <div class="popup__overlay"></div>
        <div class="popup__content">
          <button class="popup__close"></button>
          <div class="popup__body popup__body_transparent">
            <img src="images/element1.jpg" alt="" class="popup__image" />
            <h2 class="popup__subtitle"></h2>
          </div>
        </div>
      </div>

      <div class="popup popup_confirmation">
        <div class="popup__overlay"></div>
        <div class="popup__content">
          <button class="popup__close"></button>
          <div class="popup__body">
            <img src="images/element1.jpg" alt="" class="popup_image" />
            <h2 class="popup__title">¿Estas seguro?</h2>
            <form class="form form_confirmation">
              <fieldset class="form__set">
                <input type="submit" class="form__submit" value="Si, Guardar" />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
