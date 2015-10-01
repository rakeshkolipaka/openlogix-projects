function myFunction(){
 	var xname=document.getElementById("name");
 	console.log("Name:"+" "+xname.value);
 	var yphone=document.getElementById("phone");
 	console.log("Phone:"+" "+yphone.value);
 	var myDat=document.getElementById("myDate").value;
 	var today= new Date();
 	if(myDat>today){
 		alert("you should  enter a date before today");
 	}
 	else{
 		console.log("Date of Birth:"+" "+myDat);
 	}
// 	var dbirth=document.getElementById("birthDate").value;
 //	console.log("Date of Birth:"+" "+dbirth);
 	var zemail=document.getElementById("email");
 	console.log("Email:"+" "+email.value);
 	if (document.getElementById("radio1").checked) {
       var male = document.getElementById('radio1').value;
       console.log("Gender:"+" "+male);
    }
    else if (document.getElementById("radio2").checked) {
       var female = document.getElementById("radio2").value;
       console.log("Gender:"+" "+female);
    }
    else if((document.getElementById("radio1").unchecked)===(document.getElementById("radio2").unchecked)){
 	   alert("please select your Gender");
    }
 	var cities=document.getElementById("city");
 	if(cities.value==="Select one"){
       alert("select your city");
 	}
 	else{
 	console.log("City:"+" "+cities.value);
    }
 	if (document.getElementById("checkbox1").checked){
 		var bike= document.getElementById("checkbox1").value;
 		console.log("Vehicle:"+" "+bike);
 	}
 	else if(document.getElementById("checkbox2").checked) {
 		var car= document.getElementById("checkbox2").value;
 		console.log("Vehicle:"+" "+car);
 	}
 	else if(document.getElementById("checkbox3").checked){
 		var motercycle= document.getElementById("checkbox3").value;
 		console.log("Vehicle:"+" "+motercycle);
 	}

}
function resetFunction(){
	document.getElementById("name").value="";
	document.getElementById("phone").value="";
	document.getElementById("myDate").value="";
	document.getElementById("email").value="";
	document.getElementById("city").value="";
}