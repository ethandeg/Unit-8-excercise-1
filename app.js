function doubleValues(arr) {
	let newArr = [];
	arr.forEach(function(array) {
		let double = array * 2;
		newArr.push(double);
	});
	return newArr;
}

function onlyEvenValues(arr) {
	newArr = [];
	arr.forEach(function(even) {
		if (even % 2 === 0) {
			newArr.push(even);
		}
	});
	return newArr;
}

function showFirstAndLast(arr) {
	let newArr = [];
	arr.forEach(function(array) {
		let n = array.slice(0, 1);
		let e = array.length;
		let v = array.slice(e - 1, e);
		let b = n + v;
		newArr.push(b);
	});
	return newArr;
}

function addKeyAndValue(arr, key, value) {
	arr.forEach(function(val) {
		val[key] = value;
	});
	return arr;
}

function vowelCount(str) {
	let splitArray = str.split('');
	let obj = {};
	const vowels = 'aeiou';
	//loop through arr
	splitArray.forEach(function(char) {
		let lowerLetter = char.toLowerCase();
		//check if char is indexed in vowels string
		if (vowels.indexOf(lowerLetter) !== -1) {
			//if so, create a key in the object
			if (obj[lowerLetter]) {
				//if that letter exists, increment it
				obj[lowerLetter]++;
			} else {
				//or else it is only in once
				obj[lowerLetter] = 1;
			}
		}
	});
	return obj;
}

function doubleValuesWithMap(arr) {
	return arr.map(function(num) {
		return num * 2;
	});
}

function valTimesIndex(arr) {
	return arr.map(function(num, i) {
		return num * i;
	});
}

function extractKey(arr, key) {
	return arr.map(function(someKey) {
		return someKey[key];
	});
}

function extractFullName(arr) {
	return arr.map(function(obj) {
		return obj.first + ' ' + obj.last;
	});
}

function filterByValue(arr, key) {
	return arr.filter(function(obj) {
		return obj[key] !== undefined;
	});
}

function find(arr, value) {
	return arr.filter(function(val) {
		return val === value;
	})[0];
}

function findInObj(arr, key, val) {
	return arr.filter(function(obj) {
		return obj[key] === val;
	})[0];
}

function removeVowels(str) {
	const vowels = 'aeiou';
	//lower case string and turn into array
	return (
		str
			.toLowerCase()
			.split('')
			.filter(function(char) {
				//return letters that don't have an index in vowel var
				return vowels.indexOf(char) === -1;
			})
			//turn back into a string
			.join('')
	);
}

function doubleOddNumbers(arr) {
	return arr
		.filter(function(odd) {
			return odd % 2 !== 0;
		})
		.map(function(num) {
			return num * 2;
		});
}
