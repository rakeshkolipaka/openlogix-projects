 function addFunction(){
	var x=Number(document.getElementById("number1").value);
	var y=Number(document.getElementById("number2").value);
	console.log(x+y);
}
function perFunction(){
	var a=Number(document.getElementById("num1").value);
	var b=Number(document.getElementById("num2").value);
	var c=(a*100)/b;
	console.log(c);
}
function armstrongFunction(){
	var j,z,k=0;
	var l=Number(document.getElementById("armstrongNumber").value);
	z=l;
	while(z>0)
	{
		j=z%10;
		k=k+(j*j*j);
		z=parseInt(z/10);
	}
	if(l==k)
		console.log("given no is amstrong number");
	else
		console.log("given no is not an amstrong number");
}
function divFunction(){
	var u=Number(document.getElementById("numb1").value);
	var v=Number(document.getElementById("numb2").value);
	if(u%v==0){
		console.log("it is divisible")
	}
	else{
		console.log("number is not divisible");
	}
}
function sortArray(){
	var givenNum1=Number(document.getElementById("numbA").value);
	var givenNum2=Number(document.getElementById("numbB").value);
	var givenNum3=Number(document.getElementById("numbC").value);
	var givenNum4=Number(document.getElementById("numbD").value);
	var givenNum5=Number(document.getElementById("numbE").value);
	var givenNum6=Number(document.getElementById("numbF").value);
	var points=[givenNum1,givenNum2,givenNum3,givenNum4,givenNum5,givenNum6];
	
	points.sort(function(a,b){return a-b});
	document.getElementById("sorting").innerHTML=points;
}

