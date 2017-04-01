import * as R from 'ramda';

export class RootState {
    selectedYear: string = "1900";
    searchTerm: string = '';
    films: Object[] = [];
}

export const FilmSearchReducer = (state: RootState = new RootState(), action: any) => {
    switch (action.type) {
        case 'SELECT_YEAR':
            return R.assoc('selectedYear', action.payload, state);
        case 'TYPE_IN_SEARCH_BOX':
            return R.assoc('searchTerm', action.payload, state);
        case 'SEARCH_COMPLETED':
            return R.assoc('films', action.films, state);
    default:
        return state
    }
}