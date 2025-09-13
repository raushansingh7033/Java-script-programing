let price=100
let discount=20;

let calculateDiscountPrice=(price,discount)=>{
let discountPrice=price-price*(discount/100);
return discountPrice
}

let result=calculateDiscountPrice(price,discount)
console.log(result)