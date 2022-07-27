export const calculateIsInCart = (cartItems, product) => {
    if(product){
      const result = cartItems?.find((item) => item._id === product._id);
      return result ? true : false;
    } return false
  };