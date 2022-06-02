import { ProxyState } from "../AppState.js"
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js"


const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 5000
})






class PokeApiPokemonsService{
  async getPokeApiPokemons(){
    const res = await pokeApi.get('?limit=100000&offset=0')
    console.log('getPokeApiPokemon',res.data)
    ProxyState.pokeApiPokemons = res.data.results.map(p => p)
  }
  async getPokeApiPokemonDetails(name){
    const res = await pokeApi.get(name)
    console.log('getPokeApiPokemonDetails', res.data)
    ProxyState.activePokemon = new PokeApiPokemon(res.data)
  }
}
export const pokeApiPokemonsService = new PokeApiPokemonsService()