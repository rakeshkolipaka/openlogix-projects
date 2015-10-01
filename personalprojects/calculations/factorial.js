function factorial(){
	var n=Number(document.getElementById("givenNumber").value);
    if (n < 0) {
        return -1;
    }
    else if (n == 0) {
        return 1;
    }
    var tmp = n;
    while (n-- > 2) {
        tmp *= n;
    }
    console.log(tmp);
}
function fibonacci(){
	var a=Number(document.getElementById("fibonacciNumber").value);
   	var fib = []; 

	fib[0] = 0;
	fib[1] = 1;
	for(var i=2; i<=a; i++)
	{
    	fib[i] = fib[i-2] + fib[i-1];
    	console.log(fib[i]);
	}
}
function myFunction(){
	var givenString = document.getElementById("string").value;
    var s = givenString.search(document.getElementById("search").value);
    console.log(s);
	
}
function length(){
	var givenString = document.getElementById("string").value;
	var l= givenString.length;
	console.log(l)
}
function reverse(s) {
	var s= document.getElementById("string").value;
  	var o = '';
  	for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  	console.log(o);
}