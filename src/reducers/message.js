import * as actionsTypes from './../constants/ActionTypes'
import * as messageTypes from './../constants/Message'
var initialState = messageTypes.MEG_WELLCOME
var message = (state = initialState, action) => {
   switch (action.type) {
      case actionsTypes.CHANGE_MESSAGE :
         state = action.message
         return state
     
      default:
         return state
   }
}
export default message