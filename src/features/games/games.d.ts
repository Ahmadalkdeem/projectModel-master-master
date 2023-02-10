export type NewGameArticle = {
    id: string;
    nameOfGame: string;
    description: string;
    company: string;
    image?: string;
    price?: number;
    isGettingBuied?: boolean;
}
export type XboxGameArticle = {
    id: string;
    idX?: string;
    nameOfGame: string;
    description: string;
    company: string;
    image?: string;
    price?: number;
    isGettingBuied?: boolean;
}
export type NintendoGameArticle = {
    id: string;
    idN?: string;
    nameOfGame: string;
    description: string;
    company: string;
    image?: string;
    price?: number;
    isGettingBuied?: boolean;
}
export type SonyGameArticle = {
    id: string;
    idS?: string;
    nameOfGame: string;
    description: string;
    company: string;
    image?: string;
    price?: number;
    isGettingBuied?: boolean;
}
export type SoonGameArticle = {
    id: string;
    nameOfGame: string;
    description: string;
    company: string;
    image?: string;
    comingSoon?: string;
}