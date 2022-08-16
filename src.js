export function repeatStr(
  str /* hear add Sting */,
  num /* hear add the number that you want to repeat the string */
) {
  let final = "";
  for (let i = 0; i < num; i++) {
    final += str;
  }
  return final;
}

// export function discount(regulerPrice, discount) {
//   const discountP = ((100 - discount) / 100);

//   const sale = discountP * regulerPrice;

//   return sale;
// }

// Small function of discount function
export function discount(regulerPrice, discount) {
  return ((100 - discount) / 100) * regulerPrice;
}

