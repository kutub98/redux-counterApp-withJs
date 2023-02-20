
// select dom elements start----//

const counter = document.getElementById('counter')
const IncrementCounter = document.getElementById('Increment')
const DecrementCounter = document.getElementById('Decrement')

// select dom elements end -----//


//  setup initialState 
const initialState = {
    value: 0,
}

const counterReducer =(state = initialState, action)=>{
    if(action.type === "Increment"){
        return {
            ...state,
            value: state.value + 1
        }
    }else if(action.type === "Decrement"){
        return{
            ...state,
            value: state.value - 1,
        }
    }else{
        return state
    }
}

// create store 
const store = Redux.createStore(counterReducer);

const render =()=>{
    const state = store.getState()
    counter.innerText = state.value.toString()
}
render()
store.subscribe(render)

IncrementCounter.addEventListener('click', ()=>{
    store.dispatch({
        type: 'Increment',
        value: 2,
    })
})
DecrementCounter.addEventListener('click', ()=>{
    store.dispatch({
        type: 'Decrement',
        value: 2,
    })
})
