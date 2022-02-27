function repeatStr(
  str /* hear add Sting */,
  num /* hear add the number that you want to repeat the string */
) {
  let final = "";
  for (let i = 0; i < num; i++) {
    final += str;
  }
  return final;
}
