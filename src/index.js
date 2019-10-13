 module.exports =  function zeros(expression = "") {
  var nums = [];
  var signs = [];
  for(var i = 0; i < expression.length; i++){
    var start = i;
    for(;i < expression.length && expression[i]!='!'; i++);
    nums.push(parseInt(expression.substring(start,i)));
    var count = 0;
    for(;i<expression.length && expression[i]!='*'; i++,count++);
    signs.push(count);
  }
  var zeroNums = 0;
  var temp = BigInt(1);
  for(var u=0;u<nums.length;u++)
  {
    var n = nums[u];
    var iter = signs[u];
    var i = 1;
    if(iter==2 && n%2==0) i++;
    for(; i <= n; i+=iter){
      temp = (temp*BigInt(i));
    }
  }

  var str = "" + temp;
  str = str.split('').reverse();
  str = str.join('');
  for(var i=0; i < str.length; i++){
    if(str[i]!=0){
      break;
    }
    zeroNums++;
  }
  return zeroNums;
}
