import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import { PokemonType } from "../types/PokemonType";

interface IProps {
  fetchPokemonDetail: (id: number) => Promise<PokemonType>;
}

export default function PokemonDetail({ fetchPokemonDetail }: IProps) {
  const params = useParams();
  const [error, setError] = useState("");
  const [pokemon, setPokemon] = useState<PokemonType>({
    id: 0,
    image: "",
    name: "",
    type: "",
  });

  useEffect(() => {
    (async () => {
      setError("");

      if (!params.id || params.id === "0") {
        setError("id no valido!");
        return;
      }

      const data = await fetchPokemonDetail(parseInt(params.id));

      setPokemon(data);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image} alt={pokemon.name} />
        <strong>{pokemon.type}</strong>
      </div>
      <Link to="/dashboard">Volver</Link>
      {error && <strong>{error}</strong>}
    </div>
  );
}