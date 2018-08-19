var app = angular.module("signup",[]);
app.controller("myCtrl",function($scope){
	$("$submit").click(function(){
		var fanme=$("fname").val();
		var lname=$("lname").val();
		var email=$("email").val();
		var mno=$("mno").val();
		var password=$("password").val();
		var confirmpassword=$("confirmpassword").val();
		var port=$("port").val();
		var gender=$("gender").val();
		if(fname='' || lname='' || email='' || mno='' || password='' || confirmpassword='' || port='' || gender='' ||){
			$("#msg").html("Please fill all the details!");

		}
		else{
			$.ajax({
				type:'POST',
				url: 'http://127.0.0.1/angularsignup/webservice/save.php',
				data

			})
		}
	});
});