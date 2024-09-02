export function discount(price, discountedPercentage){
        
    var discountedPrice = price- ((price*discountedPercentage)/100)
     var discountPrice = discountedPrice.toFixed(2);
     return discountPrice;
 }


 export function totalPrice(arrCart){  
    return arrCart.reduce((total, item)=>{
     const {product, quantity} = item;
     const {price, discountPercentage} = product;
     const discountedPrice = discount(price, discountPercentage);
     return (total + discountedPrice * quantity);
    },0)}