export default function Card({card,setSelectCard}) {
  function handleClick() {
    setSelectCard(card)
  }
    return(<div class="element">
        <button class="element__trash"></button>
        <img src={card.link} alt="" class="element__image" onClick={handleClick} /> 
        <div class="element__footer">
          <p class="element__name">{card.name}</p>
          <button class="element__heart"></button>
          <p class="element__counter"></p>
        </div>
      </div>)
}
