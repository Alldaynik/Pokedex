import { PokeApiPokemonsController } from "./Controllers/PokeApiPokemonsController.js";
import { SandboxApiPokemonsController } from "./Controllers/SandboxApiPokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";


class App {
  // valuesController = new ValuesController();

pokeApiPokemonsController = new PokeApiPokemonsController()
 sandboxApiPokemonsController = new SandboxApiPokemonsController()

}

window["app"] = new App();
