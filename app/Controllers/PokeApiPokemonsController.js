import { ProxyState } from "../AppState.js";
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js";
import { pokeApiPokemonsService } from "../Services/PokeApiPokemonsService.js";
import { Pop } from "../Utils/Pop.js";

function _draw(){
  let pokemons = ProxyState.pokeApiPokemons
  let template = ``
  pokemons.forEach(p => template += PokeApiPokemon.ListTemplate(p))
  document.getElementById('Pokemon-name').innerHTML = template
}

function _drawPokemonDetails(){

  let pokemon = ProxyState.activePokemon
  document.getElementById('pokemon-details').innerHTML = pokemon.DetailsTemplate

}



export class PokeApiPokemonsController{
  constructor(){
    console.log('loading Pokedex', ProxyState.pokeApiPokemons)
    ProxyState.on('pokeApiPokemons', _draw)
    ProxyState.on('activePokemon',_drawPokemonDetails)
    _draw()
    this.getPokeApiPokemons()
  }
  async getPokeApiPokemons(){
    try {
      await pokeApiPokemonsService.getPokeApiPokemons()
    } catch (error) {
      console.log(error)
      Pop.toast(error.message,'error')
    }
  }
  async getPokeApiPokemonDetails(name){
    try {
      await pokeApiPokemonsService.getPokeApiPokemonDetails(name)
    } catch (error) {
      console.log(error)
      Pop.toast(error.message,'error')
      
    }
  }
}