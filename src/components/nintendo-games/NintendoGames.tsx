//import { Grid } from 'react-loader-spinner';
import { useAppSelector } from '../../app/hooks';
import NintendoGameItem from '../../routes/games/NintendoGameItem';
import { useParams } from 'react-router-dom';

const NintendoGames = () => {
    let { id } = useParams();
    console.log(id)
    const nintendoGames = useAppSelector((s) => s.NintendoGames.articles);
    return (
        <div className="d-flex justify-content-center flex-wrap p-1">
            {nintendoGames.map((g) => (
                <NintendoGameItem {...g} key={g.id} />
            ))}
        </div>
    )
}

export default NintendoGames



{/* <div className="d-flex">
            {nintendoGames.map((g) => (
                <Grid Grid container spacing={1}>
                    <Grid container item spacing={3}>
                        <NintendoGameItem {...g} key={g.id} />
                    </Grid>
                    <Grid container item spacing={3}>
                        <NintendoGameItem {...g} key={g.id} />
                    </Grid>
                    <Grid container item spacing={3}>
                        <NintendoGameItem {...g} key={g.id} />
                    </Grid>
                </Grid>
            ))}
        </div> */}