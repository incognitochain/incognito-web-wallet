import { IAction } from "./interface";
import { ACTION_FETCHED_ACCOUNTS } from "../actions/accounts";

export interface IAccState {
  isFetching: boolean;
  isFetched: boolean;
  data: any[];
}

const initialState : IAccState = {
  isFetching: false,
  isFetched: false,
  data: []
};

export default (state = initialState, action: IAction) => {
    switch (action.type) {
        case ACTION_FETCHED_ACCOUNTS: 
            
            break;
    
        default:
            return state;
    }
}