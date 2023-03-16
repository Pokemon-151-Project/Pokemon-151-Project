"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const pokemonMiddleware_1 = require("../../middleware/Pokemon/pokemonMiddleware");
const router = express.Router();
const pokemon_1 = require("../controllers/pokemon");
router.get("/", pokemon_1.getAllPokemon);
router.get("/:dexID", pokemon_1.getPokemonByID);
router.delete("/:dexID", pokemon_1.deleteSinglePokemon);
router.delete("/", pokemon_1.deleteAllPokemon);
router.post("/", pokemonMiddleware_1.validateSinglePokemon, pokemon_1.postNewPokemon);
module.exports = router;
