import { useAppSelector } from '../../app/hooks';
import XboxGameItem from '../../routes/games/XboxGameItem';

const XboxGames = () => {
    const xboxGames = useAppSelector((s) => s.XboxGames.articles);
    return (
        <div className="d-flex justify-content-center flex-wrap">
            {xboxGames.map((g) => (
                <XboxGameItem {...g} key={g.id} />
            ))}
        </div>
    )
}

export default XboxGames