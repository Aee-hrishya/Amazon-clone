export const initialState = {
    basket: [],
    user: null
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.payload]
            };

        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket]; //Copying the existing items in the basket to newBasket

            //now find the index  of the item that has the same id that has been passed to action.payload.id
            const index = state.basket.findIndex(item => item.id === action.payload.id);

            //if the index is found then splice(remove item from) the newBasket  
            if(index >= 0){
                newBasket.splice(index, 1);
            }

            //finally return the newBasket which has the selected item deleted
            return{...state, basket: newBasket}
        

        case "SET_USER":
            return{
            ...state,
            user:{
                email:action.payload.email,
                uid:action.payload.uid
            }
        };

        case "UNSET_USER":
            return{
            ...state,
            user:null,
            basket:[]
        };

        default:
            return state;
    }
};


export default reducer;