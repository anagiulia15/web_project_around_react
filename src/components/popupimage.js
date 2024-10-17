export default function PopupwithImage({ selectedCard }) {
  return (
    <div class={"popup " + (selectedCard ? "popup_show" : "")} id="popupopenimage">
      <div class="popup__overlay"></div>
      <div class="popup__content">
        <button class="popup__close"></button>
        <div class="popup__body popup__body_transparent">
          <img src={selectedCard?.link} alt={selectedCard?.name} class="popup__image" />
          <h2 class="popup__subtitle">{selectedCard?.name}</h2>
        </div>
      </div>
    </div>)
}