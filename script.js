var options = ["Azio MGK1-K with Blues", "Atreus with Blues", "CM Storm QuickFire TK", "IBM Model M", "Planck with Browns", "IBM Model M SSK", "Corsair STRAFE with Reds", "Planck with Reds", "Corsair Vengeance K65 with Reds", "Das Professional 4 with Blues", "Planck with Blues", "POK3R ANSI US with Blues", "Das Professional 4 with Browns", "Mistel Barocco Ergonomic Split", "POK3R ANSI US with Browns", "Corsair K70", "Planck with Reds", "POK3R ANSI US with Reds", "Matias Tactile Pro with Clicky Switches", "Ergodox Infinity with Greens", "HHKB 2", "Matias Tactile Pro with Clicky Switches", "Ergodox Infinity with zealio swiches", "WhiteFox with Greens", "Cherry MX 6.0 with Reds", "Ergodox Infinity with Reds", "Carpe Keybaords JD45 with Blacks"];
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
			options.splice(9, 27);
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
			options.splice(0, 9);
			options.splice(9, 18);
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
			options.splice(0, 18);
			break;
		}
		
	}
	
	function q2(answer){
		switch(answer){
			case 1:
			document.getElementById("question").innerHTML = "How large of a keyboard do you want?";
			document.getElementById("one").innerHTML = "Standard 104-key";
			a1 = document.getElementById("one");
			a1.setAttribute("onclick", "q3(1)");
			document.getElementById("two").innerHTML = "Split or Ergonomic";
			a1 = document.getElementById("two");
			a1.setAttribute("onclick", "q3(2)");
			document.getElementById("three").innerHTML = "Tenkeyless or Smaller";
			a1 = document.getElementById("three");
			a1.setAttribute("onclick", "q3(3)");
			options.splice(3, 9);
			break;
			
			case 2:
			document.getElementById("question").innerHTML = "How large of a keyboard do you want?";
			document.getElementById("one").innerHTML = "Standard 104-key";
			a1 = document.getElementById("one");
			a1.setAttribute("onclick", "q3(1)");
			document.getElementById("two").innerHTML = "Split or Ergonomic";
			a1 = document.getElementById("two");
			a1.setAttribute("onclick", "q3(2)");
			document.getElementById("three").innerHTML = "Tenkeyless or Smaller";
			a1 = document.getElementById("three");
			a1.setAttribute("onclick", "q3(3)");
			options.splice(0, 3);
			options.splice(3, 6);
			break;
			
			case 3:
			document.getElementById("question").innerHTML = "How large of a keyboard do you want?";
			document.getElementById("one").innerHTML = "Standard 104-key";
			a1 = document.getElementById("one");
			a1.setAttribute("onclick", "q3(1)");
			document.getElementById("two").innerHTML = "Split or Ergonomic";
			a1 = document.getElementById("two");
			a1.setAttribute("onclick", "q3(2)");
			document.getElementById("three").innerHTML = "Tenkeyless or Smaller";
			a1 = document.getElementById("three");
			a1.setAttribute("onclick", "q3(3)");
			options.splice(0, 6);
			break;
		}
	}

		function q3(answer){
			switch(answer){
				case 1:
				options.splice(1, 3)
				document.getElementById("outputArea").value = options;
				break;
				
				case 2:
				options.splice(0, 1);
				options.splice(1, 2);
				document.getElementById("outputArea").value = options;
				break;
				
				case 3:
				options.splice(0, 2);
				document.getElementById("outputArea").value = options;
				break;
			}
		}
