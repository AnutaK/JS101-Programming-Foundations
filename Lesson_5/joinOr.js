const joinOr = (arr, delimiter, separator) => {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    //"1 or 2"
    if (arr.length === 2) return (str += `${arr[0]} or ${arr[1]}`);
    //"1, 2, or 3"
    else if (
      arr.length === 3 &&
      separator === undefined &&
      delimiter === undefined
    )
      return (str += `${arr[0]}, ${arr[1]} or ${arr[2]}`);
    //"1; 2; or 3"
    else if (arr.length > 3 && separator === undefined) str += `${arr[1]} ; `;
  }

  //  let sliced = str.slice(0,str.length - 3);
  return str;
};

joinOr([1, 2, 3], "; ");
