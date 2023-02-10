import Swal from 'sweetalert2';
import NintendoGameItem from '../games/NintendoGameItem';
import { BuiedCard } from '../../features/games/gameNintendoSlice';
import { NintendoGameArticle } from '../../features/games/games';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Fragment } from 'react';

const NintendoGamesPart = (props: NintendoGameArticle) => {
    const { articles } = useAppSelector((state) => state.NintendoGames);
    const buiedNintendoGames = articles.filter((a) => a.isGettingBuied);
    const dispatch = useAppDispatch();
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center">
                {buiedNintendoGames.map((a) => (
                    <>
                        <Fragment key={a.id}>
                            <NintendoGameItem  {...a} />
                        </Fragment>
                    </>
                ))}
            </div>
            <button
                onClick={() => {
                    //dispatch addCard(card)
                    Swal.fire({
                        title: "Are you sure you want to those the games?",
                        showDenyButton: true,
                        confirmButtonText: "Yes",
                        denyButtonText: `No`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            dispatch(BuiedCard(props.id));
                            Swal.fire("Deleted!", "", "success");
                        } else if (result.isDenied) {
                            Swal.fire("Keeping the card", "", "info");
                        }
                    });
                }}
            >
                Add Card:
            </button>
        </>
    )
}

export default NintendoGamesPart