/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

 function coinFlip() {
    if(Math.random() >0.5){
      return "heads"
    }
    return "tails"
    
  }
  
  /** Multiple coin flips
   * 
   * Write a function that accepts one parameter (number of flips) and returns an array of 
   * resulting "heads" or "tails".
   * 
   * @param {number} flips 
   * @returns {string[]} results
   * 
   * example: coinFlips(10)
   * returns:
   *  [
        'heads', 'heads',
        'heads', 'tails',
        'heads', 'tails',
        'tails', 'heads',
        'tails', 'heads'
      ]
   */
  
  function coinFlips(flips) {
    var results = []
  
  //   for (var element of results) { // You can use `let` instead of `const` if you like
  //     element = coinFlip()
  // }
  
  for (let i = 0; i < flips; i++) {
    results[i] = coinFlip()
  }
  
  
  
    // results.forEach(i=> i ="2");
    // results.forEach((element) =>{
    //   element = "test"
    //   console.log(element)
    // })
  
  
    return results
  }
  
  /** Count multiple flips
   * 
   * Write a function that accepts an array consisting of "heads" or "tails" 
   * (e.g. the results of your `coinFlips()` function) and counts each, returning 
   * an object containing the number of each.
   * 
   * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
   * { tails: 5, heads: 5 }
   * 
   * @param {string[]} array 
   * @returns {{ heads: number, tails: number }}
   */
  
  function countFlips(array) {
    var headCount = 0
    var tailCount = 0 
    array.forEach((element) => {
      if(element == "heads"){
        headCount++
      }
      if(element == "tails"){
        tailCount++
      }
    })
    return { heads: headCount, tails: tailCount}
    // return ["heads: "+ headCount, "tails: "+ tailCount]
  
    // return [`heads: ${headCount}`, `tails: ${tailCount}`]
  }
  
  /** Flip a coin!
   * 
   * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
   * 
   * @param {string} call 
   * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
   * 
   * example: flipACoin('tails')
   * returns: { call: 'tails', flip: 'heads', result: 'lose' }
   */
  
  function flipACoin(call) {
    const flip = coinFlip()
    if (call != flip) {
      return {call: call, flip: flip, result: "lose"}
    }else{
      return {call: call, flip: flip, result: "win"}
    }
  
  }
  
  
  /** Export 
   * 
   * Export all of your named functions
  */
  // export {coinFlip, coinFlips, countFlips, flipACoin}

  module.exports = {coinFlip, coinFlips, countFlips, flipACoin};