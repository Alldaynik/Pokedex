




export class PokeApiPokemon{
  constructor(data){
    this.id = data.index || data.id,
    this.name = data.name,
    this.level = data.level,
    this.ability = data.ability,
    this.height = data.height,
    this.move = data.move,
    this.types = data.type,
    this.stats = data.stats,
    this.sprits = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${this.id}.png`
    this.version = data.version
    this.weight = data.weight


  }
  static ListTemplate(PokeApiPokemon){
    return`
             <div class="col-12 bg-light">
              <p class="selectable p-3 fw-bold" onclick="app.pokeApiPokemonsController.getPokeApiPokemonDetails('${PokeApiPokemon.name}')">${PokeApiPokemon.name}</p> 
            </div>
           
            
            `
              
  }

  get DetailsTemplate(){
    return `
    
    <div class="col-12 p-3">
    <h2>${this.name}</h2>
  </div>
  <div class="col-12">
    <img src="${this.sprits}" alt="">
  </div>
  <div class="col-12">
    <p>weight: ${this.weight}</p>
    <p>height: ${this.height}</p>
    <button class="btn btn-outline-danger">CATCH</button>
  </div>
    
    `
  }


}