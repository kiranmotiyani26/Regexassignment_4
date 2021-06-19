function isConvertible(str1, str2, k)
{

    if ((str1.length + str2.length) < k)
        return true;
 
    var commonLength = 0;
    for (var i = 0; i < Math.min(str1.length,
                           str2.length); i++) {
        if (str1[i] == str2[i])
            commonLength++;
        else
            break;
    }
    if ((k - str1.length - str2.length +
                     2 * commonLength) % 2 == 0)
        return true;
    return false;
}
 

var str1 = prompt("Enter string 1:");
var str2 = prompt("Enter string 2:");
var k = prompt("Enter value of k:");
if (isConvertible(str1, str2, k)){
   console.log( "Yes");
   alert("Yes");
}
else{
   console.log( "No");
   alert("No");
}