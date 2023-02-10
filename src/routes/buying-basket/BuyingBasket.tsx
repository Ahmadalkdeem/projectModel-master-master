import NintendoGamesPart from "../buying-part/NintendoGamesPart"
import SonyGamesPart from "../buying-part/SonyGamesPart"
import XboxGamesPart from "../buying-part/XboxGamesPart"

/* const arr = [];
const productsArr = localStorage.setItem('products', arr);
JSON.stringify { } -> ""
JSON.parse -> {} */
const BuyingBasket = () => {
    return (
        <div>
            <h2 className="text-center">Buying Basket: </h2>

            <>
                <SonyGamesPart id={""} nameOfGame={""} description={""} company={""} />
                <NintendoGamesPart id={""} nameOfGame={""} description={""} company={""} />
                <XboxGamesPart id={""} nameOfGame={""} description={""} company={""} />
            </>

        </div>
    )
}

export default BuyingBasket