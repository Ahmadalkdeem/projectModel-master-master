import { NewGameArticle, NintendoGameArticle, XboxGameArticle, SonyGameArticle, SoonGameArticle } from './../features/games/games.d';

export type NewGamesItemProps = {} & NewGameArticle;
export type SoonGamesItemProps = {} & SoonGameArticle;
export type NintendoGamesItemProps = {} & NintendoGameArticle;
export type XboxGamesItemProps = {} & XboxGameArticle;
export type SonyGamesItemProps = {} & SonyGameArticle;

export type IsActiveProps = {
    isActive: boolean
}
