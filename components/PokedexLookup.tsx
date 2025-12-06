import React, { useEffect, useState } from "react";
import { supabaseCompany } from "../lib/c-supabaseClient";

export default function PokedexLookup({ name }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (!name) return;
    supabaseCompany
      .from("pokemon")
      .select("*")
      .ilike("name", `%${name}%`)
      .then(({ data }) => {
        setPokemon(data?.[0] || null);
      });
  }, [name]);

  if (!name) return <div>Type a Pokémon name</div>;
  if (!pokemon) return <div>No results</div>;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>{pokemon.description}</p>
    </div>
  );
}
