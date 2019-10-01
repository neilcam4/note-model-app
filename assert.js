// var assert = {
//   isTrue: function(assertionToCheck){
//     if(!assertionToCheck){
//       throw new Error(`Assertion failed: ${assertionToCheck} is not truthy`);
//     }
//   }
// };

var assert = {
  isTrue:function(assertionToCheck, actual, expectation){
    if(!assertionToCheck){
      document.getElementById('test_errors')
      .insertAdjacentHTML('beforeend', `Test has failed. Got ${actual} but expected ${expectation}<br/>`)
    }
  }
};
