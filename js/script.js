// wrapping pokemonList array in an IIFE 

let pokemonRepository = (function(){

  const pokemonList = [];
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=75'
  

  // functions to add item to the pokemonList and  will check the datatype of the element inserted has required property
  
  function add(pokemon){
    if(pokemon.hasOwnProperty('name') && pokemon.hasOwnProperty('detailsUrl'))
        pokemonList.push(pokemon);
       }
  
  // function to return all the items of the pokemonList array
  
  function getAll(){
    return pokemonList;
  }
  //function to change background color
  function changeBackground(color) {
    document.body.style.background = color;
  } 
  // function to add list item and button to hold pokemon object and add styling 
  
  function addListItem(pokemon) {
    let item = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    listItem.appendChild(button);
    button.classList.add("my_class");
    item.appendChild(listItem);
    button.addEventListener('click', function(event){
    showDetails(pokemon);
    
     })  
  }
// function to add Loading message while page has not loaded 

  function showLoadingMessage() {
    window.scrollTo(0, 0)
    window.onload = function(){ document.getElementById("loading").style.display = "none" }
  }
  // function to remove  Loading message while page has been loaded 
  function hideLoadingMessage(){
    window.onload = function(){ document.getElementById("loading").style.display = "block" }
  }

  // function to load data from external source.
  
  function loadList(){
    showLoadingMessage();
    return fetch(apiUrl).then(function (response){
      
      return response.json();
    }).then(function(json){
      hideLoadingMessage()
      json.results.forEach(function(item){
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon)
        console.log(pokemon);
      });
    }).catch(function (e) {
      hideLoadingMessage();
    console.log(e)  
    })
  }
 
  // function to fetch parameter details of the Pokemon from the external source

  function loadDetails(pokemon) {
    showLoadingMessage();
    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      hideLoadingMessage();
      // Now we add the details to the item
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;})
      .catch(function (e) {
        console.error(e);
    })
  }
  // function to display pokemon object on the console.

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      showModal(pokemon)
    });
  }

  // Function to display modal when Pokemon button on the document is clicked 
  function showModal(pokemon){
    
    let modalContainer = document.querySelector('#modal-container');
    let modal = document.createElement('div');
    modalContainer.innerHTML = ''
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement('p');
    contentElement.innerText = `Height of "${pokemon.name}" is: ${pokemon.height}`;

    let imgElement = document.createElement('img');
    imgElement.src = pokemon.imageUrl;
    let imgText = document.createElement('p')
    imgText.innerText = `Image of "${pokemon.name}" is:`
    let nameElement = document.createElement('p')
    
    // array to store pokemon type
    let messages = [];

    // looping though each each type of the pokemon and adding types in message array and finaly printing on Modal Container
    pokemon.types.forEach(item => {
            
      messages.push(item.type.name)
        
    });
    nameElement.innerText = `Type of  "${pokemon.name}" is: ${messages.join(' , ')}`

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(nameElement);
    modal.appendChild(imgText);

    modal.appendChild(imgElement);

    modalContainer.appendChild(modal);
    modalContainer.classList.add('is-visible');
//Function to Hide Modal container
    function hideModal() {
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.classList.remove('is-visible');
      }
//Escape key Event Listner
    window.addEventListener('keydown', (e) => {
      
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });
// Click outside Modal container Event Listner 
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
    }
    });
}
  // IIFE returns only an object with the same names for keys as values
  
  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    
    
  }
  
  })();
  
        pokemonRepository.loadList().then(function() {

        pokemonRepository.getAll().forEach(function(pokemon)
        {
        pokemonRepository.addListItem(pokemon);
        });
          });
    
