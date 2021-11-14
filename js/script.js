// wrapping pokemonList array in an IIFE 

let pokemonRepository = (function(){

let pokemonList = [
  {
   name: 'Caterpie',
   height: 2,
   type: 'bug' ,
   weight: 3   
  }, 
  
  {
      name: 'Charmeleon',
      height: 1,
      type: 'bug' ,
      weight: 19   
  }, 
  
  {
      name: 'Parasect',
      height: 1,
      type: ['grass', 'bug'] ,
      weight: 3   
  },

  {
      name: 'Sneasel',
      height: 3,
      type: ['dark', 'ice'] ,
      weight: 28   
  }

];
// functions to add item to the pokemonList 
function add(pokemon){
  pokemonList.push(pokemon);

}

// function to return all the items of the pokemonList array

function getAll(){
  return pokemonList;
}
// IIFE returns only an object with the same names for keys as values

return{
  add: add,
  getAll: getAll,
}

})();


  // Use of forEach() Loop to iterate over pokemonList: 

  document.write("</br>")

  function myFunction(pokemon, index)  {
 
    
  if (pokemon.height>2){
    document.write(` <p> ${index+1} :  ${pokemon.name} = Pokemon name </br>`);
    document.write(`<p> ${pokemon.name} (height:${pokemon.height}) - Wow that's big </br>`)
    
  }
else{
  document.write(`<p> ${index+1} :  ${pokemon.name} = Pokemon name </br>` );
  document.write(` <p> ${pokemon.name} (height:${pokemon.height})</br> `)
  }
 }
    
 pokemonRepository.getAll().forEach(myFunction);