export const reducer =(state, action)=>{
  if(action.type==='REMOVE')
{
    const existingCartItemIndex=state.items.findIndex(item=>item.id===action.id)
    const existingCartItem=state.items[existingCartItemIndex]
    const updatedTotalAmount=state.totalAmount-existingCartItem.price
    let updatedItems;
    if(existingCartItem.quantity===1)
    {
        updatedItems=state.items.filter(item=>item.id!==action.id)
    }
    else{
        const updatedItem={...existingCartItem,quantity:existingCartItem.quantity-1}
        updatedItems=[...state.items]
        updatedItems[existingCartItemIndex]=updatedItem
    }
    return{
      items:updatedItems,
      totalAmount:updatedTotalAmount
}
 }
    
}