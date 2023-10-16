import { Event } from '../event.model'
import * as EventsActions from './event.actions';

export interface State { 
    events : Event[];
}

const initialState: State = {
    events: []
}

export function recipeReducer(
    state = initialState, 
    action: EventsActions.EventsActions
) {
    switch (action.type) {
        case EventsActions.SET_EVENTS;
        return {
            ...state,
            events: [...action.payload]
        }
        default:
            return state;
    }
}