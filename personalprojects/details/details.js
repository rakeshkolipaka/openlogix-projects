var employee=[
	{	
		"serialNo":0,
 		"name":"Rakesh",
 		"id":3614158,
  		"phone":3612284150,
    	"salary":70000 
    },
	{	
		"serialNo":1,
	 	"name":"Yeshwant",
	 	"id":3614154, 
	 	"phone":3612284517, 
	  	"salary":70000
	},
	{
		"serialNo":2,
	 	"name":"Pavan",
	 	"id":3614155, 
	 	"phone":3612287845, 
	  	"salary":60000 
	},
	{
		"serialNo":3,
	 	"name":"Anusha",
	 	"id":3614153, 
	 	"phone":3612285847, 
	  	"salary":50000
	},
	{
		"serialNo":4,
	 	"name":"Vyshak",
	 	"id":3614152, 
	 	"phone":3612287568, 
	  	"salary":60000
	},
	{
		"serialNo":5,
	 	"name":"Dinesh",
	 	"id":3614151, 
	 	"phone":3612285124, 
	  	"salary":70000
	},
	{
		"serialNo":6,
	 	"name":"Kaushik",
	 	"id":3614150, 
	 	"phone":3612285284, 
	  	"salary":70000
	},
	{
		"serialNo":7,
	 	"name":"Sonia",
	 	"id":3614159, 
	 	"phone":3612287512, 
	  	"salary":60000
	}]


function loadData(){
		$("#table1 td").remove();
	for(var i=0;i<employee.length;i++){
   
        $("#table1").append("<tr><td onclick='control("+employee[i].serialNo+")'>"+employee[i].serialNo+"</td><td>"+employee[i].name+"</td><td>"+employee[i].id+"</td><td>"+employee[i].phone+"</td><td>"+employee[i].salary+"</td></tr>");
}
}
$(document).ready(function(){
	loadData();
	
	});

$("#addNew").click(function(){
		$("#table1").hide();
		$("#header1").hide();
		$("#addNew").hide();
		$("#newEmployee").show();
		$("table1.td").hide();
		$("#table3").hide();
		
	});
$("#submit").click(function(){
	var x=$("#serialNo").val();
	var y=$("#name").val();
	var z=$("#id").val();
	var j=$("#phone").val();
	var k=$("#salary").val();
	if(x&&y&&z&&j&&k!=""){
		employee.push({'serialNo': x, 'name': y, 'id': z, 'phone': j, 'salary': k});
		$("#table1").show();
		loadData();
	}
	else{
		alert("every detail required");
		$("#table1").show();
	}
	$("#newEmployee").hide();
	$("#addNew").show();
	$("#header1").show();
	reload();
});
function reload(){
	document.getElementById("serialNo").value="";
	document.getElementById("name").value="";
	document.getElementById("id").value="";
	document.getElementById("phone").value="";
	document.getElementById("salary").value="";
}
function control(lo){
	document.getElementById("snoOfEmployee").innerHTML=employee[lo].serialNo;
	document.getElementById("nameOfEmployee").innerHTML=employee[lo].name;
	document.getElementById("idOfEmployee").innerHTML=employee[lo].id;
	document.getElementById("phoneOfEmployee").innerHTML=employee[lo].phone;
	document.getElementById("salaryOfEmployee").innerHTML=employee[lo].salary;
	$("#oneEmployeeDetails").show();
	$("#table1").hide();
	$("#header1").hide();
	$("#addNew").hide();
	$("table1.td").hide();

}	
function goBack(){
	$("#addNew").show();
	$("#header1").show();
	$("#table1").show();
	$("table1.td").show();
	$("#oneEmployeeDetails").hide();
}

