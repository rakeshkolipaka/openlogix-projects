$(document).ready(function(){
	$("#load").click(function(){
		console.log(employee.length + " "+ employee[0].id);
	for(var i=0;i<employee.length;i++){
		console.log(employee[i].id);
        $("table").append("<tr><td>+"+employee[i].serialNo+"</td><td>"+employee[i].name+"</td><td>"+employee[i].id+"</td><td>"+employee[i].phone+"</td><td>"+employee[i].salary+"</td></tr>");
    }
	});
});
function alphaSort(){
	for(var j=0;j<employee.length;j++){
	var alphabet=((employee[j].id).value);
	console.log(alphabet);
	//alphabet.sort(function(a,b){return a-b});
}
}
var employee= [] ;
employee=[{"serialNo":9, "name":"Rakesh", "id":3614158, "phone":3612284150, "salary":70000},
{"serialNo":8, "name":"akes", "id":3614155, "phone":3612284150, "salary":70000}];
