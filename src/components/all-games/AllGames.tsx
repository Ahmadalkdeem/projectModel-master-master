import { useAppSelector } from '../../app/hooks'
import NintendoGameItem from '../../routes/games/NintendoGameItem'
function AllGames() {
    const psGames = useAppSelector((s) => s.PSGames.articles);
    const xboxGames = useAppSelector((s) => s.XboxGames.articles);
    const xboxGames2 = useAppSelector((s) => s.NintendoGames.articles);
    let x = [...psGames, ...xboxGames, ...xboxGames2]
    return (
        <div className="d-flex justify-content-center flex-wrap p-1">
            {x.map((g) => (
                <NintendoGameItem {...g} key={g.id} />
            ))}
        </div>
    )
}

export default AllGames