// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
// const polybiusModule = (function () {

// function polybius(input, encode = true) {
//   const encoder = {
//     a: "11", b: "21", c: "31", d: "41", e: "51", f: "12", g: "22", h: "32", i: "42", j: "42", k: "52", l: "13", m: "23", n: "33", o: "43", p: "53", q: "14", r: "24", s: "34", t: "44", u: "54", v: "15", w: "25", x: "35", y: "45", z: "55",
//   };

//   const decoder = {
// 11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k", 13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
//   };

//   input = input.split("");

//   if (encode) {
//     return input.reduce((result, char) => {
//       char = char.toLowerCase();
//       const code = char.charCodeAt();
//       if (code >= 97 && code <= 122) {
//         return `${result}${encoder[char]}`;
//       }
//       return `${result}${char}`;
//     }, "");
//   }

//   const result = input.reduce((acc, char) => {
//     return char !== " " ? acc + 1 : acc;
//   }, 0);

//   if (result % 2 !== 0) return false;

//   let newStr = "";

//   for (let i = 0; i < input.length; i += 2) {
//     if (input[i] !== " ") {
//       const encoded = input[i] + input[i + 1];
//       const decoded = decoder[encoded];
//       newStr = `${newStr}${decoded}`;
//     } else {
//       i += 1;
//       const encoded = input[i] + input[i + 1];
//       const decoded = decoder[encoded];
//       newStr = `${newStr} ${decoded}`;
//     }
//   }
//   return newStr;
// }
// return {
//   polybius,
// };
// })();

// module.exports = { polybius: polybiusModule.polybius };

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    // object containing the rows in the polybius table
    const rowObject = {
      1: ["A", "B", "C", "D", "E"],
      2: ["F", "G", "H", "I/J", "K"],
      3: ["L", "M", "N", "O", "P"],
      4: ["Q", "R", "S", "T", "U"],
      5: ["V", "W", "X", "Y", "Z"],
    };
    // object containing the columns in the polybius table
    const columnObject = {
      1: ["A", "F", "L", "Q", "V"],
      2: ["B", "G", "M", "R", "W"],
      3: ["C", "H", "N", "S", "X"],
      4: ["D", "I/J", "O", "T", "Y"],
      5: ["E", "K", "P", "U", "Z"],
    };
    // Conversion of the inputted string, to the corresponding numbers
    const polybiusTable = (strings) => {
      let aChar = strings.replace(/a/g, "11");
      let bChar = aChar.replace(/b/g, "21");
      let cChar = bChar.split("c").join("31");
      let dChar = cChar.split("d").join("41");
      let eChar = dChar.split("e").join("51");
      let fChar = eChar.split("f").join("12");
      let gChar = fChar.split("g").join("22");
      let hChar = gChar.split("h").join("32");
      let iChar = hChar.split("i").join("42");
      let jChar = iChar.split("j").join("42");
      let kChar = jChar.split("k").join("52");
      let lChar = kChar.split("l").join("13");
      let mChar = lChar.split("m").join("23");
      let nChar = mChar.split("n").join("33");
      let oChar = nChar.split("o").join("43");
      let pChar = oChar.split("p").join("53");
      let qChar = pChar.split("q").join("14");
      let rChar = qChar.split("r").join("24");
      let sChar = rChar.split("s").join("34");
      let tChar = sChar.split("t").join("44");
      let uChar = tChar.split("u").join("54");
      let vChar = uChar.split("v").join("15");
      let wChar = vChar.split("w").join("25");
      let xChar = wChar.split("x").join("35");
      let yChar = xChar.split("y").join("45");
      let zChar = yChar.split("z").join("55");

      return zChar;
    };
    // Makes sure that spaces are not counted in the length of input
    const ignoreSpacing = (input) => {
      let myString = input;
      let remText = myString.replace(/ /g, "");
      let length = remText.length;

      let remainderVal = length % 2;
      return remainderVal;
    };

    // Sets our input to lowercase
    const lower = input.toLowerCase();

    if (encode) {
      return polybiusTable(lower); //calling our polybiusTable function with our lowercased input variable
    } else {
      if (ignoreSpacing(lower) === 1) return false; // calling our ignoreSpacing to check our remainder (checking even or odd), returning false if odd.
      let result = ""; // Holding our final string in a result variable.
      for (let i = 0; i < input.length; i += 2) {
        // looping through our input, and incrementing by 2, since each pair of numbers represents a letter.
        if (input[i] === " ") {
          result += " "; // preserves our spaces, we are joining a space with our result whenever we encounter one before we make the changes in our else.
          i--;
        } else if (`${input[i]}${input[i + 1]}` === "42") {
          result += "(i/j)"; //hard-coding what we should join our string with (i/j)
        } else {
          let numValue = columnObject[input[i]]; //Using our index searching for value in columnobject
          let numValue2 = rowObject[input[i + 1]]; // Using our index searching for value in columnobject

          let foundVal = numValue.find((num) => numValue2.includes(num)); // using find to hold our num value, and check if it's included in our secondary value. (numValue2)
          result += foundVal; // Join the findings.
        }
      }
      return result.toLowerCase(); // takes the result to lowercase at the end while returned.
    }
  }

  return {
    polybius,
  };
})();
console.log(polybiusModule.polybius("Thoughtful", true));
module.exports = { polybius: polybiusModule.polybius };
