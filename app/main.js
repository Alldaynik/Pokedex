import { PokeApiPokemonsController } from "./Controllers/PokeApiPokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";


class App {
  // valuesController = new ValuesController();

pokeApiPokemonsController = new PokeApiPokemonsController()
}

window["app"] = new App();
