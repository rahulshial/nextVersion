// Semantic Versions
// You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.
// Semantic Versions
// You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.
// Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.
// For example
// nextVersion("1.2.3") === "1.2.4";
// nextVersion("0.9.9") === "1.0.0";
// nextVersion("1") === "2";
// nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9";
// nextVersion("9.9") === “10.0";
// Rules
// No number but the first may be greater than 9: if any are, you must set them to 0 and increment the next number in sequence.
// You can assume all tests inputs to be valid.

const nextVersion = (version) => {
  if(version.length === 0) return;

  const newVersion = version.split('.').map(Number);
  const reverseOrder = newVersion.length - 1;
  
  for (let i = reverseOrder; i >= 0; i--) {
    if(newVersion[i] +1 === 10 && i != 0) {
      newVersion[i] = 0;
    } else {
      newVersion[i]++;
      break;
    }
  }
  return newVersion.join('.').toString();
}

console.log('nextVersion("1.2.3") returns ("1.2.4"): ', nextVersion('1.2.3')); // 1.2.4
console.log('nextVersion("0.9.9") returns ("1.0.0"): ', nextVersion("0.9.9")); // 1.0.0
console.log('nextVersion("1.2.3.4.5.6.7.8") returns ("1.2.3.4.5.6.7.9"): ', nextVersion("1.2.3.4.5.6.7.8")); // 1.2.3.4.5.6.7.9
console.log('nextVersion("1.2.3.4.5.6.9.9") returns ("1.2.3.4.5.7.0.0"): ', nextVersion("1.2.3.4.5.6.9.9")); // 1.2.3.4.5.7.0.0
console.log('nextVersion("9.9") returns ("10.0"): ', nextVersion("9.9")); // 10.0
console.log('nextVersion("9.") returns ("9.1"): ', nextVersion("9.")); // 9.1
console.log('nextVersion(".9") returns ("1.0"): ', nextVersion(".9")); // 1.0
console.log('nextVersion("") returns undefined: ', nextVersion("")); // undefined

module.exports = { nextVersion };