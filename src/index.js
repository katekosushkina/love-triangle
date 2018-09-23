/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let arr = [];
  let count=0;
      preferences.forEach(function(item, i) {
        if (!(arr.indexOf(i) != -1)){
          //item=2
            i1=preferences[i]-1; //2-1=1
            i2=preferences[i1]-1; //3-1 = 2
            i3=preferences[i2]-1; //1-1 = 0
            if (i!=i1 && i===i3){
              count++;
              arr.push(i1, i2, i3);
            }
        }
      });
  return count;
};
