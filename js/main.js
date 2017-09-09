function show(){
	var data = studentCollection.find();
	console.log(data);

	for(var 1 =0 ; i<0; i++){
	var student = data[0];
		$("#table-body").append(
			"<tr>" +
				"<td>" + student._id + "</td>" +
				"<td>" +  student.name + "</td>" + 
			"</tr>"
		);
	}
}


var fdb = new ForerunnerDB();
// 創造資料庫
var db = fdb.db("myDB");  
// 創造資料表
var studentCollection = db.collection('students');

studentCollection.load(show);      

$(".table:").on("click","._id",showDetail)

function myFun(){
	var studentName = $("input[name = 'name']").val();	
	var studentAge = $("input[name = 'age']").val();
	var newData = {
		name: studentName,
		age: parseInt(studentAge)
	}
	studentCollection.insert( newData );
	studentCollection.save();

	$("input[name = 'name']").val("");
	$("input[name = 'age']").val("");

}
$("#submit").on("click",myFun);