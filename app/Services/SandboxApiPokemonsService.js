import { ProxyState } from "../AppState.js"
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js"



const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/nik/pokemon',
  timeout: 12000
})


class SandboxApiPokemonsService{
async getSandboxPokemon(){
  const res = await sandboxApi.get()
  console.log('getSandboxPokemon', res.data)
  ProxyState.sandboxPokemons = res.data.map(p => new PokeApiPokemon(p))
}
async catchPokemon(){
  let pokemon = ProxyState.activePokemon
  const res = await sandboxApi.post(' ', pokemon)
  console.log('catchPokemon', res.data)
  ProxyState.sandboxPokemons = [...ProxyState.sandboxPokemons, new PokeApiPokemon(res.data)]
}
}

export const sandboxApiPokemonsService = new SandboxApiPokemonsService()