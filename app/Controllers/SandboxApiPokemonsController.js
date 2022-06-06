import { ProxyState } from "../AppState.js"
import { sandboxApiPokemonsService } from "../Services/SandboxApiPokemonsService.js"
import { Pop } from "../Utils/Pop.js"



function _drawMyPokemon(){
  let pokemon = ProxyState.sandboxPokemons
  let template = ''
  pokemon.forEach(p =>{
  template += p.SandboxTemplate
  })
  document.getElementById('my-pokemon').innerHTML = template
}




export class SandboxApiPokemonsController{
  constructor(){
    console.log('loading my pokemon')
    ProxyState.on('sandboxPokemons', _drawMyPokemon)
    this.getSandboxPokemon()
    _drawMyPokemon()
  }
  async getSandboxPokemon(){
    try {
      await sandboxApiPokemonsService.getSandboxPokemon()
    } catch (error) {
      console.log(error)
      Pop.toast(error.message,'error')
      
    }
  }
  async catchPokemon(){
    try {
     
      console.log('saving')
      await sandboxApiPokemonsService.catchPokemon()
    } catch (error) {
      console.log(error)
      Pop.toast(error.message,'error')
      
    }
  }
}