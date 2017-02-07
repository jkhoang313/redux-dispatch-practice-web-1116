export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type) {
    case 'ADD_PET':
      return { pets: state.pets.concat(action.payload) }
    case 'REMOVE_PET':
      var petToBeRemoved = state.pets.findIndex( pet => pet.id === action.payload )
      return {pets: state.pets.slice(0, petToBeRemoved).concat(state.pets.slice(petToBeRemoved + 1))}
    default:
      return state
    }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  var list = state.pets.map( pet => `<li>${pet.name}</li>`)
  document.getElementById('container').innerHtml = `<ul>${list.join()}</ul>`
}
