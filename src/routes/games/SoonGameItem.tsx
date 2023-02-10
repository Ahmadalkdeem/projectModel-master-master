import { Link } from "react-router-dom";
import { SoonGamesItemProps } from "../../@types/types";
import css from './GameItem.module.scss'

const GameItem = ({ nameOfGame, image, id, comingSoon }: SoonGamesItemProps) => {
    return (
        <div className={css.deckOfCards} >
            <div className={css.listCards}>
                <div className="w-100 shadow-lg border-light border-5 rounded p-2 d-flex flex-column align-items-center">
                    <img className="w-50 shadow-lg bg-white rounded card p-2" src={image} alt="Card cap" />
                    <h5 className="game-name">{nameOfGame}</h5>
                    <p className="game-price">{comingSoon}</p>
                    <Link className={css.link} to={`/games/${id}`}>
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GameItem