export function repeatStr(
  str /* hear add String */,
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

export function get_length(text) {
  let i = 0;

  while (text[i] != undefined) {
    i++;
  }
  return i;
}

export function split(str, sep = "") {
  const res = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (el === sep || (sep === "" && temp)) {
      console.log(temp);
      res.push(temp);
      temp = "";
    }
    if (el !== sep) {
      temp += el;
    }
  }
  if (temp) {
    res.push(temp);
    temp = "";
  }
  return res;
}

export function joinFromArr(arr, sep = "") {
  let result = "";
  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i];
    result += sep;
  }

  result += arr[arr.length - 1];

  return result;
}

function convertToUpper(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= "a" && string[i] <= "z") {
      result.push(String.fromCharCode(string.charCodeAt(i) - 32));
    } else {
      result.push(String.fromCharCode(string.charCodeAt(i)));
    }
  }
  return result.join("");
}
function convertToLower(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= "A" && string[i] <= "Z") {
      result.push(String.fromCharCode(string.charCodeAt(i) + 32));
    } else {
      result.push(String.fromCharCode(string.charCodeAt(i)));
    }
  }
  return result.join("");
}


