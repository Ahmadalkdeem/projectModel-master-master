import { SoonGameArticle } from "./games.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { comingSoonGamesArr } from "../../api/comingSoonGames";


export interface GameArticles {
    articles: SoonGameArticle[];
}

const initialState: GameArticles = {
    articles: comingSoonGamesArr,
};

/* interface GameArticles {
    loading: boolean,
    error: string,
    articles: [],
}

const initialState: GameArticles = {
    loading: false,
    error: "",
    articles: [],
}; */

export const gameSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        // אילו פעולות אנו רוצים בחנות
        addCard: (state, action: PayloadAction<SoonGameArticle>) => {
            state.articles.push(action.payload);
        }
    },
});
// also exported fetchUsers at the top

//export the reducer
export default gameSlice.reducer

