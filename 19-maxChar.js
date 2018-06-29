// find the max chars inside the string provided

function findMaxChars(string) {
  const	charMap = {};

		for( let char of string ){
			if ( charMap[char] ) {
				charMap[char] ++;
			}
			else {
				charMap[char] = 1;
			}
		}

		console.log('22-  charMap = ', charMap );
		// give the character that is max times repeated ?
}

findMaxChars('Hello There!');
