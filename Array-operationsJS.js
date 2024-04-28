// forEach

// Doubles each value in the array
function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      newArr.push(val * 2);
    });
    return newArr;
  }
  
  // Filters out only the even values from the array
  function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      if (val % 2 === 0) {
        newArr.push(val);
      }
    });
    return newArr;
  }
  
  // Constructs a new array containing the concatenation of the first and last characters of each string in the array
  function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
  }
  
  // Adds a new key-value pair to each object in the array
  function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
      val[key] = value;
    });
    return arr;
  }
  
  // Counts the occurrences of vowels in the given string and returns an object with the count for each vowel
  function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }
  
  // map
  
  // Doubles each value in the array using map
  function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
  
  // Multiplies each value in the array by its index
  function valTimesIndex(arr) {
    return arr.map(function(val, idx) {
      return val * idx;
    });
  }
  
  // Extracts the value of a specific key from each object in the array
  function extractKey(arr, key) {
    return arr.map(function(val) {
      return val[key];
    });
  }
  
  // Constructs a new array containing the concatenation of the first and last names from each object in the array
  function extractFullName(arr) {
    return arr.map(function(val) {
      return val.first + " " + val.last;
    });
  }
  
  // filter
  
  // Filters out objects in the array that don't have the specified key
  function filterByValue(arr, key) {
    return arr.filter(function(val) {
      return val[key] !== undefined;
    });
  }
  
  // Finds the first occurrence of the specified value in the array
  function find(arr, searchValue) {
    return arr.filter(function(val) {
      return val === searchValue;
    })[0];
  }
  
  // Finds the first occurrence of the specified value for the specified key in the array of objects
  function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
      return val[key] === searchValue;
    })[0];
  }
  
  // Removes vowels from the given string and returns the modified string
  function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }
  
  // Filters out odd numbers from the array and doubles the remaining odd numbers
  function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
  }
  