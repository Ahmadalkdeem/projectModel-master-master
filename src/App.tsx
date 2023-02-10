//import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//import { useAppDispatch } from "./app/hooks";
import TopNav from "./components/top-nav/TopNav";
import About from "./routes/about/About";
import Games from "./routes/games/Games";
// import { fetchGames } from "./features/games/gameSlice";
import Contact from "./routes/contact/Contact";
import BuyingBasket from "./routes/buying-basket/BuyingBasket";
import AllGames from "./components/all-games/AllGames";
import NintendoGames from "./components/nintendo-games/NintendoGames";
import NintendoGamess from "./components/nintendo-games/NintendoGamess";
import XboxGames from "./components/xbox-games/XboxGames";
import XboxGamess from "./components/xbox-games/XboxGamess";
import PS4And5Games from "./components/ps-games/PS4And5Games";
import PS4And5Gamess from "./components/ps-games/PS4And5Gamess";


function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/games" element={<Games />}>
          <Route path="all" element={<AllGames />} />
          <Route path="nintendo" element={<NintendoGames />} />
          <Route path="nintendo/:id" element={<NintendoGamess />} />
          <Route path="xbox" element={<XboxGames />} />
          <Route path="xbox/:id" element={<XboxGamess />} />
          <Route path="ps" element={<PS4And5Games />} />
          <Route path="ps/:id" element={<PS4And5Gamess />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buying-basket" element={<BuyingBasket />} />

      </Routes>

    </>
  );
}

export default App;

