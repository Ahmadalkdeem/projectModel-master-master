import Swal from 'sweetalert2';
import XboxGameItem from '../games/XboxGameItem';
import { BuiedCard } from '../../features/games/gameXboxSlice';
import { XboxGameArticle } from '../../features/games/games';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Fragment } from 'react';

const XboxGamesPart = (props: XboxGameArticle) => {
    const { articles } = useAppSelector((state) => state.XboxGames);
    const buiedXboxGames = articles.filter((a) => a.isGettingBuied);
    const dispatch = useAppDispatch();
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center">
                {buiedXboxGames.map((a) => (
                    <>
                        <Fragment key={a.id}>
                            <XboxGameItem  {...a} />
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

export default XboxGamesPart