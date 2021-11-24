// wrapping pokemonList array in an IIFE 

let pokemonRepository = (function(){

let pokemonList = [];
    
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

  // functions to add item to the pokemonList 
  // function will check of the datatype of the element inserted is object or not
  
  function add(pokemon){
    if(pokemon.hasOwnProperty('name') && pokemon.hasOwnProperty('detailsUrl'))
        pokemonList.push(pokemon);
     
  }
  
  // function to return all the items of the pokemonList array
  
  function getAll(){
    return pokemonList;
  }
  

  // function to add list item and button to hold pokemon object and add styling 
  
  function addListItem(pokemon) {
    
    let myVar = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    listItem.appendChild(button);
     button.classList.add("my_class");
     myVar.appendChild(listItem);
    button.addEventListener('click', function(event){
      showDetails(pokemon);
     })  
  }

  // fucntion to load data from external source.
  
  function loadList(){
    
    return fetch(apiUrl).then(function (response){
      return response.json();
    }).then(function(json){
      json.results.forEach(function(item){
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon)
        console.log(pokemon);
      });
    }).catch(function (e) {
    console.log(e)  
    })
  }
 
  

  // IIFE returns only an object with the same names for keys as values
  
  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    
  }
  
  })();
  
  
  // Use of add function to add item in the pokemonList
  
  // pokemonRepository.add({name: "Pidgeot", height: 4, type:"Bird", weight:87, imgFile:"./img/Pidgeot.png" });
  
  // console.log(pokemonRepository.getAll());
  
     // Foreach function to fetch and display each Pokemon object in list and button element

    pokemonRepository.loadList().then(function() {

        pokemonRepository.getAll().forEach(function(pokemon)
        {
        pokemonRepository.addListItem(pokemon);
        });
          });
    
