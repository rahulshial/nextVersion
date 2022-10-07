/** Given a current version number in string format, the function will return the next version number in string format.
 * 
 * You can test the code locally stand-alone as under:
 * console.log('nextVersion("1.2.3") returns ("1.2.4"): ', nextVersion('1.2.3')); // 1.2.4
 * 
 * Alternatively - for automated tests, 
 * please download the repo at https://github.com/rahulshial/nextVersion
 * run yarn install
 * run yarn test
*/

const nextVersion = (currentVersion) => {
  if(currentVersion.length === 0) return "Invalid current version number!"; // Don't process further if current value is blank

  const nextVersion = currentVersion.split('.').map(Number); // convert the string to an array of numbers separated by ","
  /**
   * Loop thru the array in reverse order
   * if the incremental value of the current element is 10 and it is not the first element of the array, then give it a value of zero (0), and continue processing the previous element of the array
   * Increment the previous element of the array and break the loop to return the new version number
   */
  for (let i = nextVersion.length - 1; i >= 0; i--) {
    if(nextVersion[i] +1 === 10 && i != 0) {
      nextVersion[i] = 0;
    } else {
      nextVersion[i]++;
      break;
    }
  }
  return nextVersion.join('.').toString();
}

module.exports = { nextVersion };