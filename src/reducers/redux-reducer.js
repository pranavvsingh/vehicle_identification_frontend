import { createStore } from 'redux'
import { combineReducers } from 'redux'

const initialState = {
  sidebarShow: 'responsive'
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    default:
      return state
  }
}

const paymentIntialState = {
    paymentStatus: false
}
const payment = (state = paymentIntialState,action) =>{
    switch (action.type){
        case "success":{
            return{
                ...state,
                paymentStatus:true
            }
        }
        case "failure":{
            return{
                ...state,
                paymentStatus:false
            }
        }
        default:
         return state;
    }
}

const rootReducer = combineReducers({
    changeState,
    payment
  });

const store = createStore(rootReducer)
export default store