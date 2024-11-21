import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import SignUp from "./SignUp";
import { fetchPokemonList , fetchPokemonDetail } from "./services/PokemonService";
import PokemonDetail from "./PokemonDetail";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={<Dashboard fetchPokemonList={fetchPokemonList} />}
      />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/pokemon-detail/:id"
        element={<PokemonDetail fetchPokemonDetail={fetchPokemonDetail} />}
      />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
}