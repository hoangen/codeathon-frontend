import ActionType from '../actions/actionType'

const initialState = {
  dataList: [],
  isFetching: false
}

const companyNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_COMPANY_NAME:
      return {...state, isFetching: true}
    case ActionType.CLEAR_COMPANY_NAME:
      return {dataList: [], isFetching: false}
    case ActionType.GET_COMPANY_NAME_DONE:
      const {data} = action.payload
      return {
        dataList: data.map(({name}) => ({value: name})),
        isFetching: false
      }
    default:
      return state
  }
}

export default companyNameReducer
