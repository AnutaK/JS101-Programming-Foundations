const letterPercentages = (str) => {
  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  str.split("").forEach((char) => {
    if (char >= "a" && char <= "z") obj.lowercase += 1;
    else if (char >= "A" && char <= "Z") obj.uppercase += 1;
    else obj.neither += 1;
  });

  for (let prop in obj) {
    obj[prop] = ((obj[prop] / str.length) * 100).toFixed(2);
  }

  return obj;
};

console.log(letterPercentages("abCdef 123"));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages("AbCd +Ef"));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages("123"));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
