<script type="text/javascript">
var choice = [];
	function q1(answer){
		switch(answer){
			case 1:
			document.getElementById("question").innerHTML = "Typist, coder, or gamer?";
			document.getElementById("one").innerHTML = "Typist";
			var a1 = document.getElementById("one");
			a1.setAttribute("onclick", "q2(1)");
			document.getElementById("two").innerHTML = "Coder";
			var a2 = document.getElementById("two");
			a2.setAttribute("onclick", "q2(2)");
			document.getElementById("three").innerHTML = "Gamer";
			var a3 = document.getElementById("three");
			a3.setAttribute("onclick", "q2(3)");
			choice.push(1);
			break;
			
			case 2:
			document.getElementById("question").innerHTML = "Typist, coder, or gamer?";
			document.getElementById("one").innerHTML = "Typist";
			var a1 = document.getElementById("one");
			a1.setAttribute("onclick", "q2(1)");
			document.getElementById("two").innerHTML = "Coder";
			var a2 = document.getElementById("two");
			a2.setAttribute("onclick", "q2(2)");
			document.getElementById("three").innerHTML = "Gamer";
			var a3 = document.getElementById("three");
			a3.setAttribute("onclick", "q2(3)");	
			choice.push(2);
			break;
			
			case 3:
			document.getElementById("question").innerHTML = "Typist, coder, or gamer?";
			document.getElementById("one").innerHTML = "Typist";
			var a1 = document.getElementById("one");
			a1.setAttribute("onclick", "q2(1)");
			document.getElementById("two").innerHTML = "Coder";
			var a2 = document.getElementById("two");
			a2.setAttribute("onclick", "q2(2)");
			document.getElementById("three").innerHTML = "Gamer";
			var a3 = document.getElementById("three");
			a3.setAttribute("onclick", "q2(3)");
			choice.push(3);
			break;
		}
		
	}
		
	function q2(answer){
		switch(answer){
			case 1:
			document.getElementById("question").innerHTML = "How large of a keyboard do you want?";
			document.getElementById("one").innerHTML = "Standard";
			a1 = document.getElementById("one");
			a1.setAttribute("onclick", "q3(1)");
			document.getElementById("two").innerHTML = "Small";
			a1 = document.getElementById("two");
			a1.setAttribute("onclick", "q3(2)");
			document.getElementById("three").innerHTML = "Very Small";
			a1 = document.getElementById("three");
			a1.setAttribute("onclick", "q3(3)");
			choice.push(1);
			alert(choice);
			break;
			
			case 2:
			document.getElementById("question").innerHTML = "How large of a keyboard do you want?";
			document.getElementById("one").innerHTML = "Standard";
			a1 = document.getElementById("one");
			a1.setAttribute("onclick", "q3(1)");
			document.getElementById("two").innerHTML = "Small";
			a1 = document.getElementById("two");
			a1.setAttribute("onclick", "q3(2)");
			document.getElementById("three").innerHTML = "Very Small";
			a1 = document.getElementById("three");
			a1.setAttribute("onclick", "q3(3)");
			choice.push(2);
			alert(choice);
			break;
			
			case 3:
			document.getElementById("question").innerHTML = "How large of a keyboard do you want?";
			document.getElementById("one").innerHTML = "Standard";
			a1 = document.getElementById("one");
			a1.setAttribute("onclick", "q3(1)");
			document.getElementById("two").innerHTML = "Small";
			a1 = document.getElementById("two");
			a1.setAttribute("onclick", "q3(2)");
			document.getElementById("three").innerHTML = "Very Small";
			a1 = document.getElementById("three");
			a1.setAttribute("onclick", "q3(3)");
			choice.push(3);
			alert(choice);
			break;
			alert(choice);
		}
	}
	
	

</script>
