import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import NewGamesReducer from '../features/games/gameSlice'
import NinGamesReducer from '../features/games/gameNintendoSlice'
import XboxGamesReducer from '../features/games/gameXboxSlice'
import PSGamesReducer from '../features/games/gameSonySlice'
import SoonGamesReducer from '../features/games/gameSoonSlice'


export const store = configureStore({
  reducer: {
    NewGames: NewGamesReducer,
    NintendoGames: NinGamesReducer,
    XboxGames: XboxGamesReducer,
    PSGames: PSGamesReducer,
    SoonGames: SoonGamesReducer,
    counter: counterReducer
  },
});

// הגדרת טיפוסים של המצב בחנות
export type RootState = ReturnType<typeof store.getState>;

//של החנות שלנו dispatch  הגדרות טיפוסים של הפונקציה 
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
