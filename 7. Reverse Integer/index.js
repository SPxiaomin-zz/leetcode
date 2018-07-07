/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let reverseX = 0

  while (x != 0) {
    reverseX = reverseX * 10 + x % 10
    x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
  }

  if (reverseX < -Math.pow(2, 31) || reverseX > Math.pow(2, 31) - 1) return 0

  // return reverseX
  console.log(reverseX)
};

reverse(0)
reverse(123)
reverse(1534236469)