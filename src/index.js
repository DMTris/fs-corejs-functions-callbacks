//default object
export default {
//add function
add(a = 0, b = 0, callback) {
  return callback(null, a + b);
  },
//multiply
multiply(a = 0, b = 0, callback){
  const product = Array(a).fill(b).reduce((prev, current) => {
    return this.add(prev, current, (err, product) => {
      return product;
      });
    }, 0);
    return callback(null, product);
  }
}
