$(document).ready(function(){
	$("p").hide();
    $("#submit").click(function(){
        if($("#name").val()==""){
        	$("#p1").show();
        }
        if($("#phone").val()==""){
        	$("#p2").show();
        }
        if($("#myDate").val()==""){
        	$("#p3").show();
        }
        if($("#email").val()==""){
        	$("#p4").show();
        }
        if($("#city").val()=="Select one"){
            $("#p5").show();
        }
        if(($("#name").val())&&($("#phone").val())&&($("#myDate").val())&&($("#eamil").val())!=""){
        	console.log("Name: " + $("#name").val());
        	console.log("phone:"+$("#phone").val());
        	console.log("Date of Birth:"+$("myDate").val());
        	console.log("Email:"+ $("#email").val());
        }		
    });
});
