const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // console.log(action);
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.price,
      };
    }

    case "DECREMENT_PRODUCT": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[updatedItemIndex] };

      if (updatedItem.quantity === 1) {
        const filteredCart = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: filteredCart,
          total: state.total - action.payload.price,
        };
      } else {
        updatedItem.quantity--;
        updatedCart[updatedItemIndex] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
          total: state.total - action.payload.price,
        };
      }
    }



    case "SAVE_PRODUCT": {
      const updatedSave = [...state.save];

      const updatedItemIndex = updatedSave.findIndex(
        (item) => item.id === action.payload.id
      );

        // updatedSave.push({ ...action.payload, quantity: 1 });



        if (updatedItemIndex < 0) {
          updatedSave.push({ ...action.payload });
        }


      return {
        ...state,
        save: updatedSave,
      };
    }




    case "REMOVE_SAVE": {
      const updatedSave = [...state.save];
      const updatedItemIndex = updatedSave.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updatedSave[updatedItemIndex] };

        const filteredSave = updatedSave.filter(
          (item) => item.id !== action.payload.id
        )
    
      return {
        ...state,
        save: filteredSave,
      };
    }

    case "REMOVE_ALL_SAVES": {
      return {
        ...state,
        save: [],
      };
    }



    default:
      return state;
  }
};

export default CartReducer;
