// wrapping your pokemonList array in an IIFE 

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
    
 pokemonList.forEach(myFunction);