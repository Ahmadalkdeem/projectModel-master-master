import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import css from './GameDetails.module.scss';

const SoonGameDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const article = useAppSelector((state) =>
        state.SoonGames.articles.find((a) => a.id === id)
    );

    if (!article) {
        //user messed with the url: send him/her back to news
        return <Navigate to="/games" />;
    }

    const { nameOfGame, description, image } = article;
    //if we got thus far: article is not undefined
    return (
        <div className="w-75 mx-auto d-flex flex-column justify-content-center align-items-center">
            <h3>{nameOfGame}</h3>

            <img
                className="w-50 shadow-lg p-3 bg-white rounded"
                src={image}
                alt={nameOfGame}
            />
            <p className={css.p}>{description}</p>
            <button
                className="btn btn-primary w-50"
                onClick={() => {
                    navigate(-1);
                }}
            >
                Back
            </button>
        </div>
    );
}

export default SoonGameDetails