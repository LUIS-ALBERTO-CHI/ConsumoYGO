import React, { Component } from 'react';
import axios from 'axios';
import '../assets/css/CardInfo.css';

class CardInfo extends Component {
state = {
cardInfo: []
}

componentDidMount() {
axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?id=6983839')
.then(response => {
this.setState({ cardInfo: response.data.data });
})
.catch(error => {
console.log(error);
});
}

render() {
return (
<div className='Container-1'>

    {this.state.cardInfo.map(card => {
    return (
    <div key={card.id}>
        <div class="Fondo">
            <div class="cont-1">
                <img className='imagen' src={card.card_images[0].image_url} alt={card.name} />
                <div class="cont-2">
                    <div class="nombre">{card.name}</div>
                    <div class="cuadros-cont">
                        <div class="colum-1">
                            <div class="tipo">
                                <p className='tp'>Tipo: {card.type}</p>
                            </div>
                            <div class="atributo">
                                <p className='at'>Atributo: {card.attribute}</p>
                            </div>
                            <div class="meca">
                                <p className='mc'>Mecanografía: Sierpe</p>
                            </div>
                        </div>
                        <div class="colum-2">
                            <div class="nivel">
                                <p className='lv'>Nivel: {card.level}</p>
                            </div>
                            <div class="ataque">
                                <p className='atq'>ATQ: {card.atk}</p>
                            </div>
                            <div class="def">
                                <p className='deff'>DEF: {card.def}</p>
                            </div>
                        </div>
                        <div class="colum-3">
                            <div class="arq">
                                <p className='rq'>Arquetipo: N/A{card.archetype} </p>
                            </div>
                            <div class="tipCuad">
                                <p className='tp'>Tipo de cuadro: {card.frameType}</p>
                            </div>
                            <div class="race">
                                <p className='rc'>Raza: {card.race}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="precios">
                <div class="pr">
                    <p className='cm'>Market price: ${card.card_prices[0].cardmarket_price}</p>
                    <br />
                    <p>tcgplayer price: ${card.card_prices[0].tcgplayer_price}</p>
                    <br />
                    <p>Ebay price: ${card.card_prices[0].ebay_price}</p>
                    <br />
                    <p>Amazon price: ${card.card_prices[0].amazon_price}</p>
                </div>
                <div class="juego">
                    <p class="cartas">
                    <h2>Descripción</h2>
                    <br />
                    {card.desc}
                    <br />
                    <br />
                    <h2>Juego de Cartas</h2>
                    <br />
                    <p className='cm'>{card.card_sets[0].set_name}, {card.card_sets[0].set_rarity}
                        ${card.card_sets[0].set_price}</p>
                    <br />
                    <p className='cm'>{card.card_sets[1].set_name}, {card.card_sets[1].set_rarity}
                        ${card.card_sets[1].set_price}</p>
                    <br />
                    <p className='cm'>{card.card_sets[2].set_name}, {card.card_sets[2].set_rarity}
                        ${card.card_sets[2].set_price}</p>
                    <br />
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
    })}
</div>
);
}
}

export default CardInfo;
