const initState = {
    amiibos:[],
    filtered: [],
    noAllCards: 0,
    noFilteredCards:0
    
}

const rootReducer = (state = initState, action) => {
    if(action.type === "SET_ALL"){
        const amiibos = action.data.amiibo ;
        console.log(amiibos);
        return {
            ...state,
            amiibos: amiibos,
            filtered:amiibos,
            noAllCards: amiibos.length,
            noFilteredCards:amiibos.length
        }
        
    }
    if(action.type === "FILTER"){
        const filtered = state.amiibos.filter(amiibo => {
            return amiibo.name.toLowerCase().indexOf(action.keywords) !== -1;
        })
        return {
            ...state,
            filtered: filtered,
            noFilteredCards:filtered.length
        }
    }
    
    return state;
}

export default rootReducer;