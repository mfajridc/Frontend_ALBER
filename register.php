<?php include 'config.php';


	$json = file_get_contents('php://input');
 
	 // decoding the received JSON and store into $obj variable.
	 $obj = json_decode($json,true);
	 
	 // name store into $name.
	$FullName = $obj['FullName'];
	 
	// same with $email.
	$UserName = $obj['UserName'];
	 
	// same with $password.
	$Password = $obj['Password'];
	
	if($obj['UserName']!="")
	{
	
	$result= $mysqli->query("SELECT * FROM users where UserName='$UserName'");
	
	
		if($result->num_rows>0){
			echo json_encode('username already exist');  // alert msg in react native		 		
		}
		else
		{		
		   $add = $mysqli->query("insert into users (FullName, UserName, Password) values('$FullName','$UserName','$Password')");
			
			if($add){
				echo  json_encode('User Registered Successfully'); // alert msg in react native
			}
			else{
			   echo json_encode('check internet connection'); // our query fail 		
			}
				
		}
	}
	
	else{
	  echo json_encode('try again');
	}

	
?>