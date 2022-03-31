const inialState = {
    list : []
}

const todooruducer = (state = inialState , action) => {
    switch(action.type){
        case "ADD_TOODOO":
            const {id ,data} = action.payload;

            return{
                ...state,
                list : [
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        default: return state;    
    }
}

export default todooruducer