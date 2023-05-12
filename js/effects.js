function closeEffectsPop() {
    document.getElementById("introeffectspopup").style.display = "none";
    document.getElementById("effectscoverbg").style.display = "none";
}

function effectsnext1(){
    document.getElementById('effectspopupp').innerHTML = "Change the theme by clicking on the theme buttons";
    document.getElementById('effectsintrodemo').style.backgroundImage = "url('images/effectstut2.gif')";
    document.getElementById('effectsnext1').style.display="none";
    document.getElementById('effectsnext2').style.display="block";
    document.getElementById('effectsprev2').style.display="block";
    document.getElementById('effectsdots1').style.backgroundColor="#E7E7E7";
    document.getElementById('effectsdots2').style.backgroundColor="#FFC700";
}
function effectsprev2(){
    document.getElementById('effectspopupp').innerHTML = "Click on the fish/plate you want to explore and click on the same element to go back";
    document.getElementById('effectsintrodemo').style.backgroundImage = "url('images/effectstut1.gif')";
    document.getElementById('effectsnext2').style.display="none";
    document.getElementById('effectsnext1').style.display="block";
    document.getElementById('effectsprev2').style.display="none";
    document.getElementById('effectsdots2').style.backgroundColor="#E7E7E7";
    document.getElementById('effectsdots1').style.backgroundColor="#FFC700";
}

function effectsnext1id(){
    document.getElementById('effectspopupp').innerHTML = "Ganti tema dengan menglik tomobl tema";
    document.getElementById('effectsintrodemo').style.backgroundImage = "url('images/effectstut2.gif')";
    document.getElementById('effectsnext1').style.display="none";
    document.getElementById('effectsnext2').style.display="block";
    document.getElementById('effectsprev2').style.display="block";
    document.getElementById('effectsdots1').style.backgroundColor="#E7E7E7";
    document.getElementById('effectsdots2').style.backgroundColor="#FFC700";
}
function effectsprev2id(){
    document.getElementById('effectspopupp').innerHTML = "Klik ikan/piring yang mau kamu eksplor dan klik elemen yang sama untuk kembali";
    document.getElementById('effectsintrodemo').style.backgroundImage = "url('images/effectstut1.gif')";
    document.getElementById('effectsnext2').style.display="none";
    document.getElementById('effectsnext1').style.display="block";
    document.getElementById('effectsprev2').style.display="none";
    document.getElementById('effectsdots2').style.backgroundColor="#E7E7E7";
    document.getElementById('effectsdots1').style.backgroundColor="#FFC700";
}

function opt(chosenopt,plates) {
    document.getElementById("fishfilm").style.display = "none";
    document.getElementById("fishfragment").style.display = "none";
    document.getElementById("fishfoam").style.display = "none";
    document.getElementById("fishmicrobeads").style.display = "none";
    document.getElementById("fishfilaments").style.display = "none";
    document.getElementById("fishfibre").style.display = "none";
    document.getElementById("plate1").style.display = "none";
    document.getElementById("bodyeffects").style.backgroundSize = "cover";
    document.getElementById("firstplate").style.zIndex = "1000";
    document.getElementById(chosenopt).style.display = "block";
    document.getElementById(chosenopt).style.textAlign = "center";
    document.getElementById(plates).style.display = "block";
}

function exit(big,secondplate){
    document.getElementById("firstplate").style.display = "block";
    document.getElementById("firstplate").style.zIndex = "400";
    document.getElementById(big).style.display = "none";
    document.getElementById(secondplate).style.display = "none";
    document.getElementById("fishfilm").style.display = "block";
    document.getElementById("fishfragment").style.display = "block";
    document.getElementById("fishfoam").style.display = "block";
    document.getElementById("fishmicrobeads").style.display = "block";
    document.getElementById("fishfilaments").style.display = "block";
    document.getElementById("fishfibre").style.display = "block";
    document.getElementById("plate1").style.display = "block";
    document.getElementById("bodyeffects").style.backgroundSize = "cover";
}

function picnicsmall(){
	document.getElementById("bodyeffects").style.backgroundImage = "url('images/plates/picnic.png')";

	document.getElementById("diningroombtnsmall").style.backgroundColor = "white";
	document.getElementById("diningroombtnsmall").style.border = "#13448d solid 3px";
	document.getElementById("diningroombtnsmall").style.color = "#13448d";
	document.getElementById("finediningbtnsmall").style.backgroundColor = "white";
	document.getElementById("finediningbtnsmall").style.border = "#13448d solid 3px";
	document.getElementById("finediningbtnsmall").style.color = "#13448d";
	document.getElementById("picnicbtnsmall").style.backgroundColor = "#13448d";
	document.getElementById("picnicbtnsmall").style.border = "#13448d solid 3px";
	document.getElementById("picnicbtnsmall").style.color = "white";


	document.getElementById("plate1").style.backgroundImage = "url('images/plates/plate1.png')";
	document.getElementById("plate1").style.backgroundSize = "contain";
	document.getElementById("plate1").style.width = "390px";
	document.getElementById("plate1").style.height = "250px";
	document.getElementById("plate1").style.position = "fixed";
	document.getElementById("plate1").style.left = "253px";
	document.getElementById("plate1").style.top = "97px";

	document.getElementById("platefragment").style.backgroundImage = "url('images/plates/platefragment.png')";
	document.getElementById("platefoam").style.backgroundImage = "url('images/plates/platefoam.png')";
	document.getElementById("platemicrobeads").style.backgroundImage = "url('images/plates/platemicrobeads.png')";
	document.getElementById("platefilaments").style.backgroundImage = "url('images/plates/platefilaments.png')";
	document.getElementById("platefibre").style.backgroundImage = "url('images/plates/platefibre.png')";
	document.getElementById("platefilm").style.backgroundImage = "url('images/plates/platefilm.png')";

	document.getElementById("platefragment").style.width = "215px";
	document.getElementById("platefoam").style.width = "215px";
	document.getElementById("platemicrobeads").style.width = "215px";
	document.getElementById("platefilaments").style.width = "215px";
	document.getElementById("platefibre").style.width = "215px";
	document.getElementById("platefilm").style.width = "215px";

	document.getElementById("platefragment").style.height = "138px";
	document.getElementById("platefoam").style.height = "138px";
	document.getElementById("platemicrobeads").style.height = "138px";
	document.getElementById("platefilaments").style.height = "138px";
	document.getElementById("platefibre").style.height = "138px";
	document.getElementById("platefilm").style.height = "138px";

	document.getElementById("fragmentone").style.backgroundImage = "url('images/plates/pet.png')";
	document.getElementById("fragmentone").style.width = "134px";
	document.getElementById("fragmentone").style.height = "103px";
	document.getElementById("fragmentone").style.left = "569px";
	document.getElementById("fragmentone").style.top = "57px";

	document.getElementById("fragmenttwo").style.backgroundImage = "url('images/plates/ldpe.png')";
	document.getElementById("fragmenttwo").style.height = "104px";
	document.getElementById("fragmenttwo").style.width = "143px";
	document.getElementById("fragmenttwo").style.left = "385px";
	document.getElementById("fragmenttwo").style.top = "-33px";

	document.getElementById("fragmentthree").style.backgroundImage = "url('images/plates/hdpe.png')";
	document.getElementById("fragmentthree").style.width = "134px";
	document.getElementById("fragmentthree").style.height = "103px";
	document.getElementById("fragmentthree").style.left = "191px";
	document.getElementById("fragmentthree").style.top = "188px";

	document.getElementById("fragmentfour").style.backgroundImage = "url('images/plates/pvc.png')";
	document.getElementById("fragmentfour").style.height = "104px";
	document.getElementById("fragmentfour").style.width = "104px";
	document.getElementById("fragmentfour").style.left = "205px";
	document.getElementById("fragmentfour").style.top = "57px";

	document.getElementById("fragmentfive").style.backgroundImage = "url('images/plates/pp.png')";
	document.getElementById("fragmentfive").style.height = "104px";
	document.getElementById("fragmentfive").style.width = "104px";
	document.getElementById("fragmentfive").style.left = "585px";
	document.getElementById("fragmentfive").style.top = "188px";

	document.getElementById("fragmentsix").style.backgroundImage = "url('images/plates/polystyreneplate.png')";
	document.getElementById("fragmentsix").style.height = "104px";
	document.getElementById("fragmentsix").style.width = "104px";
	document.getElementById("fragmentsix").style.left = "397px";
	document.getElementById("fragmentsix").style.top = "234px";

	document.getElementById("foamone").style.backgroundImage = "url('images/plates/polystyreneplate.png')";
	document.getElementById("foamone").style.height = "104px";
	document.getElementById("foamone").style.width = "104px";
	document.getElementById("foamone").style.left = "194px";
	document.getElementById("foamone").style.top = "98px";

	document.getElementById("foamtwo").style.backgroundImage = "url('images/plates/ldpehdpepan.png')";
	document.getElementById("foamtwo").style.width = "134px";
	document.getElementById("foamtwo").style.height = "103px";
	document.getElementById("foamtwo").style.left = "575px";
	document.getElementById("foamtwo").style.top = "99px";

	document.getElementById("microbeadsone").style.backgroundImage = "url('images/plates/nylon.png')";
	document.getElementById("microbeadsone").style.width = "134px";
	document.getElementById("microbeadsone").style.height = "103px";
	document.getElementById("microbeadsone").style.left = "562px";
	document.getElementById("microbeadsone").style.top = "47px";

	document.getElementById("microbeadstwo").style.backgroundImage = "url('images/plates/ldpehdpemirror.png')";
	document.getElementById("microbeadstwo").style.width = "143px";
	document.getElementById("microbeadstwo").style.height = "104px";
	document.getElementById("microbeadstwo").style.left = "381px";
	document.getElementById("microbeadstwo").style.top = "-33px";

	document.getElementById("microbeadsthree").style.backgroundImage = "url('images/plates/pet.png')";
	document.getElementById("microbeadsthree").style.width = "134px";
	document.getElementById("microbeadsthree").style.height = "103px";
	document.getElementById("microbeadsthree").style.left = "209px";
	document.getElementById("microbeadsthree").style.top = "189px";

	document.getElementById("microbeadsfour").style.backgroundImage = "url('images/plates/phtalate.png')";
	document.getElementById("microbeadsfour").style.height = "104px";
	document.getElementById("microbeadsfour").style.width = "104px";
	document.getElementById("microbeadsfour").style.left = "213px";
	document.getElementById("microbeadsfour").style.top = "47px";

	document.getElementById("microbeadsfive").style.backgroundImage = "url('images/plates/pp.png')";
	document.getElementById("microbeadsfive").style.height = "104px";
	document.getElementById("microbeadsfive").style.width = "104px";
	document.getElementById("microbeadsfive").style.left = "389px";
	document.getElementById("microbeadsfive").style.top = "239px";

	document.getElementById("microbeadssix").style.backgroundImage = "url('images/plates/polystyreneplate.png')";
	document.getElementById("microbeadssix").style.height = "104px";
	document.getElementById("microbeadssix").style.width = "104px";
	document.getElementById("microbeadssix").style.left = "578px";
	document.getElementById("microbeadssix").style.top = "189px";


	document.getElementById("filamentsone").style.backgroundImage = "url('images/plates/pp.png')";
	document.getElementById("filamentsone").style.height = "104px";
	document.getElementById("filamentsone").style.width = "104px";
	document.getElementById("filamentsone").style.left = "541px";
	document.getElementById("filamentsone").style.top = "185px";

	document.getElementById("filamentstwo").style.backgroundImage = "url('images/plates/dyes.png')";
	document.getElementById("filamentstwo").style.height = "104px";
	document.getElementById("filamentstwo").style.width = "146px";
	document.getElementById("filamentstwo").style.left = "354px";
	document.getElementById("filamentstwo").style.top = "-35px";

	document.getElementById("filamentsthree").style.backgroundImage = "url('images/plates/pet.png')";
	document.getElementById("filamentsthree").style.height = "103px";
	document.getElementById("filamentsthree").style.width = "134px";
	document.getElementById("filamentsthree").style.left = "208px";
	document.getElementById("filamentsthree").style.top = "185px";


	document.getElementById("fibreone").style.backgroundImage = "url('images/plates/phtalate.png')";
	document.getElementById("fibreone").style.height = "104px";
	document.getElementById("fibreone").style.width = "104px";
	document.getElementById("fibreone").style.left = "606px";
	document.getElementById("fibreone").style.top = "92px";

	document.getElementById("fibretwo").style.backgroundImage = "url('images/plates/dyes.png')";
	document.getElementById("fibretwo").style.height = "104px";
	document.getElementById("fibretwo").style.width = "146px";
	document.getElementById("fibretwo").style.left = "354px";
	document.getElementById("fibretwo").style.top = "-38px";

	document.getElementById("fibrethree").style.backgroundImage = "url('images/plates/metals.png')";
	document.getElementById("fibrethree").style.width = "134px";
	document.getElementById("fibrethree").style.height = "103px";
	document.getElementById("fibrethree").style.left = "297px";
	document.getElementById("fibrethree").style.top = "229px";

	document.getElementById("fibrefour").style.backgroundImage = "url('images/plates/pfc.png')";
	document.getElementById("fibrefour").style.height = "104px";
	document.getElementById("fibrefour").style.width = "104px";
	document.getElementById("fibrefour").style.left = "184px";
	document.getElementById("fibrefour").style.top = "92px";

	document.getElementById("fibrefive").style.backgroundImage = "url('images/plates/solvents.png')";
	document.getElementById("fibrefive").style.width = "143px";
	document.getElementById("fibrefive").style.height = "104px";
	document.getElementById("fibrefive").style.left = "487px";
	document.getElementById("fibrefive").style.top = "229px";


	document.getElementById("filmone").style.backgroundImage = "url('images/plates/phtalate.png')";
	document.getElementById("filmone").style.height = "104px";
	document.getElementById("filmone").style.width = "104px";
	document.getElementById("filmone").style.left = "604px";
	document.getElementById("filmone").style.top = "102px";

	document.getElementById("filmtwo").style.backgroundImage = "url('images/plates/ldpe.png')";
	document.getElementById("filmtwo").style.width = "143px";
	document.getElementById("filmtwo").style.height = "104px";
	document.getElementById("filmtwo").style.left = "373px";
	document.getElementById("filmtwo").style.top = "-38px";

	document.getElementById("filmthree").style.backgroundImage = "url('images/plates/hdpe.png')";
	document.getElementById("filmthree").style.width = "134px";
	document.getElementById("filmthree").style.height = "103px";
	document.getElementById("filmthree").style.left = "372px";
	document.getElementById("filmthree").style.top = "236px";

	document.getElementById("filmfour").style.backgroundImage = "url('images/plates/pvc.png')";
	document.getElementById("filmfour").style.height = "104px";
	document.getElementById("filmfour").style.width = "104px";
	document.getElementById("filmfour").style.left = "189px";
	document.getElementById("filmfour").style.top = "102px";


	document.getElementById("fragmentpetone").style.backgroundImage = "url('images/plates/pet1/pet1.png')";
	document.getElementById("fragmentpetone").style.height = "126px";
	document.getElementById("fragmentpetone").style.width = "126px";
	document.getElementById("fragmentpetone").style.left = "217px";
	document.getElementById("fragmentpetone").style.top = "85px";

	document.getElementById("fragmentpettwo").style.backgroundImage = "url('images/plates/pet1/pet2.png')";
	document.getElementById("fragmentpettwo").style.height = "126px";
	document.getElementById("fragmentpettwo").style.width = "126px";
	document.getElementById("fragmentpettwo").style.left = "548px";
	document.getElementById("fragmentpettwo").style.top = "85px";

	document.getElementById("fragmentpetthree").style.backgroundImage = "url('images/plates/pet1/pet3.png')";
	document.getElementById("fragmentpetthree").style.height = "126px";
	document.getElementById("fragmentpetthree").style.width = "126px";
	document.getElementById("fragmentpetthree").style.left = "378px";
	document.getElementById("fragmentpetthree").style.top = "227px";

	document.getElementById("fragmentpetfour").style.backgroundImage = "url('images/plates/pet1/pet4.png')";
	document.getElementById("fragmentpetfour").style.height = "126px";
	document.getElementById("fragmentpetfour").style.width = "126px";
	document.getElementById("fragmentpetfour").style.left = "378px";
	document.getElementById("fragmentpetfour").style.top = "-47px";

	document.getElementById("fragmentonedum").style.backgroundImage = "url('images/plates/pet.png')";
	document.getElementById("fragmentonedum").style.height = "129px";
	document.getElementById("fragmentonedum").style.width = "167px";
	document.getElementById("fragmentonedum").style.top = "90px";
	document.getElementById("fragmentonedum").style.left = "357px";

	document.getElementById("fragmenttwodum").style.backgroundImage = "url('images/plates/ldpe.png')";
	document.getElementById("fragmenttwodum").style.height = "125px";
	document.getElementById("fragmenttwodum").style.width = "173px";
	document.getElementById("fragmenttwodum").style.left = "369px";
	document.getElementById("fragmenttwodum").style.top = "110px";

	document.getElementById("fragmentldpeone").style.backgroundImage = "url('images/plates/ldpe1/ldpe.png')";
	document.getElementById("fragmentldpeone").style.height = "126px";
	document.getElementById("fragmentldpeone").style.width = "126px";
	document.getElementById("fragmentldpeone").style.left = "380px";
	document.getElementById("fragmentldpeone").style.top = "-17px";



	document.getElementById("fragmentthreedum").style.backgroundImage = "url('images/plates/pvc.png')";
	document.getElementById("fragmentthreedum").style.height = "136px";
	document.getElementById("fragmentthreedum").style.width = "136px";

	document.getElementById("fragmentpvcone").style.backgroundImage = "url('images/plates/pvc1/pvc1.png')";
	document.getElementById("fragmentpvcone").style.height = "126px";
	document.getElementById("fragmentpvcone").style.width = "126px";

	document.getElementById("fragmentpvctwo").style.backgroundImage = "url('images/plates/pvc1/pvc2.png')";
	document.getElementById("fragmentpvctwo").style.height = "126px";
	document.getElementById("fragmentpvctwo").style.width = "126px";

	document.getElementById("fragmentpvcthree").style.backgroundImage = "url('images/plates/pvc1/pvc3.png')";
	document.getElementById("fragmentpvcthree").style.height = "126px";
	document.getElementById("fragmentpvcthree").style.width = "126px";

	document.getElementById("fragmentpvcfour").style.backgroundImage = "url('images/plates/pvc1/pvc4.png')";
	document.getElementById("fragmentpvcfour").style.height = "126px";
	document.getElementById("fragmentpvcfour").style.width = "126px";

	document.getElementById("fragmentpvcfive").style.backgroundImage = "url('images/plates/pvc1/pvc5.png')";
	document.getElementById("fragmentpvcfive").style.height = "126px";
	document.getElementById("fragmentpvcfive").style.width = "126px";

	document.getElementById("fragmentpvcsix").style.backgroundImage = "url('images/plates/pvc1/pvc6.png')";
	document.getElementById("fragmentpvcsix").style.height = "126px";
	document.getElementById("fragmentpvcsix").style.width = "126px";

	document.getElementById("fragmentpvcseven").style.backgroundImage = "url('images/plates/pvc1/pvc7.png')";
	document.getElementById("fragmentpvcseven").style.height = "126px";
	document.getElementById("fragmentpvcseven").style.width = "126px";

	document.getElementById("fragmentpvceight").style.backgroundImage = "url('images/plates/pvc1/pvc8.png')";
	document.getElementById("fragmentpvceight").style.height = "126px";
	document.getElementById("fragmentpvceight").style.width = "126px";


	document.getElementById("fragmentfourdum").style.backgroundImage = "url('images/plates/hdpe.png')";
	document.getElementById("fragmentfourdum").style.height = "129px";
	document.getElementById("fragmentfourdum").style.width = "167px";

	document.getElementById("fragmenthdpeone").style.backgroundImage = "url('images/plates/hdpe1/hdpe1.png')";
	document.getElementById("fragmenthdpeone").style.height = "126px";
	document.getElementById("fragmenthdpeone").style.width = "126px";

	document.getElementById("fragmenthdpetwo").style.backgroundImage = "url('images/plates/hdpe1/hdpe2.png')";
	document.getElementById("fragmenthdpetwo").style.height = "126px";
	document.getElementById("fragmenthdpetwo").style.width = "126px";

	document.getElementById("fragmenthdpethree").style.backgroundImage = "url('images/plates/hdpe1/hdpe3.png')";
	document.getElementById("fragmenthdpethree").style.height = "126px";
	document.getElementById("fragmenthdpethree").style.width = "126px";

	document.getElementById("fragmenthdpefour").style.backgroundImage = "url('images/plates/hdpe1/hdpe4.png')";
	document.getElementById("fragmenthdpefour").style.height = "126px";
	document.getElementById("fragmenthdpefour").style.width = "126px";

	document.getElementById("fragmenthdpefive").style.backgroundImage = "url('images/plates/hdpe1/hdpe5.png')";
	document.getElementById("fragmenthdpefive").style.height = "126px";
	document.getElementById("fragmenthdpefive").style.width = "126px";

	document.getElementById("fragmenthdpesix").style.backgroundImage = "url('images/plates/hdpe1/hdpe6.png')";
	document.getElementById("fragmenthdpesix").style.height = "126px";
	document.getElementById("fragmenthdpesix").style.width = "126px";

	document.getElementById("fragmentfivedum").style.backgroundImage = "url('images/plates/pp.png')";
	document.getElementById("fragmentfivedum").style.height = "126px";
	document.getElementById("fragmentfivedum").style.width = "126px";

	document.getElementById("fragmentppone").style.backgroundImage = "url('images/plates/pp1/pp1.png')";
	document.getElementById("fragmentppone").style.height = "126px";
	document.getElementById("fragmentppone").style.width = "126px";

	document.getElementById("fragmentsixdum").style.backgroundImage = "url('images/plates/polystyreneplate.png')";
	document.getElementById("fragmentsixdum").style.height = "126px";
	document.getElementById("fragmentsixdum").style.width = "126px";






	document.getElementById("foamonedum").style.backgroundImage = "url('images/plates/polystyreneplate.png')";
	document.getElementById("foamonedum").style.height = "126px";
	document.getElementById("foamonedum").style.width = "126px";

	document.getElementById("foampolystyreneone").style.backgroundImage = "url('images/plates/polystyrene1/polystyrene1.png')";
	document.getElementById("foampolystyreneone").style.height = "126px";
	document.getElementById("foampolystyreneone").style.width = "126px";
	// document.getElementById("foampolystyreneone").style.left = "603px";


	document.getElementById("foamtwodum").style.backgroundImage = "url('images/plates/ldpehdpepan.png')";
	document.getElementById("foamtwodum").style.height = "129px";
	document.getElementById("foamtwodum").style.width = "167px";

	document.getElementById("foamhdpeldpeone").style.backgroundImage = "url('images/plates/hdpe1/hdpe1.png')";
	document.getElementById("foamhdpeldpeone").style.height = "126px";
	document.getElementById("foamhdpeldpeone").style.width = "126px";

	document.getElementById("foamhdpeldpetwo").style.backgroundImage = "url('images/plates/hdpe1/hdpe2.png')";
	document.getElementById("foamhdpeldpetwo").style.height = "126px";
	document.getElementById("foamhdpeldpetwo").style.width = "126px";

	document.getElementById("foamhdpeldpethree").style.backgroundImage = "url('images/plates/hdpe1/hdpe3.png')";
	document.getElementById("foamhdpeldpethree").style.height = "126px";
	document.getElementById("foamhdpeldpethree").style.width = "126px";

	document.getElementById("foamhdpeldpefour").style.backgroundImage = "url('images/plates/hdpe1/hdpe4.png')";
	document.getElementById("foamhdpeldpefour").style.height = "126px";
	document.getElementById("foamhdpeldpefour").style.width = "126px";

	document.getElementById("foamhdpeldpefive").style.backgroundImage = "url('images/plates/hdpe1/hdpe5.png')";
	document.getElementById("foamhdpeldpefive").style.height = "126px";
	document.getElementById("foamhdpeldpefive").style.width = "126px";

	document.getElementById("foamhdpeldpesix").style.backgroundImage = "url('images/plates/hdpe1/hdpe6.png')";
	document.getElementById("foamhdpeldpesix").style.height = "126px";
	document.getElementById("foamhdpeldpesix").style.width = "126px";

	document.getElementById("foamhdpeldpeseven").style.backgroundImage = "url('images/plates/ldpe1/ldpe.png')";
	document.getElementById("foamhdpeldpeseven").style.height = "126px";
	document.getElementById("foamhdpeldpeseven").style.width = "126px";





	document.getElementById("microbeadstwodum").style.backgroundImage = "url('images/plates/ldpehdpemirror.png')";
	document.getElementById("microbeadstwodum").style.height = "125px";
	document.getElementById("microbeadstwodum").style.width = "175px";
	document.getElementById("microbeadstwodum").style.left = "375px";
	document.getElementById("microbeadstwodum").style.top = "99px";

	document.getElementById("microbeadshdpeldpeone").style.backgroundImage = "url('images/plates/hdpe1/hdpe1.png')";
	document.getElementById("microbeadshdpeldpeone").style.height = "126px";
	document.getElementById("microbeadshdpeldpeone").style.width = "126px";

	document.getElementById("microbeadshdpeldpetwo").style.backgroundImage = "url('images/plates/hdpe1/hdpe2.png')";
	document.getElementById("microbeadshdpeldpetwo").style.height = "126px";
	document.getElementById("microbeadshdpeldpetwo").style.width = "126px";

	document.getElementById("microbeadshdpeldpethree").style.backgroundImage = "url('images/plates/hdpe1/hdpe3.png')";
	document.getElementById("microbeadshdpeldpethree").style.height = "126px";
	document.getElementById("microbeadshdpeldpethree").style.width = "126px";

	document.getElementById("microbeadshdpeldpefour").style.backgroundImage = "url('images/plates/hdpe1/hdpe4.png')";
	document.getElementById("microbeadshdpeldpefour").style.height = "126px";
	document.getElementById("microbeadshdpeldpefour").style.width = "126px";

	document.getElementById("microbeadshdpeldpefive").style.backgroundImage = "url('images/plates/hdpe1/hdpe5.png')";
	document.getElementById("microbeadshdpeldpefive").style.height = "126px";
	document.getElementById("microbeadshdpeldpefive").style.width = "126px";

	document.getElementById("microbeadshdpeldpesix").style.backgroundImage = "url('images/plates/hdpe1/hdpe6.png')";
	document.getElementById("microbeadshdpeldpesix").style.height = "126px";
	document.getElementById("microbeadshdpeldpesix").style.width = "126px";

	document.getElementById("microbeadshdpeldpeseven").style.backgroundImage = "url('images/plates/ldpe1/ldpe.png')";
	document.getElementById("microbeadshdpeldpeseven").style.height = "126px";
	document.getElementById("microbeadshdpeldpeseven").style.width = "126px";


	document.getElementById("microbeadsfivedum").style.backgroundImage = "url('images/plates/pp.png')";
	document.getElementById("microbeadsfivedum").style.height = "126px";
	document.getElementById("microbeadsfivedum").style.width = "126px";

	document.getElementById("microbeadsppone").style.backgroundImage = "url('images/plates/pp1/pp1.png')";
	document.getElementById("microbeadsppone").style.height = "126px";
	document.getElementById("microbeadsppone").style.width = "126px";


	document.getElementById("microbeadssixdum").style.backgroundImage = "url('images/plates/polystyreneplate.png')";
	document.getElementById("microbeadssixdum").style.height = "126px";
	document.getElementById("microbeadssixdum").style.width = "126px";

	document.getElementById("microbeadspolystyreneone").style.backgroundImage = "url('images/plates/polystyrene1/polystyrene1.png')";
	document.getElementById("microbeadspolystyreneone").style.height = "126px";
	document.getElementById("microbeadspolystyreneone").style.width = "126px";

	document.getElementById("microbeadsthreedum").style.backgroundImage = "url('images/plates/pet.png')";
	document.getElementById("microbeadsthreedum").style.width = "167px";
	document.getElementById("microbeadsthreedum").style.height = "129px";
	document.getElementById("microbeadsthreedum").style.top = "82px";
	document.getElementById("microbeadsthreedum").style.left = "357px";

	document.getElementById("microbeadspetone").style.backgroundImage = "url('images/plates/pet1/pet1.png')";
	document.getElementById("microbeadspetone").style.height = "126px";
	document.getElementById("microbeadspetone").style.width = "126px";
	// document.getElementById("microbeadspetone").style.left = "294px";
	// document.getElementById("microbeadspetone").style.top = "230px";

	document.getElementById("microbeadspettwo").style.backgroundImage = "url('images/plates/pet1/pet2.png')";
	document.getElementById("microbeadspettwo").style.height = "126px";
	document.getElementById("microbeadspettwo").style.width = "126px";
	// document.getElementById("microbeadspettwo").style.left = "909px";
	// document.getElementById("microbeadspettwo").style.top = "230px";

	document.getElementById("microbeadspetthree").style.backgroundImage = "url('images/plates/pet1/pet3.png')";
	document.getElementById("microbeadspetthree").style.height = "126px";
	document.getElementById("microbeadspetthree").style.width = "126px";
	// document.getElementById("microbeadspetthree").style.left = "603px";
	// document.getElementById("microbeadspetthree").style.top = "459px";

	document.getElementById("microbeadspetfour").style.backgroundImage = "url('images/plates/pet1/pet4.png')";
	document.getElementById("microbeadspetfour").style.height = "126px";
	document.getElementById("microbeadspetfour").style.width = "126px";
	// document.getElementById("microbeadspetfour").style.left = "603px";
	// document.getElementById("microbeadspetfour").style.top = "10px";


	document.getElementById("microbeadsfourdum").style.backgroundImage = "url('images/plates/phtalate.png')";
	document.getElementById("microbeadsfourdum").style.height = "126px";
	document.getElementById("microbeadsfourdum").style.width = "126px";

	document.getElementById("microbeadsphtalateone").style.backgroundImage = "url('images/plates/phtalate1/phtalate1.png')";
	document.getElementById("microbeadsphtalateone").style.height = "126px";
	document.getElementById("microbeadsphtalateone").style.width = "126px";

	document.getElementById("microbeadsphtalatetwo").style.backgroundImage = "url('images/plates/phtalate1/phtalate2.png')";
	document.getElementById("microbeadsphtalatetwo").style.height = "126px";
	document.getElementById("microbeadsphtalatetwo").style.width = "126px";

	document.getElementById("microbeadsphtalatethree").style.backgroundImage = "url('images/plates/phtalate1/phtalate3.png')";
	document.getElementById("microbeadsphtalatethree").style.height = "126px";
	document.getElementById("microbeadsphtalatethree").style.width = "126px";

	document.getElementById("filamentstwodum").style.backgroundImage = "url('images/plates/dyes.png')";
	document.getElementById("filamentstwodum").style.height = "125px";
	document.getElementById("filamentstwodum").style.width = "175px";

	document.getElementById("filamentsdyesone").style.backgroundImage = "url('images/plates/dyes1/dyes1.png')";
	document.getElementById("filamentsdyesone").style.height = "126px";
	document.getElementById("filamentsdyesone").style.width = "126px";

	document.getElementById("filamentsdyestwo").style.backgroundImage = "url('images/plates/dyes1/dyes2.png')";
	document.getElementById("filamentsdyestwo").style.height = "126px";
	document.getElementById("filamentsdyestwo").style.width = "126px";

	document.getElementById("filamentsdyesthree").style.backgroundImage = "url('images/plates/dyes1/dyes3.png')";
	document.getElementById("filamentsdyesthree").style.height = "126px";
	document.getElementById("filamentsdyesthree").style.width = "126px";


	document.getElementById("filamentspetone").style.backgroundImage = "url('images/plates/pet1/pet1.png')";
	document.getElementById("filamentspetone").style.height = "126px";
	document.getElementById("filamentspetone").style.width = "126px";

	document.getElementById("filamentspettwo").style.backgroundImage = "url('images/plates/pet1/pet2.png')";
	document.getElementById("filamentspettwo").style.height = "126px";
	document.getElementById("filamentspettwo").style.width = "126px";

	document.getElementById("filamentspetthree").style.backgroundImage = "url('images/plates/pet1/pet3.png')";
	document.getElementById("filamentspetthree").style.height = "126px";
	document.getElementById("filamentspetthree").style.width = "126px";

	document.getElementById("filamentspetfour").style.backgroundImage = "url('images/plates/pet1/pet4.png')";
	document.getElementById("filamentspetfour").style.height = "126px";
	document.getElementById("filamentspetfour").style.width = "126px";

	document.getElementById("filamentsonedum").style.backgroundImage = "url('images/plates/pet.png')";
	document.getElementById("filamentsonedum").style.width = "167px";
	document.getElementById("filamentsonedum").style.height = "129px";


	document.getElementById("filamentsthreedum").style.backgroundImage = "url('images/plates/pp.png')";
	document.getElementById("filamentsthreedum").style.height = "126px";
	document.getElementById("filamentsthreedum").style.width = "126px";

	document.getElementById("filamentsppone").style.backgroundImage = "url('images/plates/pp1/pp1.png')";
	document.getElementById("filamentsppone").style.height = "126px";
	document.getElementById("filamentsppone").style.width = "126px";


	document.getElementById("fibretwodum").style.backgroundImage = "url('images/plates/dyes.png')";
	document.getElementById("fibretwodum").style.height = "125px";
	document.getElementById("fibretwodum").style.width = "175px";

	document.getElementById("fibredyesone").style.backgroundImage = "url('images/plates/dyes1/dyes1.png')";
	document.getElementById("fibredyesone").style.height = "126px";
	document.getElementById("fibredyesone").style.width = "126px";

	document.getElementById("fibredyestwo").style.backgroundImage = "url('images/plates/dyes1/dyes2.png')";
	document.getElementById("fibredyestwo").style.height = "126px";
	document.getElementById("fibredyestwo").style.width = "126px";

	document.getElementById("fibredyesthree").style.backgroundImage = "url('images/plates/dyes1/dyes3.png')";
	document.getElementById("fibredyesthree").style.height = "126px";
	document.getElementById("fibredyesthree").style.width = "126px";



	document.getElementById("fibrepfcone").style.backgroundImage = "url('images/plates/pfc1/pfc1.png')";
	document.getElementById("fibrepfcone").style.height = "126px";
	document.getElementById("fibrepfcone").style.width = "126px";

	document.getElementById("fibrepfctwo").style.backgroundImage = "url('images/plates/pfc1/pfc2.png')";
	document.getElementById("fibrepfctwo").style.height = "126px";
	document.getElementById("fibrepfctwo").style.width = "126px";

	document.getElementById("fibrepfcthree").style.backgroundImage = "url('images/plates/pfc1/pfc3.png')";
	document.getElementById("fibrepfcthree").style.height = "126px";
	document.getElementById("fibrepfcthree").style.width = "126px";

	document.getElementById("fibrepfcfour").style.backgroundImage = "url('images/plates/pfc1/pfc4.png')";
	document.getElementById("fibrepfcfour").style.height = "126px";
	document.getElementById("fibrepfcfour").style.width = "126px";

	document.getElementById("fibrefourdum").style.backgroundImage = "url('images/plates/pfc.png')";
	document.getElementById("fibrefourdum").style.height = "126px";
	document.getElementById("fibrefourdum").style.width = "126px";


	document.getElementById("fibreonedum").style.backgroundImage = "url('images/plates/phtalate.png')";
	document.getElementById("fibreonedum").style.height = "126px";
	document.getElementById("fibreonedum").style.width = "126px";

	document.getElementById("fibrephtalateone").style.backgroundImage = "url('images/plates/phtalate1/phtalate1.png')";
	document.getElementById("fibrephtalateone").style.height = "126px";
	document.getElementById("fibrephtalateone").style.width = "126px";

	document.getElementById("fibrephtalatetwo").style.backgroundImage = "url('images/plates/phtalate1/phtalate2.png')";
	document.getElementById("fibrephtalatetwo").style.height = "126px";
	document.getElementById("fibrephtalatetwo").style.width = "126px";

	document.getElementById("fibrephtalatethree").style.backgroundImage = "url('images/plates/phtalate1/phtalate3.png')";
	document.getElementById("fibrephtalatethree").style.height = "126px";
	document.getElementById("fibrephtalatethree").style.width = "126px";


	document.getElementById("fibrethreedum").style.backgroundImage = "url('images/plates/metals.png')";
	document.getElementById("fibrethreedum").style.width = "167px";
	document.getElementById("fibrethreedum").style.height = "129px";

	document.getElementById("fibremetalsone").style.backgroundImage = "url('images/plates/metals1/metals1.png')";
	document.getElementById("fibremetalsone").style.height = "126px";
	document.getElementById("fibremetalsone").style.width = "126px";

	document.getElementById("fibremetalstwo").style.backgroundImage = "url('images/plates/metals1/metals2.png')";
	document.getElementById("fibremetalstwo").style.height = "126px";
	document.getElementById("fibremetalstwo").style.width = "126px";

	document.getElementById("fibremetalsthree").style.backgroundImage = "url('images/plates/metals1/metals3.png')";
	document.getElementById("fibremetalsthree").style.height = "126px";
	document.getElementById("fibremetalsthree").style.width = "126px";


	document.getElementById("fibrefivedum").style.backgroundImage = "url('images/plates/solvents.png')";
	document.getElementById("fibrefivedum").style.height = "127px";
	document.getElementById("fibrefivedum").style.width = "175px";

	document.getElementById("fibresolventone").style.backgroundImage = "url('images/plates/solvent1/solvent1.png')";
	document.getElementById("fibresolventone").style.height = "126px";
	document.getElementById("fibresolventone").style.width = "126px";

	document.getElementById("fibresolventtwo").style.backgroundImage = "url('images/plates/solvent1/solvent2.png')";
	document.getElementById("fibresolventtwo").style.height = "126px";
	document.getElementById("fibresolventtwo").style.width = "126px";


	document.getElementById("filmtwodum").style.backgroundImage = "url('images/plates/ldpe.png')";
	document.getElementById("filmtwodum").style.height = "125px";
	document.getElementById("filmtwodum").style.width = "173px";

	document.getElementById("filmldpeone").style.backgroundImage = "url('images/plates/ldpe1/ldpe.png')";
	document.getElementById("filmldpeone").style.height = "126px";
	document.getElementById("filmldpeone").style.width = "126px";



	document.getElementById("filmonedum").style.backgroundImage = "url('images/plates/phtalate.png')";
	document.getElementById("filmonedum").style.height = "126px";
	document.getElementById("filmonedum").style.width = "126px";

	document.getElementById("filmphtalateone").style.backgroundImage = "url('images/plates/phtalate1/phtalate1.png')";
	document.getElementById("filmphtalateone").style.height = "126px";
	document.getElementById("filmphtalateone").style.width = "126px";

	document.getElementById("filmphtalatetwo").style.backgroundImage = "url('images/plates/phtalate1/phtalate2.png')";
	document.getElementById("filmphtalatetwo").style.height = "126px";
	document.getElementById("filmphtalatetwo").style.width = "126px";

	document.getElementById("filmphtalatethree").style.backgroundImage = "url('images/plates/phtalate1/phtalate3.png')";
	document.getElementById("filmphtalatethree").style.height = "126px";
	document.getElementById("filmphtalatethree").style.width = "126px";




	document.getElementById("filmfourdum").style.backgroundImage = "url('images/plates/pvc.png')";
	document.getElementById("filmfourdum").style.height = "136px";
	document.getElementById("filmfourdum").style.width = "136px";

	document.getElementById("filmpvcone").style.backgroundImage = "url('images/plates/pvc1/pvc1.png')";
	document.getElementById("filmpvcone").style.height = "126px";
	document.getElementById("filmpvcone").style.width = "126px";

	document.getElementById("filmpvctwo").style.backgroundImage = "url('images/plates/pvc1/pvc2.png')";
	document.getElementById("filmpvctwo").style.height = "126px";
	document.getElementById("filmpvctwo").style.width = "126px";

	document.getElementById("filmpvcthree").style.backgroundImage = "url('images/plates/pvc1/pvc3.png')";
	document.getElementById("filmpvcthree").style.height = "126px";
	document.getElementById("filmpvcthree").style.width = "126px";

	document.getElementById("filmpvcfour").style.backgroundImage = "url('images/plates/pvc1/pvc4.png')";
	document.getElementById("filmpvcfour").style.height = "126px";
	document.getElementById("filmpvcfour").style.width = "126px";

	document.getElementById("filmpvcfive").style.backgroundImage = "url('images/plates/pvc1/pvc5.png')";
	document.getElementById("filmpvcfive").style.height = "126px";
	document.getElementById("filmpvcfive").style.width = "126px";

	document.getElementById("filmpvcsix").style.backgroundImage = "url('images/plates/pvc1/pvc6.png')";
	document.getElementById("filmpvcsix").style.height = "126px";
	document.getElementById("filmpvcsix").style.width = "126px";

	document.getElementById("filmpvcseven").style.backgroundImage = "url('images/plates/pvc1/pvc7.png')";
	document.getElementById("filmpvcseven").style.height = "126px";
	document.getElementById("filmpvcseven").style.width = "126px";

	document.getElementById("filmpvceight").style.backgroundImage = "url('images/plates/pvc1/pvc8.png')";
	document.getElementById("filmpvceight").style.height = "126px";
	document.getElementById("filmpvceight").style.width = "126px";



	document.getElementById("filmthreedum").style.backgroundImage = "url('images/plates/hdpe.png')";
	document.getElementById("filmthreedum").style.height = "129px";
	document.getElementById("filmthreedum").style.width = "167px";
	document.getElementById("filmthreedum").style.left = "354px";

	document.getElementById("filmhdpeone").style.backgroundImage = "url('images/plates/hdpe1/hdpe1.png')";
	document.getElementById("filmhdpeone").style.height = "126px";
	document.getElementById("filmhdpeone").style.width = "126px";

	document.getElementById("filmhdpetwo").style.backgroundImage = "url('images/plates/hdpe1/hdpe2.png')";
	document.getElementById("filmhdpetwo").style.height = "126px";
	document.getElementById("filmhdpetwo").style.width = "126px";

	document.getElementById("filmhdpethree").style.backgroundImage = "url('images/plates/hdpe1/hdpe3.png')";
	document.getElementById("filmhdpethree").style.height = "126px";
	document.getElementById("filmhdpethree").style.width = "126px";

	document.getElementById("filmhdpefour").style.backgroundImage = "url('images/plates/hdpe1/hdpe4.png')";
	document.getElementById("filmhdpefour").style.height = "126px";
	document.getElementById("filmhdpefour").style.width = "126px";

	document.getElementById("filmhdpefive").style.backgroundImage = "url('images/plates/hdpe1/hdpe5.png')";
	document.getElementById("filmhdpefive").style.height = "126px";
	document.getElementById("filmhdpefive").style.width = "126px";

	document.getElementById("filmhdpesix").style.backgroundImage = "url('images/plates/hdpe1/hdpe6.png')";
	document.getElementById("filmhdpesix").style.height = "126px";
	document.getElementById("filmhdpesix").style.width = "126px";
}

function finediningsmall(){
	document.getElementById("bodyeffects").style.backgroundImage = "url('images/plates/finedining.png')";

	document.getElementById("picnicbtnsmall").style.backgroundColor = "white";
	document.getElementById("picnicbtnsmall").style.border = "#13448d solid 3px";
	document.getElementById("picnicbtnsmall").style.color = "#13448d";
	document.getElementById("diningroombtnsmall").style.backgroundColor = "white";
	document.getElementById("diningroombtnsmall").style.border = "#13448d solid 3px";
	document.getElementById("diningroombtnsmall").style.color = "#13448d";
	document.getElementById("finediningbtnsmall").style.backgroundColor = "#13448d";
	document.getElementById("finediningbtnsmall").style.border = "#13448d solid 3px";
	document.getElementById("finediningbtnsmall").style.color = "white";


	document.getElementById("plate1").style.backgroundImage = "url('images/plates/plate2.png')";
	document.getElementById("plate1").style.backgroundSize = "contain";
	document.getElementById("plate1").style.width = "409px";
	document.getElementById("plate1").style.height = "245px";
	document.getElementById("plate1").style.position = "fixed";
	document.getElementById("plate1").style.left = "243px";
	document.getElementById("plate1").style.top = "90px";

	document.getElementById("platefragment").style.backgroundImage = "url('images/plates/platefragment2.png')";
	document.getElementById("platefoam").style.backgroundImage = "url('images/plates/platefoam2.png')";
	document.getElementById("platemicrobeads").style.backgroundImage = "url('images/plates/platemicrobeads2.png')";
	document.getElementById("platefilaments").style.backgroundImage = "url('images/plates/platefilaments2.png')";
	document.getElementById("platefibre").style.backgroundImage = "url('images/plates/platefibre2.png')";
	document.getElementById("platefilm").style.backgroundImage = "url('images/plates/platefilm2.png')";

	document.getElementById("platefragment").style.width = "214px";
	document.getElementById("platefoam").style.width = "214px";
	document.getElementById("platemicrobeads").style.width = "214px";
	document.getElementById("platefilaments").style.width = "214px";
	document.getElementById("platefibre").style.width = "214px";
	document.getElementById("platefilm").style.width = "214px";

	document.getElementById("platefragment").style.height = "128px";
	document.getElementById("platefoam").style.height = "128px";
	document.getElementById("platemicrobeads").style.height = "128px";
	document.getElementById("platefilaments").style.height = "128px";
	document.getElementById("platefibre").style.height = "128px";
	document.getElementById("platefilm").style.height = "128px";

	document.getElementById("fragmentone").style.backgroundImage = "url('images/plates/pet2.png')";
	document.getElementById("fragmentone").style.height = "104px";
	document.getElementById("fragmentone").style.width = "104px";
	document.getElementById("fragmentone").style.left = "578px";
	document.getElementById("fragmentone").style.top = "42px";

	document.getElementById("fragmenttwo").style.backgroundImage = "url('images/plates/ldpe2.png')";
	document.getElementById("fragmenttwo").style.height = "104px";
	document.getElementById("fragmenttwo").style.width = "104px";
	document.getElementById("fragmenttwo").style.left = "381px";
	document.getElementById("fragmenttwo").style.top = "-42px";

	document.getElementById("fragmentthree").style.backgroundImage = "url('images/plates/hdpe2.png')";
	document.getElementById("fragmentthree").style.height = "104px";
	document.getElementById("fragmentthree").style.width = "104px";
	document.getElementById("fragmentthree").style.left = "203px";
	document.getElementById("fragmentthree").style.top = "173px";

	document.getElementById("fragmentfour").style.backgroundImage = "url('images/plates/pvc2.png')";
	document.getElementById("fragmentfour").style.height = "104px";
	document.getElementById("fragmentfour").style.width = "104px";
	document.getElementById("fragmentfour").style.left = "203px";
	document.getElementById("fragmentfour").style.top = "42px";

	document.getElementById("fragmentfive").style.backgroundImage = "url('images/plates/pp2.png')";
	document.getElementById("fragmentfive").style.height = "104px";
	document.getElementById("fragmentfive").style.width = "104px";
	document.getElementById("fragmentfive").style.left = "578px";
	document.getElementById("fragmentfive").style.top = "173px";

	document.getElementById("fragmentsix").style.backgroundImage = "url('images/plates/polystyrene2.png')";
	document.getElementById("fragmentsix").style.height = "104px";
	document.getElementById("fragmentsix").style.width = "104px";
	document.getElementById("fragmentsix").style.left = "381px";
	document.getElementById("fragmentsix").style.top = "232px";

	document.getElementById("foamone").style.backgroundImage = "url('images/plates/polystyrene2.png')";
	document.getElementById("foamone").style.height = "104px";
	document.getElementById("foamone").style.width = "104px";
	document.getElementById("foamone").style.left = "187px";
	document.getElementById("foamone").style.top = "92px";


	document.getElementById("foamtwo").style.backgroundImage = "url('images/plates/ldpehdpe2.png')";
	document.getElementById("foamtwo").style.height = "104px";
	document.getElementById("foamtwo").style.width = "104px";
	document.getElementById("foamtwo").style.left = "593px";
	document.getElementById("foamtwo").style.top = "92px";

	document.getElementById("microbeadsone").style.backgroundImage = "url('images/plates/nylon2.png')";
	document.getElementById("microbeadsone").style.height = "104px";
	document.getElementById("microbeadsone").style.width = "104px";
	document.getElementById("microbeadsone").style.left = "562px";
	document.getElementById("microbeadsone").style.top = "45px";

	document.getElementById("microbeadstwo").style.backgroundImage = "url('images/plates/ldpehdpe2.png')";
	document.getElementById("microbeadstwo").style.height = "104px";
	document.getElementById("microbeadstwo").style.width = "104px";
	document.getElementById("microbeadstwo").style.left = "381px";
	document.getElementById("microbeadstwo").style.top = "-39px";

	document.getElementById("microbeadsthree").style.backgroundImage = "url('images/plates/pet2.png')";
	document.getElementById("microbeadsthree").style.height = "104px";
	document.getElementById("microbeadsthree").style.width = "104px";
	document.getElementById("microbeadsthree").style.left = "213px";
	document.getElementById("microbeadsthree").style.top = "180px";

	document.getElementById("microbeadsfour").style.backgroundImage = "url('images/plates/phtalate2.png')";
	document.getElementById("microbeadsfour").style.height = "104px";
	document.getElementById("microbeadsfour").style.width = "104px";
	document.getElementById("microbeadsfour").style.left = "213px";
	document.getElementById("microbeadsfour").style.top = "45px";

	document.getElementById("microbeadsfive").style.backgroundImage = "url('images/plates/pp2.png')";
	document.getElementById("microbeadsfive").style.height = "104px";
	document.getElementById("microbeadsfive").style.width = "104px";
	document.getElementById("microbeadsfive").style.left = "562px";
	document.getElementById("microbeadsfive").style.top = "180px";

	document.getElementById("microbeadssix").style.backgroundImage = "url('images/plates/polystyrene2.png')";
	document.getElementById("microbeadssix").style.height = "104px";
	document.getElementById("microbeadssix").style.width = "104px";
	document.getElementById("microbeadssix").style.left = "381px";
	document.getElementById("microbeadssix").style.top = "228px";


	document.getElementById("filamentsone").style.backgroundImage = "url('images/plates/pp2.png')";
	document.getElementById("filamentsone").style.height = "104px";
	document.getElementById("filamentsone").style.width = "104px";
	document.getElementById("filamentsone").style.left = "219px";
	document.getElementById("filamentsone").style.top = "183px";

	document.getElementById("filamentstwo").style.backgroundImage = "url('images/plates/dyes2.png')";
	document.getElementById("filamentstwo").style.height = "104px";
	document.getElementById("filamentstwo").style.width = "104px";
	document.getElementById("filamentstwo").style.left = "384px";
	document.getElementById("filamentstwo").style.top = "-41px";

	document.getElementById("filamentsthree").style.backgroundImage = "url('images/plates/pet2.png')";
	document.getElementById("filamentsthree").style.height = "104px";
	document.getElementById("filamentsthree").style.width = "104px";
	document.getElementById("filamentsthree").style.left = "554px";
	document.getElementById("filamentsthree").style.top = "183px";


	document.getElementById("fibreone").style.backgroundImage = "url('images/plates/phtalate2.png')";
	document.getElementById("fibreone").style.height = "104px";
	document.getElementById("fibreone").style.width = "104px";
	document.getElementById("fibreone").style.left = "577px";
	document.getElementById("fibreone").style.top = "92px";

	document.getElementById("fibretwo").style.backgroundImage = "url('images/plates/dyes2.png')";
	document.getElementById("fibretwo").style.height = "104px";
	document.getElementById("fibretwo").style.width = "104px";
	document.getElementById("fibretwo").style.left = "384px";
	document.getElementById("fibretwo").style.top = "-38px";

	document.getElementById("fibrethree").style.backgroundImage = "url('images/plates/metals2.png')";
	document.getElementById("fibrethree").style.height = "104px";
	document.getElementById("fibrethree").style.width = "104px";
	document.getElementById("fibrethree").style.left = "312px";
	document.getElementById("fibrethree").style.top = "221px";

	document.getElementById("fibrefour").style.backgroundImage = "url('images/plates/pfc2.png')";
	document.getElementById("fibrefour").style.height = "104px";
	document.getElementById("fibrefour").style.width = "104px";
	document.getElementById("fibrefour").style.left = "201px";
	document.getElementById("fibrefour").style.top = "92px";

	document.getElementById("fibrefive").style.backgroundImage = "url('images/plates/solvents2.png')";
	document.getElementById("fibrefive").style.height = "104px";
	document.getElementById("fibrefive").style.width = "104px";
	document.getElementById("fibrefive").style.left = "462px";
	document.getElementById("fibrefive").style.top = "221px";


	document.getElementById("filmone").style.backgroundImage = "url('images/plates/phtalate2.png')";
	document.getElementById("filmone").style.height = "104px";
	document.getElementById("filmone").style.width = "104px";
	document.getElementById("filmone").style.left = "579px";
	document.getElementById("filmone").style.top = "97px";

	document.getElementById("filmtwo").style.backgroundImage = "url('images/plates/ldpe2.png')";
	document.getElementById("filmtwo").style.height = "104px";
	document.getElementById("filmtwo").style.width = "104px";
	document.getElementById("filmtwo").style.left = "386px";
	document.getElementById("filmtwo").style.top = "-37px";

	document.getElementById("filmthree").style.backgroundImage = "url('images/plates/hdpe2.png')";
	document.getElementById("filmthree").style.height = "104px";
	document.getElementById("filmthree").style.width = "104px";
	document.getElementById("filmthree").style.left = "386px";
	document.getElementById("filmthree").style.top = "223px";

	document.getElementById("filmfour").style.backgroundImage = "url('images/plates/pvc2.png')";
	document.getElementById("filmfour").style.height = "104px";
	document.getElementById("filmfour").style.width = "104px";
	document.getElementById("filmfour").style.left = "204px";
	document.getElementById("filmfour").style.top = "97px";


	document.getElementById("fragmentpetone").style.backgroundImage = "url('images/plates/pet2/pet1.png')";
	document.getElementById("fragmentpetone").style.height = "126px";
	document.getElementById("fragmentpetone").style.width = "126px";
	document.getElementById("fragmentpetone").style.left = "217px";
	document.getElementById("fragmentpetone").style.top = "85px";

	document.getElementById("fragmentpettwo").style.backgroundImage = "url('images/plates/pet2/pet2.png')";
	document.getElementById("fragmentpettwo").style.height = "126px";
	document.getElementById("fragmentpettwo").style.width = "126px";
	document.getElementById("fragmentpettwo").style.left = "548px";
	document.getElementById("fragmentpettwo").style.top = "85px";

	document.getElementById("fragmentpetthree").style.backgroundImage = "url('images/plates/pet2/pet3.png')";
	document.getElementById("fragmentpetthree").style.height = "126px";
	document.getElementById("fragmentpetthree").style.width = "126px";
	document.getElementById("fragmentpetthree").style.left = "378px";
	document.getElementById("fragmentpetthree").style.top = "227px";

	document.getElementById("fragmentpetfour").style.backgroundImage = "url('images/plates/pet2/pet4.png')";
	document.getElementById("fragmentpetfour").style.height = "126px";
	document.getElementById("fragmentpetfour").style.width = "126px";
	document.getElementById("fragmentpetfour").style.left = "378px";
	document.getElementById("fragmentpetfour").style.top = "-47px";

	document.getElementById("fragmentonedum").style.backgroundImage = "url('images/plates/pet2.png')";
	document.getElementById("fragmentonedum").style.height = "126px";
	document.getElementById("fragmentonedum").style.width = "126px";
	document.getElementById("fragmentonedum").style.top = "91px";
	document.getElementById("fragmentonedum").style.left = "377px";

	document.getElementById("fragmenttwodum").style.backgroundImage = "url('images/plates/ldpe2.png')";
	document.getElementById("fragmenttwodum").style.height = "126px";
	document.getElementById("fragmenttwodum").style.width = "126px";
	document.getElementById("fragmenttwodum").style.left = "369px";
	document.getElementById("fragmenttwodum").style.top = "110px";

	document.getElementById("fragmentldpeone").style.backgroundImage = "url('images/plates/ldpe2/ldpe.png')";
	document.getElementById("fragmentldpeone").style.height = "126px";
	document.getElementById("fragmentldpeone").style.width = "126px";
	document.getElementById("fragmentldpeone").style.left = "380px";
	document.getElementById("fragmentldpeone").style.top = "-17px";	



	document.getElementById("fragmentthreedum").style.backgroundImage = "url('images/plates/pvc2.png')";
	document.getElementById("fragmentthreedum").style.height = "126px";
	document.getElementById("fragmentthreedum").style.width = "126px";

	document.getElementById("fragmentpvcone").style.backgroundImage = "url('images/plates/pvc2/pvc1.png')";
	document.getElementById("fragmentpvcone").style.height = "126px";
	document.getElementById("fragmentpvcone").style.width = "126px";

	document.getElementById("fragmentpvctwo").style.backgroundImage = "url('images/plates/pvc2/pvc2.png')";
	document.getElementById("fragmentpvctwo").style.height = "126px";
	document.getElementById("fragmentpvctwo").style.width = "126px";

	document.getElementById("fragmentpvcthree").style.backgroundImage = "url('images/plates/pvc2/pvc3.png')";
	document.getElementById("fragmentpvcthree").style.height = "126px";
	document.getElementById("fragmentpvcthree").style.width = "126px";

	document.getElementById("fragmentpvcfour").style.backgroundImage = "url('images/plates/pvc2/pvc4.png')";
	document.getElementById("fragmentpvcfour").style.height = "126px";
	document.getElementById("fragmentpvcfour").style.width = "126px";

	document.getElementById("fragmentpvcfive").style.backgroundImage = "url('images/plates/pvc2/pvc5.png')";
	document.getElementById("fragmentpvcfive").style.height = "126px";
	document.getElementById("fragmentpvcfive").style.width = "126px";

	document.getElementById("fragmentpvcsix").style.backgroundImage = "url('images/plates/pvc2/pvc6.png')";
	document.getElementById("fragmentpvcsix").style.height = "126px";
	document.getElementById("fragmentpvcsix").style.width = "126px";

	document.getElementById("fragmentpvcseven").style.backgroundImage = "url('images/plates/pvc2/pvc7.png')";
	document.getElementById("fragmentpvcseven").style.height = "126px";
	document.getElementById("fragmentpvcseven").style.width = "126px";

	document.getElementById("fragmentpvceight").style.backgroundImage = "url('images/plates/pvc2/pvc8.png')";
	document.getElementById("fragmentpvceight").style.height = "126px";
	document.getElementById("fragmentpvceight").style.width = "126px";


	document.getElementById("fragmentfourdum").style.backgroundImage = "url('images/plates/hdpe2.png')";
	document.getElementById("fragmentfourdum").style.height = "126px";
	document.getElementById("fragmentfourdum").style.width = "126px";
	document.getElementById("fragmentfourdum").style.left = "377px";

	document.getElementById("fragmenthdpeone").style.backgroundImage = "url('images/plates/hdpe2/hdpe1.png')";
	document.getElementById("fragmenthdpeone").style.height = "126px";
	document.getElementById("fragmenthdpeone").style.width = "126px";

	document.getElementById("fragmenthdpetwo").style.backgroundImage = "url('images/plates/hdpe2/hdpe2.png')";
	document.getElementById("fragmenthdpetwo").style.height = "126px";
	document.getElementById("fragmenthdpetwo").style.width = "126px";

	document.getElementById("fragmenthdpethree").style.backgroundImage = "url('images/plates/hdpe2/hdpe3.png')";
	document.getElementById("fragmenthdpethree").style.height = "126px";
	document.getElementById("fragmenthdpethree").style.width = "126px";

	document.getElementById("fragmenthdpefour").style.backgroundImage = "url('images/plates/hdpe2/hdpe4.png')";
	document.getElementById("fragmenthdpefour").style.height = "126px";
	document.getElementById("fragmenthdpefour").style.width = "126px";

	document.getElementById("fragmenthdpefive").style.backgroundImage = "url('images/plates/hdpe2/hdpe5.png')";
	document.getElementById("fragmenthdpefive").style.height = "126px";
	document.getElementById("fragmenthdpefive").style.width = "126px";

	document.getElementById("fragmenthdpesix").style.backgroundImage = "url('images/plates/hdpe2/hdpe6.png')";
	document.getElementById("fragmenthdpesix").style.height = "126px";
	document.getElementById("fragmenthdpesix").style.width = "126px";

	document.getElementById("fragmentfivedum").style.backgroundImage = "url('images/plates/pp2.png')";
	document.getElementById("fragmentfivedum").style.height = "126px";
	document.getElementById("fragmentfivedum").style.width = "126px";

	document.getElementById("fragmentppone").style.backgroundImage = "url('images/plates/pp2/pp.png')";
	document.getElementById("fragmentppone").style.height = "126px";
	document.getElementById("fragmentppone").style.width = "126px";

	document.getElementById("fragmentsixdum").style.backgroundImage = "url('images/plates/polystyrene2.png')";
	document.getElementById("fragmentsixdum").style.height = "126px";
	document.getElementById("fragmentsixdum").style.width = "126px";

	document.getElementById("fragmentpolystyreneone").style.backgroundImage = "url('images/plates/polystyrene2/polystyrene.png')";
	document.getElementById("fragmentpolystyreneone").style.height = "126px";
	document.getElementById("fragmentpolystyreneone").style.width = "126px";


	document.getElementById("foamonedum").style.backgroundImage = "url('images/plates/polystyrene2.png')";
	document.getElementById("foamonedum").style.height = "126px";
	document.getElementById("foamonedum").style.width = "126px";

	document.getElementById("foampolystyreneone").style.backgroundImage = "url('images/plates/polystyrene2/polystyrene.png')";
	document.getElementById("foampolystyreneone").style.height = "126px";
	document.getElementById("foampolystyreneone").style.width = "126px";


	document.getElementById("foamtwodum").style.backgroundImage = "url('images/plates/ldpehdpe2.png')";
	document.getElementById("foamtwodum").style.height = "126px";
	document.getElementById("foamtwodum").style.width = "126px";
	document.getElementById("foamtwodum").style.left = "377px";

	document.getElementById("foamhdpeldpeone").style.backgroundImage = "url('images/plates/hdpe2/hdpe1.png')";
	document.getElementById("foamhdpeldpeone").style.height = "126px";
	document.getElementById("foamhdpeldpeone").style.width = "126px";

	document.getElementById("foamhdpeldpetwo").style.backgroundImage = "url('images/plates/hdpe2/hdpe2.png')";
	document.getElementById("foamhdpeldpetwo").style.height = "126px";
	document.getElementById("foamhdpeldpetwo").style.width = "126px";

	document.getElementById("foamhdpeldpethree").style.backgroundImage = "url('images/plates/hdpe2/hdpe3.png')";
	document.getElementById("foamhdpeldpethree").style.height = "126px";
	document.getElementById("foamhdpeldpethree").style.width = "126px";

	document.getElementById("foamhdpeldpefour").style.backgroundImage = "url('images/plates/hdpe2/hdpe4.png')";
	document.getElementById("foamhdpeldpefour").style.height = "126px";
	document.getElementById("foamhdpeldpefour").style.width = "126px";

	document.getElementById("foamhdpeldpefive").style.backgroundImage = "url('images/plates/hdpe2/hdpe5.png')";
	document.getElementById("foamhdpeldpefive").style.height = "126px";
	document.getElementById("foamhdpeldpefive").style.width = "126px";

	document.getElementById("foamhdpeldpesix").style.backgroundImage = "url('images/plates/hdpe2/hdpe6.png')";
	document.getElementById("foamhdpeldpesix").style.height = "126px";
	document.getElementById("foamhdpeldpesix").style.width = "126px";

	document.getElementById("foamhdpeldpeseven").style.backgroundImage = "url('images/plates/ldpe2/ldpe.png')";
	document.getElementById("foamhdpeldpeseven").style.height = "126px";
	document.getElementById("foamhdpeldpeseven").style.width = "126px";


	document.getElementById("microbeadstwodum").style.backgroundImage = "url('images/plates/ldpehdpe2.png')";
	document.getElementById("microbeadstwodum").style.height = "126px";
	document.getElementById("microbeadstwodum").style.width = "126px";
	document.getElementById("microbeadstwodum").style.left = "378px";

	document.getElementById("microbeadshdpeldpeone").style.backgroundImage = "url('images/plates/hdpe2/hdpe1.png')";
	document.getElementById("microbeadshdpeldpeone").style.height = "126px";
	document.getElementById("microbeadshdpeldpeone").style.width = "126px";

	document.getElementById("microbeadshdpeldpetwo").style.backgroundImage = "url('images/plates/hdpe2/hdpe2.png')";
	document.getElementById("microbeadshdpeldpetwo").style.height = "126px";
	document.getElementById("microbeadshdpeldpetwo").style.width = "126px";

	document.getElementById("microbeadshdpeldpethree").style.backgroundImage = "url('images/plates/hdpe2/hdpe3.png')";
	document.getElementById("microbeadshdpeldpethree").style.height = "126px";
	document.getElementById("microbeadshdpeldpethree").style.width = "126px";

	document.getElementById("microbeadshdpeldpefour").style.backgroundImage = "url('images/plates/hdpe2/hdpe4.png')";
	document.getElementById("microbeadshdpeldpefour").style.height = "126px";
	document.getElementById("microbeadshdpeldpefour").style.width = "126px";

	document.getElementById("microbeadshdpeldpefive").style.backgroundImage = "url('images/plates/hdpe2/hdpe5.png')";
	document.getElementById("microbeadshdpeldpefive").style.height = "126px";
	document.getElementById("microbeadshdpeldpefive").style.width = "126px";

	document.getElementById("microbeadshdpeldpesix").style.backgroundImage = "url('images/plates/hdpe2/hdpe6.png')";
	document.getElementById("microbeadshdpeldpesix").style.height = "126px";
	document.getElementById("microbeadshdpeldpesix").style.width = "126px";

	document.getElementById("microbeadshdpeldpeseven").style.backgroundImage = "url('images/plates/ldpe2/ldpe.png')";
	document.getElementById("microbeadshdpeldpeseven").style.height = "126px";
	document.getElementById("microbeadshdpeldpeseven").style.width = "126px";


	document.getElementById("microbeadsfivedum").style.backgroundImage = "url('images/plates/pp2.png')";
	document.getElementById("microbeadsfivedum").style.height = "126px";
	document.getElementById("microbeadsfivedum").style.width = "126px";

	document.getElementById("microbeadsppone").style.backgroundImage = "url('images/plates/pp2/pp.png')";
	document.getElementById("microbeadsppone").style.height = "126px";
	document.getElementById("microbeadsppone").style.width = "126px";


	document.getElementById("microbeadssixdum").style.backgroundImage = "url('images/plates/polystyrene2.png')";
	document.getElementById("microbeadssixdum").style.height = "126px";
	document.getElementById("microbeadssixdum").style.width = "126px";

	document.getElementById("microbeadspolystyreneone").style.backgroundImage = "url('images/plates/polystyrene2/polystyrene.png')";
	document.getElementById("microbeadspolystyreneone").style.height = "126px";
	document.getElementById("microbeadspolystyreneone").style.width = "126px";

	document.getElementById("microbeadsthreedum").style.backgroundImage = "url('images/plates/pet2.png')";
	document.getElementById("microbeadsthreedum").style.height = "126px";
	document.getElementById("microbeadsthreedum").style.width = "126px";
	document.getElementById("microbeadsthreedum").style.left = "378px";

	document.getElementById("microbeadspetone").style.backgroundImage = "url('images/plates/pet2/pet1.png')";
	document.getElementById("microbeadspetone").style.height = "126px";
	document.getElementById("microbeadspetone").style.width = "126px";

	document.getElementById("microbeadspettwo").style.backgroundImage = "url('images/plates/pet2/pet2.png')";
	document.getElementById("microbeadspettwo").style.height = "126px";
	document.getElementById("microbeadspettwo").style.width = "126px";

	document.getElementById("microbeadspetthree").style.backgroundImage = "url('images/plates/pet2/pet3.png')";
	document.getElementById("microbeadspetthree").style.height = "126px";
	document.getElementById("microbeadspetthree").style.width = "126px";

	document.getElementById("microbeadspetfour").style.backgroundImage = "url('images/plates/pet2/pet4.png')";
	document.getElementById("microbeadspetfour").style.height = "126px";
	document.getElementById("microbeadspetfour").style.width = "126px";


	document.getElementById("microbeadsfourdum").style.backgroundImage = "url('images/plates/phtalate2.png')";
	document.getElementById("microbeadsfourdum").style.height = "126px";
	document.getElementById("microbeadsfourdum").style.width = "126px";

	document.getElementById("microbeadsphtalateone").style.backgroundImage = "url('images/plates/phtalate2/phtalate1.png')";
	document.getElementById("microbeadsphtalateone").style.height = "126px";
	document.getElementById("microbeadsphtalateone").style.width = "126px";

	document.getElementById("microbeadsphtalatetwo").style.backgroundImage = "url('images/plates/phtalate2/phtalate2.png')";
	document.getElementById("microbeadsphtalatetwo").style.height = "126px";
	document.getElementById("microbeadsphtalatetwo").style.width = "126px";

	document.getElementById("microbeadsphtalatethree").style.backgroundImage = "url('images/plates/phtalate2/phtalate3.png')";
	document.getElementById("microbeadsphtalatethree").style.height = "126px";
	document.getElementById("microbeadsphtalatethree").style.width = "126px";

	document.getElementById("filamentstwodum").style.backgroundImage = "url('images/plates/dyes2.png')";
	document.getElementById("filamentstwodum").style.height = "126px";
	document.getElementById("filamentstwodum").style.width = "126px";
	document.getElementById("filamentstwodum").style.left = "376px";

	document.getElementById("filamentsdyesone").style.backgroundImage = "url('images/plates/dyes2/dyes1.png')";
	document.getElementById("filamentsdyesone").style.height = "126px";
	document.getElementById("filamentsdyesone").style.width = "126px";

	document.getElementById("filamentsdyestwo").style.backgroundImage = "url('images/plates/dyes2/dyes2.png')";
	document.getElementById("filamentsdyestwo").style.height = "126px";
	document.getElementById("filamentsdyestwo").style.width = "126px";

	document.getElementById("filamentsdyesthree").style.backgroundImage = "url('images/plates/dyes2/dyes3.png')";
	document.getElementById("filamentsdyesthree").style.height = "126px";
	document.getElementById("filamentsdyesthree").style.width = "126px";


	document.getElementById("filamentspetone").style.backgroundImage = "url('images/plates/pet2/pet1.png')";
	document.getElementById("filamentspetone").style.height = "126px";
	document.getElementById("filamentspetone").style.width = "126px";

	document.getElementById("filamentspettwo").style.backgroundImage = "url('images/plates/pet2/pet2.png')";
	document.getElementById("filamentspettwo").style.height = "126px";
	document.getElementById("filamentspettwo").style.width = "126px";

	document.getElementById("filamentspetthree").style.backgroundImage = "url('images/plates/pet2/pet3.png')";
	document.getElementById("filamentspetthree").style.height = "126px";
	document.getElementById("filamentspetthree").style.width = "126px";

	document.getElementById("filamentspetfour").style.backgroundImage = "url('images/plates/pet2/pet4.png')";
	document.getElementById("filamentspetfour").style.height = "126px";
	document.getElementById("filamentspetfour").style.width = "126px";

	document.getElementById("filamentsonedum").style.backgroundImage = "url('images/plates/pet2.png')";
	document.getElementById("filamentsonedum").style.height = "126px";
	document.getElementById("filamentsonedum").style.width = "126px";
	document.getElementById("filamentsonedum").style.left = "378px";


	document.getElementById("filamentsthreedum").style.backgroundImage = "url('images/plates/pp2.png')";
	document.getElementById("filamentsthreedum").style.height = "126px";
	document.getElementById("filamentsthreedum").style.width = "126px";
	document.getElementById("filamentsthreedum").style.left = "379px";

	document.getElementById("filamentsppone").style.backgroundImage = "url('images/plates/pp2/pp.png')";
	document.getElementById("filamentsppone").style.height = "126px";
	document.getElementById("filamentsppone").style.width = "126px";


	document.getElementById("fibretwodum").style.backgroundImage = "url('images/plates/dyes2.png')";
	document.getElementById("fibretwodum").style.height = "126px";
	document.getElementById("fibretwodum").style.width = "126px";
    document.getElementById("fibretwodum").style.left = "375px";
    document.getElementById("fibretwodum").style.top = "101px";

	document.getElementById("fibredyesone").style.backgroundImage = "url('images/plates/dyes2/dyes1.png')";
	document.getElementById("fibredyesone").style.height = "126px";
	document.getElementById("fibredyesone").style.width = "126px";
    document.getElementById("fibredyesone").style.left = "243px";
	document.getElementById("fibredyesone").style.top = "183px";

	document.getElementById("fibredyestwo").style.backgroundImage = "url('images/plates/dyes2/dyes2.png')";
	document.getElementById("fibredyestwo").style.height = "126px";
	document.getElementById("fibredyestwo").style.width = "126px";
    document.getElementById("fibredyestwo").style.left = "513px";
	document.getElementById("fibredyestwo").style.top = "183px";

	document.getElementById("fibredyesthree").style.backgroundImage = "url('images/plates/dyes2/dyes3.png')";
	document.getElementById("fibredyesthree").style.height = "126px";
	document.getElementById("fibredyesthree").style.width = "126px";



	document.getElementById("fibrepfcone").style.backgroundImage = "url('images/plates/pfc2/pfc1.png')";
	document.getElementById("fibrepfcone").style.height = "126px";
	document.getElementById("fibrepfcone").style.width = "126px";

	document.getElementById("fibrepfctwo").style.backgroundImage = "url('images/plates/pfc2/pfc2.png')";
	document.getElementById("fibrepfctwo").style.height = "126px";
	document.getElementById("fibrepfctwo").style.width = "126px";

	document.getElementById("fibrepfcthree").style.backgroundImage = "url('images/plates/pfc2/pfc3.png')";
	document.getElementById("fibrepfcthree").style.height = "126px";
	document.getElementById("fibrepfcthree").style.width = "126px";

	document.getElementById("fibrepfcfour").style.backgroundImage = "url('images/plates/pfc2/pfc4.png')";
	document.getElementById("fibrepfcfour").style.height = "126px";
	document.getElementById("fibrepfcfour").style.width = "126px";

	document.getElementById("fibrefourdum").style.backgroundImage = "url('images/plates/pfc2.png')";
	document.getElementById("fibrefourdum").style.height = "126px";
	document.getElementById("fibrefourdum").style.width = "126px";


	document.getElementById("fibreonedum").style.backgroundImage = "url('images/plates/phtalate2.png')";
	document.getElementById("fibreonedum").style.height = "126px";
	document.getElementById("fibreonedum").style.width = "126px";

	document.getElementById("fibrephtalateone").style.backgroundImage = "url('images/plates/phtalate2/phtalate1.png')";
	document.getElementById("fibrephtalateone").style.height = "126px";
	document.getElementById("fibrephtalateone").style.width = "126px";

	document.getElementById("fibrephtalatetwo").style.backgroundImage = "url('images/plates/phtalate2/phtalate2.png')";
	document.getElementById("fibrephtalatetwo").style.height = "126px";
	document.getElementById("fibrephtalatetwo").style.width = "126px";

	document.getElementById("fibrephtalatethree").style.backgroundImage = "url('images/plates/phtalate2/phtalate3.png')";
	document.getElementById("fibrephtalatethree").style.height = "126px";
	document.getElementById("fibrephtalatethree").style.width = "126px";


	document.getElementById("fibrethreedum").style.backgroundImage = "url('images/plates/metals2.png')";
	document.getElementById("fibrethreedum").style.height = "126px";
	document.getElementById("fibrethreedum").style.width = "126px";
    document.getElementById("fibrethreedum").style.left = "383px";

	document.getElementById("fibremetalsone").style.backgroundImage = "url('images/plates/metals2/metals1.png')";
	document.getElementById("fibremetalsone").style.height = "126px";
	document.getElementById("fibremetalsone").style.width = "126px";

	document.getElementById("fibremetalstwo").style.backgroundImage = "url('images/plates/metals2/metals2.png')";
	document.getElementById("fibremetalstwo").style.height = "126px";
	document.getElementById("fibremetalstwo").style.width = "126px";

	document.getElementById("fibremetalsthree").style.backgroundImage = "url('images/plates/metals2/metals3.png')";
	document.getElementById("fibremetalsthree").style.height = "126px";
	document.getElementById("fibremetalsthree").style.width = "126px";


	document.getElementById("fibrefivedum").style.backgroundImage = "url('images/plates/solvents2.png')";
	document.getElementById("fibrefivedum").style.height = "126px";
	document.getElementById("fibrefivedum").style.width = "126px";
	document.getElementById("fibrefivedum").style.left = "386px";

	document.getElementById("fibresolventone").style.backgroundImage = "url('images/plates/solvents2/solvents1.png')";
	document.getElementById("fibresolventone").style.height = "126px";
	document.getElementById("fibresolventone").style.width = "126px";

	document.getElementById("fibresolventtwo").style.backgroundImage = "url('images/plates/solvents2/solvents2.png')";
	document.getElementById("fibresolventtwo").style.height = "126px";
	document.getElementById("fibresolventtwo").style.width = "126px";


	document.getElementById("filmtwodum").style.backgroundImage = "url('images/plates/ldpe2.png')";
	document.getElementById("filmtwodum").style.height = "126px";
	document.getElementById("filmtwodum").style.width = "126px";
    document.getElementById("filmtwodum").style.left = "370px";

	document.getElementById("filmldpeone").style.backgroundImage = "url('images/plates/ldpe2/ldpe.png')";
	document.getElementById("filmldpeone").style.height = "126px";
	document.getElementById("filmldpeone").style.width = "126px";



	document.getElementById("filmonedum").style.backgroundImage = "url('images/plates/phtalate2.png')";
	document.getElementById("filmonedum").style.height = "126px";
	document.getElementById("filmonedum").style.width = "126px";
    document.getElementById("filmonedum").style.left = "378px";

	document.getElementById("filmphtalateone").style.backgroundImage = "url('images/plates/phtalate2/phtalate1.png')";
	document.getElementById("filmphtalateone").style.height = "126px";
	document.getElementById("filmphtalateone").style.width = "126px";

	document.getElementById("filmphtalatetwo").style.backgroundImage = "url('images/plates/phtalate2/phtalate2.png')";
	document.getElementById("filmphtalatetwo").style.height = "126px";
	document.getElementById("filmphtalatetwo").style.width = "126px";

	document.getElementById("filmphtalatethree").style.backgroundImage = "url('images/plates/phtalate2/phtalate3.png')";
	document.getElementById("filmphtalatethree").style.height = "126px";
	document.getElementById("filmphtalatethree").style.width = "126px";




	document.getElementById("filmfourdum").style.backgroundImage = "url('images/plates/pvc2.png')";
	document.getElementById("filmfourdum").style.height = "126px";
	document.getElementById("filmfourdum").style.width = "126px";
    document.getElementById("filmfourdum").style.left = "386px";

	document.getElementById("filmpvcone").style.backgroundImage = "url('images/plates/pvc2/pvc1.png')";
	document.getElementById("filmpvcone").style.height = "126px";
	document.getElementById("filmpvcone").style.width = "126px";

	document.getElementById("filmpvctwo").style.backgroundImage = "url('images/plates/pvc2/pvc2.png')";
	document.getElementById("filmpvctwo").style.height = "126px";
	document.getElementById("filmpvctwo").style.width = "126px";

	document.getElementById("filmpvcthree").style.backgroundImage = "url('images/plates/pvc2/pvc3.png')";
	document.getElementById("filmpvcthree").style.height = "126px";
	document.getElementById("filmpvcthree").style.width = "126px";

	document.getElementById("filmpvcfour").style.backgroundImage = "url('images/plates/pvc2/pvc4.png')";
	document.getElementById("filmpvcfour").style.height = "126px";
	document.getElementById("filmpvcfour").style.width = "126px";

	document.getElementById("filmpvcfive").style.backgroundImage = "url('images/plates/pvc2/pvc5.png')";
	document.getElementById("filmpvcfive").style.height = "126px";
	document.getElementById("filmpvcfive").style.width = "126px";

	document.getElementById("filmpvcsix").style.backgroundImage = "url('images/plates/pvc2/pvc6.png')";
	document.getElementById("filmpvcsix").style.height = "126px";
	document.getElementById("filmpvcsix").style.width = "126px";

	document.getElementById("filmpvcseven").style.backgroundImage = "url('images/plates/pvc2/pvc7.png')";
	document.getElementById("filmpvcseven").style.height = "126px";
	document.getElementById("filmpvcseven").style.width = "126px";

	document.getElementById("filmpvceight").style.backgroundImage = "url('images/plates/pvc2/pvc8.png')";
	document.getElementById("filmpvceight").style.height = "126px";
	document.getElementById("filmpvceight").style.width = "126px";



	document.getElementById("filmthreedum").style.backgroundImage = "url('images/plates/hdpe2.png')";
	document.getElementById("filmthreedum").style.height = "126px";
	document.getElementById("filmthreedum").style.width = "126px";
    document.getElementById("filmthreedum").style.left = "378px";

	document.getElementById("filmhdpeone").style.backgroundImage = "url('images/plates/hdpe2/hdpe1.png')";
	document.getElementById("filmhdpeone").style.height = "126px";
	document.getElementById("filmhdpeone").style.width = "126px";

	document.getElementById("filmhdpetwo").style.backgroundImage = "url('images/plates/hdpe2/hdpe2.png')";
	document.getElementById("filmhdpetwo").style.height = "126px";
	document.getElementById("filmhdpetwo").style.width = "126px";

	document.getElementById("filmhdpethree").style.backgroundImage = "url('images/plates/hdpe2/hdpe3.png')";
	document.getElementById("filmhdpethree").style.height = "126px";
	document.getElementById("filmhdpethree").style.width = "126px";

	document.getElementById("filmhdpefour").style.backgroundImage = "url('images/plates/hdpe2/hdpe4.png')";
	document.getElementById("filmhdpefour").style.height = "126px";
	document.getElementById("filmhdpefour").style.width = "126px";

	document.getElementById("filmhdpefive").style.backgroundImage = "url('images/plates/hdpe2/hdpe5.png')";
	document.getElementById("filmhdpefive").style.height = "126px";
	document.getElementById("filmhdpefive").style.width = "126px";

	document.getElementById("filmhdpesix").style.backgroundImage = "url('images/plates/hdpe2/hdpe6.png')";
	document.getElementById("filmhdpesix").style.height = "126px";
	document.getElementById("filmhdpesix").style.width = "126px";
}

function diningsmall(){
	document.getElementById("bodyeffects").style.backgroundImage = "url('images/plates/dining.png')";
	
		document.getElementById("picnicbtnsmall").style.backgroundColor = "white";
		document.getElementById("picnicbtnsmall").style.border = "#13448d solid 3px";
		document.getElementById("picnicbtnsmall").style.color = "#13448d";
		document.getElementById("finediningbtnsmall").style.backgroundColor = "white";
		document.getElementById("finediningbtnsmall").style.border = "#13448d solid 3px";
		document.getElementById("finediningbtnsmall").style.color = "#13448d";
		document.getElementById("diningroombtnsmall").style.backgroundColor = "#13448d";
		document.getElementById("diningroombtnsmall").style.border = "#13448d solid 3px";
		document.getElementById("diningroombtnsmall").style.color = "white";
	
	
		document.getElementById("plate1").style.backgroundImage = "url('images/plates/plate1.png')";
		document.getElementById("plate1").style.backgroundSize = "contain";
		document.getElementById("plate1").style.width = "390px";
		document.getElementById("plate1").style.height = "250px";
		document.getElementById("plate1").style.position = "fixed";
		document.getElementById("plate1").style.left = "253px";
		document.getElementById("plate1").style.top = "97px";
	
		document.getElementById("platefragment").style.backgroundImage = "url('images/plates/platefragment.png')";
		document.getElementById("platefoam").style.backgroundImage = "url('images/plates/platefoam.png')";
		document.getElementById("platemicrobeads").style.backgroundImage = "url('images/plates/platemicrobeads.png')";
		document.getElementById("platefilaments").style.backgroundImage = "url('images/plates/platefilaments.png')";
		document.getElementById("platefibre").style.backgroundImage = "url('images/plates/platefibre.png')";
		document.getElementById("platefilm").style.backgroundImage = "url('images/plates/platefilm.png')";
	
		document.getElementById("platefragment").style.width = "215px";
		document.getElementById("platefoam").style.width = "215px";
		document.getElementById("platemicrobeads").style.width = "215px";
		document.getElementById("platefilaments").style.width = "215px";
		document.getElementById("platefibre").style.width = "215px";
		document.getElementById("platefilm").style.width = "215px";
	
		document.getElementById("platefragment").style.height = "138px";
		document.getElementById("platefoam").style.height = "138px";
		document.getElementById("platemicrobeads").style.height = "138px";
		document.getElementById("platefilaments").style.height = "138px";
		document.getElementById("platefibre").style.height = "138px";
		document.getElementById("platefilm").style.height = "138px";
	
		document.getElementById("fragmentone").style.backgroundImage = "url('images/plates/pet.png')";
		document.getElementById("fragmentone").style.width = "134px";
		document.getElementById("fragmentone").style.height = "103px";
		document.getElementById("fragmentone").style.left = "569px";
		document.getElementById("fragmentone").style.top = "57px";
	
		document.getElementById("fragmenttwo").style.backgroundImage = "url('images/plates/ldpe.png')";
		document.getElementById("fragmenttwo").style.height = "104px";
		document.getElementById("fragmenttwo").style.width = "143px";
		document.getElementById("fragmenttwo").style.left = "385px";
		document.getElementById("fragmenttwo").style.top = "-33px";
	
		document.getElementById("fragmentthree").style.backgroundImage = "url('images/plates/hdpe.png')";
		document.getElementById("fragmentthree").style.width = "134px";
		document.getElementById("fragmentthree").style.height = "103px";
		document.getElementById("fragmentthree").style.left = "191px";
		document.getElementById("fragmentthree").style.top = "188px";
	
		document.getElementById("fragmentfour").style.backgroundImage = "url('images/plates/pvc.png')";
		document.getElementById("fragmentfour").style.height = "104px";
		document.getElementById("fragmentfour").style.width = "104px";
		document.getElementById("fragmentfour").style.left = "205px";
		document.getElementById("fragmentfour").style.top = "57px";
	
		document.getElementById("fragmentfive").style.backgroundImage = "url('images/plates/pp.png')";
		document.getElementById("fragmentfive").style.height = "104px";
		document.getElementById("fragmentfive").style.width = "104px";
		document.getElementById("fragmentfive").style.left = "585px";
		document.getElementById("fragmentfive").style.top = "188px";
	
		document.getElementById("fragmentsix").style.backgroundImage = "url('images/plates/polystyreneplate.png')";
		document.getElementById("fragmentsix").style.height = "104px";
		document.getElementById("fragmentsix").style.width = "104px";
		document.getElementById("fragmentsix").style.left = "397px";
		document.getElementById("fragmentsix").style.top = "234px";
	
		document.getElementById("foamone").style.backgroundImage = "url('images/plates/polystyreneplate.png')";
		document.getElementById("foamone").style.height = "104px";
		document.getElementById("foamone").style.width = "104px";
		document.getElementById("foamone").style.left = "194px";
		document.getElementById("foamone").style.top = "98px";
	
		document.getElementById("foamtwo").style.backgroundImage = "url('images/plates/ldpehdpepan.png')";
		document.getElementById("foamtwo").style.width = "134px";
		document.getElementById("foamtwo").style.height = "103px";
		document.getElementById("foamtwo").style.left = "575px";
		document.getElementById("foamtwo").style.top = "99px";
	
		document.getElementById("microbeadsone").style.backgroundImage = "url('images/plates/nylon.png')";
		document.getElementById("microbeadsone").style.width = "134px";
		document.getElementById("microbeadsone").style.height = "103px";
		document.getElementById("microbeadsone").style.left = "562px";
		document.getElementById("microbeadsone").style.top = "47px";
	
		document.getElementById("microbeadstwo").style.backgroundImage = "url('images/plates/ldpehdpemirror.png')";
		document.getElementById("microbeadstwo").style.width = "143px";
		document.getElementById("microbeadstwo").style.height = "104px";
		document.getElementById("microbeadstwo").style.left = "381px";
		document.getElementById("microbeadstwo").style.top = "-33px";
	
		document.getElementById("microbeadsthree").style.backgroundImage = "url('images/plates/pet.png')";
		document.getElementById("microbeadsthree").style.width = "134px";
		document.getElementById("microbeadsthree").style.height = "103px";
		document.getElementById("microbeadsthree").style.left = "209px";
		document.getElementById("microbeadsthree").style.top = "189px";
	
		document.getElementById("microbeadsfour").style.backgroundImage = "url('images/plates/phtalate.png')";
		document.getElementById("microbeadsfour").style.height = "104px";
		document.getElementById("microbeadsfour").style.width = "104px";
		document.getElementById("microbeadsfour").style.left = "213px";
		document.getElementById("microbeadsfour").style.top = "47px";
	
		document.getElementById("microbeadsfive").style.backgroundImage = "url('images/plates/pp.png')";
		document.getElementById("microbeadsfive").style.height = "104px";
		document.getElementById("microbeadsfive").style.width = "104px";
		document.getElementById("microbeadsfive").style.left = "389px";
		document.getElementById("microbeadsfive").style.top = "239px";
	
		document.getElementById("microbeadssix").style.backgroundImage = "url('images/plates/polystyreneplate.png')";
		document.getElementById("microbeadssix").style.height = "104px";
		document.getElementById("microbeadssix").style.width = "104px";
		document.getElementById("microbeadssix").style.left = "578px";
		document.getElementById("microbeadssix").style.top = "189px";
	
	
		document.getElementById("filamentsone").style.backgroundImage = "url('images/plates/pp.png')";
		document.getElementById("filamentsone").style.height = "104px";
		document.getElementById("filamentsone").style.width = "104px";
		document.getElementById("filamentsone").style.left = "541px";
		document.getElementById("filamentsone").style.top = "185px";
	
		document.getElementById("filamentstwo").style.backgroundImage = "url('images/plates/dyes.png')";
		document.getElementById("filamentstwo").style.height = "104px";
		document.getElementById("filamentstwo").style.width = "146px";
		document.getElementById("filamentstwo").style.left = "354px";
		document.getElementById("filamentstwo").style.top = "-35px";
	
		document.getElementById("filamentsthree").style.backgroundImage = "url('images/plates/pet.png')";
		document.getElementById("filamentsthree").style.height = "103px";
		document.getElementById("filamentsthree").style.width = "134px";
		document.getElementById("filamentsthree").style.left = "208px";
		document.getElementById("filamentsthree").style.top = "185px";
	
	
		document.getElementById("fibreone").style.backgroundImage = "url('images/plates/phtalate.png')";
		document.getElementById("fibreone").style.height = "104px";
		document.getElementById("fibreone").style.width = "104px";
		document.getElementById("fibreone").style.left = "606px";
		document.getElementById("fibreone").style.top = "92px";
	
		document.getElementById("fibretwo").style.backgroundImage = "url('images/plates/dyes.png')";
		document.getElementById("fibretwo").style.height = "104px";
		document.getElementById("fibretwo").style.width = "146px";
		document.getElementById("fibretwo").style.left = "354px";
		document.getElementById("fibretwo").style.top = "-38px";
	
		document.getElementById("fibrethree").style.backgroundImage = "url('images/plates/metals.png')";
		document.getElementById("fibrethree").style.width = "134px";
		document.getElementById("fibrethree").style.height = "103px";
		document.getElementById("fibrethree").style.left = "297px";
		document.getElementById("fibrethree").style.top = "229px";
	
		document.getElementById("fibrefour").style.backgroundImage = "url('images/plates/pfc.png')";
		document.getElementById("fibrefour").style.height = "104px";
		document.getElementById("fibrefour").style.width = "104px";
		document.getElementById("fibrefour").style.left = "184px";
		document.getElementById("fibrefour").style.top = "92px";
	
		document.getElementById("fibrefive").style.backgroundImage = "url('images/plates/solvents.png')";
		document.getElementById("fibrefive").style.width = "143px";
		document.getElementById("fibrefive").style.height = "104px";
		document.getElementById("fibrefive").style.left = "487px";
		document.getElementById("fibrefive").style.top = "229px";
	
	
		document.getElementById("filmone").style.backgroundImage = "url('images/plates/phtalate.png')";
		document.getElementById("filmone").style.height = "104px";
		document.getElementById("filmone").style.width = "104px";
		document.getElementById("filmone").style.left = "604px";
		document.getElementById("filmone").style.top = "102px";
	
		document.getElementById("filmtwo").style.backgroundImage = "url('images/plates/ldpe.png')";
		document.getElementById("filmtwo").style.width = "143px";
		document.getElementById("filmtwo").style.height = "104px";
		document.getElementById("filmtwo").style.left = "373px";
		document.getElementById("filmtwo").style.top = "-38px";
	
		document.getElementById("filmthree").style.backgroundImage = "url('images/plates/hdpe.png')";
		document.getElementById("filmthree").style.width = "134px";
		document.getElementById("filmthree").style.height = "103px";
		document.getElementById("filmthree").style.left = "372px";
		document.getElementById("filmthree").style.top = "236px";
	
		document.getElementById("filmfour").style.backgroundImage = "url('images/plates/pvc.png')";
		document.getElementById("filmfour").style.height = "104px";
		document.getElementById("filmfour").style.width = "104px";
		document.getElementById("filmfour").style.left = "189px";
		document.getElementById("filmfour").style.top = "102px";
	
	
		document.getElementById("fragmentpetone").style.backgroundImage = "url('images/plates/pet1/pet1.png')";
		document.getElementById("fragmentpetone").style.height = "126px";
		document.getElementById("fragmentpetone").style.width = "126px";
		document.getElementById("fragmentpetone").style.left = "217px";
		document.getElementById("fragmentpetone").style.top = "85px";
	
		document.getElementById("fragmentpettwo").style.backgroundImage = "url('images/plates/pet1/pet2.png')";
		document.getElementById("fragmentpettwo").style.height = "126px";
		document.getElementById("fragmentpettwo").style.width = "126px";
		document.getElementById("fragmentpettwo").style.left = "548px";
		document.getElementById("fragmentpettwo").style.top = "85px";
	
		document.getElementById("fragmentpetthree").style.backgroundImage = "url('images/plates/pet1/pet3.png')";
		document.getElementById("fragmentpetthree").style.height = "126px";
		document.getElementById("fragmentpetthree").style.width = "126px";
		document.getElementById("fragmentpetthree").style.left = "378px";
		document.getElementById("fragmentpetthree").style.top = "227px";
	
		document.getElementById("fragmentpetfour").style.backgroundImage = "url('images/plates/pet1/pet4.png')";
		document.getElementById("fragmentpetfour").style.height = "126px";
		document.getElementById("fragmentpetfour").style.width = "126px";
		document.getElementById("fragmentpetfour").style.left = "378px";
		document.getElementById("fragmentpetfour").style.top = "-47px";
	
		document.getElementById("fragmentonedum").style.backgroundImage = "url('images/plates/pet.png')";
		document.getElementById("fragmentonedum").style.height = "129px";
		document.getElementById("fragmentonedum").style.width = "167px";
		document.getElementById("fragmentonedum").style.top = "90px";
		document.getElementById("fragmentonedum").style.left = "357px";
	
		document.getElementById("fragmenttwodum").style.backgroundImage = "url('images/plates/ldpe.png')";
		document.getElementById("fragmenttwodum").style.height = "125px";
		document.getElementById("fragmenttwodum").style.width = "173px";
		document.getElementById("fragmenttwodum").style.left = "369px";
		document.getElementById("fragmenttwodum").style.top = "110px";
	
		document.getElementById("fragmentldpeone").style.backgroundImage = "url('images/plates/ldpe1/ldpe.png')";
		document.getElementById("fragmentldpeone").style.height = "126px";
		document.getElementById("fragmentldpeone").style.width = "126px";
		document.getElementById("fragmentldpeone").style.left = "380px";
		document.getElementById("fragmentldpeone").style.top = "-17px";
	
	
	
		document.getElementById("fragmentthreedum").style.backgroundImage = "url('images/plates/pvc.png')";
		document.getElementById("fragmentthreedum").style.height = "136px";
		document.getElementById("fragmentthreedum").style.width = "136px";
	
		document.getElementById("fragmentpvcone").style.backgroundImage = "url('images/plates/pvc1/pvc1.png')";
		document.getElementById("fragmentpvcone").style.height = "126px";
		document.getElementById("fragmentpvcone").style.width = "126px";
	
		document.getElementById("fragmentpvctwo").style.backgroundImage = "url('images/plates/pvc1/pvc2.png')";
		document.getElementById("fragmentpvctwo").style.height = "126px";
		document.getElementById("fragmentpvctwo").style.width = "126px";
	
		document.getElementById("fragmentpvcthree").style.backgroundImage = "url('images/plates/pvc1/pvc3.png')";
		document.getElementById("fragmentpvcthree").style.height = "126px";
		document.getElementById("fragmentpvcthree").style.width = "126px";
	
		document.getElementById("fragmentpvcfour").style.backgroundImage = "url('images/plates/pvc1/pvc4.png')";
		document.getElementById("fragmentpvcfour").style.height = "126px";
		document.getElementById("fragmentpvcfour").style.width = "126px";
	
		document.getElementById("fragmentpvcfive").style.backgroundImage = "url('images/plates/pvc1/pvc5.png')";
		document.getElementById("fragmentpvcfive").style.height = "126px";
		document.getElementById("fragmentpvcfive").style.width = "126px";
	
		document.getElementById("fragmentpvcsix").style.backgroundImage = "url('images/plates/pvc1/pvc6.png')";
		document.getElementById("fragmentpvcsix").style.height = "126px";
		document.getElementById("fragmentpvcsix").style.width = "126px";
	
		document.getElementById("fragmentpvcseven").style.backgroundImage = "url('images/plates/pvc1/pvc7.png')";
		document.getElementById("fragmentpvcseven").style.height = "126px";
		document.getElementById("fragmentpvcseven").style.width = "126px";
	
		document.getElementById("fragmentpvceight").style.backgroundImage = "url('images/plates/pvc1/pvc8.png')";
		document.getElementById("fragmentpvceight").style.height = "126px";
		document.getElementById("fragmentpvceight").style.width = "126px";
	
	
		document.getElementById("fragmentfourdum").style.backgroundImage = "url('images/plates/hdpe.png')";
		document.getElementById("fragmentfourdum").style.height = "129px";
		document.getElementById("fragmentfourdum").style.width = "167px";
	
		document.getElementById("fragmenthdpeone").style.backgroundImage = "url('images/plates/hdpe1/hdpe1.png')";
		document.getElementById("fragmenthdpeone").style.height = "126px";
		document.getElementById("fragmenthdpeone").style.width = "126px";
	
		document.getElementById("fragmenthdpetwo").style.backgroundImage = "url('images/plates/hdpe1/hdpe2.png')";
		document.getElementById("fragmenthdpetwo").style.height = "126px";
		document.getElementById("fragmenthdpetwo").style.width = "126px";
	
		document.getElementById("fragmenthdpethree").style.backgroundImage = "url('images/plates/hdpe1/hdpe3.png')";
		document.getElementById("fragmenthdpethree").style.height = "126px";
		document.getElementById("fragmenthdpethree").style.width = "126px";
	
		document.getElementById("fragmenthdpefour").style.backgroundImage = "url('images/plates/hdpe1/hdpe4.png')";
		document.getElementById("fragmenthdpefour").style.height = "126px";
		document.getElementById("fragmenthdpefour").style.width = "126px";
	
		document.getElementById("fragmenthdpefive").style.backgroundImage = "url('images/plates/hdpe1/hdpe5.png')";
		document.getElementById("fragmenthdpefive").style.height = "126px";
		document.getElementById("fragmenthdpefive").style.width = "126px";
	
		document.getElementById("fragmenthdpesix").style.backgroundImage = "url('images/plates/hdpe1/hdpe6.png')";
		document.getElementById("fragmenthdpesix").style.height = "126px";
		document.getElementById("fragmenthdpesix").style.width = "126px";
	
		document.getElementById("fragmentfivedum").style.backgroundImage = "url('images/plates/pp.png')";
		document.getElementById("fragmentfivedum").style.height = "126px";
		document.getElementById("fragmentfivedum").style.width = "126px";
	
		document.getElementById("fragmentppone").style.backgroundImage = "url('images/plates/pp1/pp1.png')";
		document.getElementById("fragmentppone").style.height = "126px";
		document.getElementById("fragmentppone").style.width = "126px";
	
		document.getElementById("fragmentsixdum").style.backgroundImage = "url('images/plates/polystyreneplate.png')";
		document.getElementById("fragmentsixdum").style.height = "126px";
		document.getElementById("fragmentsixdum").style.width = "126px";
	
	
	
	
	
	
		document.getElementById("foamonedum").style.backgroundImage = "url('images/plates/polystyreneplate.png')";
		document.getElementById("foamonedum").style.height = "126px";
		document.getElementById("foamonedum").style.width = "126px";
	
		document.getElementById("foampolystyreneone").style.backgroundImage = "url('images/plates/polystyrene1/polystyrene1.png')";
		document.getElementById("foampolystyreneone").style.height = "126px";
		document.getElementById("foampolystyreneone").style.width = "126px";
		// document.getElementById("foampolystyreneone").style.left = "603px";
	
	
		document.getElementById("foamtwodum").style.backgroundImage = "url('images/plates/ldpehdpepan.png')";
		document.getElementById("foamtwodum").style.height = "129px";
		document.getElementById("foamtwodum").style.width = "167px";
	
		document.getElementById("foamhdpeldpeone").style.backgroundImage = "url('images/plates/hdpe1/hdpe1.png')";
		document.getElementById("foamhdpeldpeone").style.height = "126px";
		document.getElementById("foamhdpeldpeone").style.width = "126px";
	
		document.getElementById("foamhdpeldpetwo").style.backgroundImage = "url('images/plates/hdpe1/hdpe2.png')";
		document.getElementById("foamhdpeldpetwo").style.height = "126px";
		document.getElementById("foamhdpeldpetwo").style.width = "126px";
	
		document.getElementById("foamhdpeldpethree").style.backgroundImage = "url('images/plates/hdpe1/hdpe3.png')";
		document.getElementById("foamhdpeldpethree").style.height = "126px";
		document.getElementById("foamhdpeldpethree").style.width = "126px";
	
		document.getElementById("foamhdpeldpefour").style.backgroundImage = "url('images/plates/hdpe1/hdpe4.png')";
		document.getElementById("foamhdpeldpefour").style.height = "126px";
		document.getElementById("foamhdpeldpefour").style.width = "126px";
	
		document.getElementById("foamhdpeldpefive").style.backgroundImage = "url('images/plates/hdpe1/hdpe5.png')";
		document.getElementById("foamhdpeldpefive").style.height = "126px";
		document.getElementById("foamhdpeldpefive").style.width = "126px";
	
		document.getElementById("foamhdpeldpesix").style.backgroundImage = "url('images/plates/hdpe1/hdpe6.png')";
		document.getElementById("foamhdpeldpesix").style.height = "126px";
		document.getElementById("foamhdpeldpesix").style.width = "126px";
	
		document.getElementById("foamhdpeldpeseven").style.backgroundImage = "url('images/plates/ldpe1/ldpe.png')";
		document.getElementById("foamhdpeldpeseven").style.height = "126px";
		document.getElementById("foamhdpeldpeseven").style.width = "126px";
	
	
	
	
	
		document.getElementById("microbeadstwodum").style.backgroundImage = "url('images/plates/ldpehdpemirror.png')";
		document.getElementById("microbeadstwodum").style.height = "125px";
		document.getElementById("microbeadstwodum").style.width = "175px";
		document.getElementById("microbeadstwodum").style.left = "375px";
		document.getElementById("microbeadstwodum").style.top = "99px";
	
		document.getElementById("microbeadshdpeldpeone").style.backgroundImage = "url('images/plates/hdpe1/hdpe1.png')";
		document.getElementById("microbeadshdpeldpeone").style.height = "126px";
		document.getElementById("microbeadshdpeldpeone").style.width = "126px";
	
		document.getElementById("microbeadshdpeldpetwo").style.backgroundImage = "url('images/plates/hdpe1/hdpe2.png')";
		document.getElementById("microbeadshdpeldpetwo").style.height = "126px";
		document.getElementById("microbeadshdpeldpetwo").style.width = "126px";
	
		document.getElementById("microbeadshdpeldpethree").style.backgroundImage = "url('images/plates/hdpe1/hdpe3.png')";
		document.getElementById("microbeadshdpeldpethree").style.height = "126px";
		document.getElementById("microbeadshdpeldpethree").style.width = "126px";
	
		document.getElementById("microbeadshdpeldpefour").style.backgroundImage = "url('images/plates/hdpe1/hdpe4.png')";
		document.getElementById("microbeadshdpeldpefour").style.height = "126px";
		document.getElementById("microbeadshdpeldpefour").style.width = "126px";
	
		document.getElementById("microbeadshdpeldpefive").style.backgroundImage = "url('images/plates/hdpe1/hdpe5.png')";
		document.getElementById("microbeadshdpeldpefive").style.height = "126px";
		document.getElementById("microbeadshdpeldpefive").style.width = "126px";
	
		document.getElementById("microbeadshdpeldpesix").style.backgroundImage = "url('images/plates/hdpe1/hdpe6.png')";
		document.getElementById("microbeadshdpeldpesix").style.height = "126px";
		document.getElementById("microbeadshdpeldpesix").style.width = "126px";
	
		document.getElementById("microbeadshdpeldpeseven").style.backgroundImage = "url('images/plates/ldpe1/ldpe.png')";
		document.getElementById("microbeadshdpeldpeseven").style.height = "126px";
		document.getElementById("microbeadshdpeldpeseven").style.width = "126px";
	
	
		document.getElementById("microbeadsfivedum").style.backgroundImage = "url('images/plates/pp.png')";
		document.getElementById("microbeadsfivedum").style.height = "126px";
		document.getElementById("microbeadsfivedum").style.width = "126px";
	
		document.getElementById("microbeadsppone").style.backgroundImage = "url('images/plates/pp1/pp1.png')";
		document.getElementById("microbeadsppone").style.height = "126px";
		document.getElementById("microbeadsppone").style.width = "126px";
	
	
		document.getElementById("microbeadssixdum").style.backgroundImage = "url('images/plates/polystyreneplate.png')";
		document.getElementById("microbeadssixdum").style.height = "126px";
		document.getElementById("microbeadssixdum").style.width = "126px";
	
		document.getElementById("microbeadspolystyreneone").style.backgroundImage = "url('images/plates/polystyrene1/polystyrene1.png')";
		document.getElementById("microbeadspolystyreneone").style.height = "126px";
		document.getElementById("microbeadspolystyreneone").style.width = "126px";
	
		document.getElementById("microbeadsthreedum").style.backgroundImage = "url('images/plates/pet.png')";
		document.getElementById("microbeadsthreedum").style.width = "167px";
		document.getElementById("microbeadsthreedum").style.height = "129px";
		document.getElementById("microbeadsthreedum").style.top = "82px";
		document.getElementById("microbeadsthreedum").style.left = "357px";
	
		document.getElementById("microbeadspetone").style.backgroundImage = "url('images/plates/pet1/pet1.png')";
		document.getElementById("microbeadspetone").style.height = "126px";
		document.getElementById("microbeadspetone").style.width = "126px";
		// document.getElementById("microbeadspetone").style.left = "294px";
		// document.getElementById("microbeadspetone").style.top = "230px";
	
		document.getElementById("microbeadspettwo").style.backgroundImage = "url('images/plates/pet1/pet2.png')";
		document.getElementById("microbeadspettwo").style.height = "126px";
		document.getElementById("microbeadspettwo").style.width = "126px";
		// document.getElementById("microbeadspettwo").style.left = "909px";
		// document.getElementById("microbeadspettwo").style.top = "230px";
	
		document.getElementById("microbeadspetthree").style.backgroundImage = "url('images/plates/pet1/pet3.png')";
		document.getElementById("microbeadspetthree").style.height = "126px";
		document.getElementById("microbeadspetthree").style.width = "126px";
		// document.getElementById("microbeadspetthree").style.left = "603px";
		// document.getElementById("microbeadspetthree").style.top = "459px";
	
		document.getElementById("microbeadspetfour").style.backgroundImage = "url('images/plates/pet1/pet4.png')";
		document.getElementById("microbeadspetfour").style.height = "126px";
		document.getElementById("microbeadspetfour").style.width = "126px";
		// document.getElementById("microbeadspetfour").style.left = "603px";
		// document.getElementById("microbeadspetfour").style.top = "10px";
	
	
		document.getElementById("microbeadsfourdum").style.backgroundImage = "url('images/plates/phtalate.png')";
		document.getElementById("microbeadsfourdum").style.height = "126px";
		document.getElementById("microbeadsfourdum").style.width = "126px";
	
		document.getElementById("microbeadsphtalateone").style.backgroundImage = "url('images/plates/phtalate1/phtalate1.png')";
		document.getElementById("microbeadsphtalateone").style.height = "126px";
		document.getElementById("microbeadsphtalateone").style.width = "126px";
	
		document.getElementById("microbeadsphtalatetwo").style.backgroundImage = "url('images/plates/phtalate1/phtalate2.png')";
		document.getElementById("microbeadsphtalatetwo").style.height = "126px";
		document.getElementById("microbeadsphtalatetwo").style.width = "126px";
	
		document.getElementById("microbeadsphtalatethree").style.backgroundImage = "url('images/plates/phtalate1/phtalate3.png')";
		document.getElementById("microbeadsphtalatethree").style.height = "126px";
		document.getElementById("microbeadsphtalatethree").style.width = "126px";
	
		document.getElementById("filamentstwodum").style.backgroundImage = "url('images/plates/dyes.png')";
		document.getElementById("filamentstwodum").style.height = "125px";
		document.getElementById("filamentstwodum").style.width = "175px";
	
		document.getElementById("filamentsdyesone").style.backgroundImage = "url('images/plates/dyes1/dyes1.png')";
		document.getElementById("filamentsdyesone").style.height = "126px";
		document.getElementById("filamentsdyesone").style.width = "126px";
	
		document.getElementById("filamentsdyestwo").style.backgroundImage = "url('images/plates/dyes1/dyes2.png')";
		document.getElementById("filamentsdyestwo").style.height = "126px";
		document.getElementById("filamentsdyestwo").style.width = "126px";
	
		document.getElementById("filamentsdyesthree").style.backgroundImage = "url('images/plates/dyes1/dyes3.png')";
		document.getElementById("filamentsdyesthree").style.height = "126px";
		document.getElementById("filamentsdyesthree").style.width = "126px";
	
	
		document.getElementById("filamentspetone").style.backgroundImage = "url('images/plates/pet1/pet1.png')";
		document.getElementById("filamentspetone").style.height = "126px";
		document.getElementById("filamentspetone").style.width = "126px";
	
		document.getElementById("filamentspettwo").style.backgroundImage = "url('images/plates/pet1/pet2.png')";
		document.getElementById("filamentspettwo").style.height = "126px";
		document.getElementById("filamentspettwo").style.width = "126px";
	
		document.getElementById("filamentspetthree").style.backgroundImage = "url('images/plates/pet1/pet3.png')";
		document.getElementById("filamentspetthree").style.height = "126px";
		document.getElementById("filamentspetthree").style.width = "126px";
	
		document.getElementById("filamentspetfour").style.backgroundImage = "url('images/plates/pet1/pet4.png')";
		document.getElementById("filamentspetfour").style.height = "126px";
		document.getElementById("filamentspetfour").style.width = "126px";
	
		document.getElementById("filamentsonedum").style.backgroundImage = "url('images/plates/pet.png')";
		document.getElementById("filamentsonedum").style.width = "167px";
		document.getElementById("filamentsonedum").style.height = "129px";
	
	
		document.getElementById("filamentsthreedum").style.backgroundImage = "url('images/plates/pp.png')";
		document.getElementById("filamentsthreedum").style.height = "126px";
		document.getElementById("filamentsthreedum").style.width = "126px";
	
		document.getElementById("filamentsppone").style.backgroundImage = "url('images/plates/pp1/pp1.png')";
		document.getElementById("filamentsppone").style.height = "126px";
		document.getElementById("filamentsppone").style.width = "126px";
	
	
		document.getElementById("fibretwodum").style.backgroundImage = "url('images/plates/dyes.png')";
		document.getElementById("fibretwodum").style.height = "125px";
		document.getElementById("fibretwodum").style.width = "175px";
	
		document.getElementById("fibredyesone").style.backgroundImage = "url('images/plates/dyes1/dyes1.png')";
		document.getElementById("fibredyesone").style.height = "126px";
		document.getElementById("fibredyesone").style.width = "126px";
	
		document.getElementById("fibredyestwo").style.backgroundImage = "url('images/plates/dyes1/dyes2.png')";
		document.getElementById("fibredyestwo").style.height = "126px";
		document.getElementById("fibredyestwo").style.width = "126px";
	
		document.getElementById("fibredyesthree").style.backgroundImage = "url('images/plates/dyes1/dyes3.png')";
		document.getElementById("fibredyesthree").style.height = "126px";
		document.getElementById("fibredyesthree").style.width = "126px";
	
	
	
		document.getElementById("fibrepfcone").style.backgroundImage = "url('images/plates/pfc1/pfc1.png')";
		document.getElementById("fibrepfcone").style.height = "126px";
		document.getElementById("fibrepfcone").style.width = "126px";
	
		document.getElementById("fibrepfctwo").style.backgroundImage = "url('images/plates/pfc1/pfc2.png')";
		document.getElementById("fibrepfctwo").style.height = "126px";
		document.getElementById("fibrepfctwo").style.width = "126px";
	
		document.getElementById("fibrepfcthree").style.backgroundImage = "url('images/plates/pfc1/pfc3.png')";
		document.getElementById("fibrepfcthree").style.height = "126px";
		document.getElementById("fibrepfcthree").style.width = "126px";
	
		document.getElementById("fibrepfcfour").style.backgroundImage = "url('images/plates/pfc1/pfc4.png')";
		document.getElementById("fibrepfcfour").style.height = "126px";
		document.getElementById("fibrepfcfour").style.width = "126px";
	
		document.getElementById("fibrefourdum").style.backgroundImage = "url('images/plates/pfc.png')";
		document.getElementById("fibrefourdum").style.height = "126px";
		document.getElementById("fibrefourdum").style.width = "126px";
	
	
		document.getElementById("fibreonedum").style.backgroundImage = "url('images/plates/phtalate.png')";
		document.getElementById("fibreonedum").style.height = "126px";
		document.getElementById("fibreonedum").style.width = "126px";
	
		document.getElementById("fibrephtalateone").style.backgroundImage = "url('images/plates/phtalate1/phtalate1.png')";
		document.getElementById("fibrephtalateone").style.height = "126px";
		document.getElementById("fibrephtalateone").style.width = "126px";
	
		document.getElementById("fibrephtalatetwo").style.backgroundImage = "url('images/plates/phtalate1/phtalate2.png')";
		document.getElementById("fibrephtalatetwo").style.height = "126px";
		document.getElementById("fibrephtalatetwo").style.width = "126px";
	
		document.getElementById("fibrephtalatethree").style.backgroundImage = "url('images/plates/phtalate1/phtalate3.png')";
		document.getElementById("fibrephtalatethree").style.height = "126px";
		document.getElementById("fibrephtalatethree").style.width = "126px";
	
	
		document.getElementById("fibrethreedum").style.backgroundImage = "url('images/plates/metals.png')";
		document.getElementById("fibrethreedum").style.width = "167px";
		document.getElementById("fibrethreedum").style.height = "129px";
	
		document.getElementById("fibremetalsone").style.backgroundImage = "url('images/plates/metals1/metals1.png')";
		document.getElementById("fibremetalsone").style.height = "126px";
		document.getElementById("fibremetalsone").style.width = "126px";
	
		document.getElementById("fibremetalstwo").style.backgroundImage = "url('images/plates/metals1/metals2.png')";
		document.getElementById("fibremetalstwo").style.height = "126px";
		document.getElementById("fibremetalstwo").style.width = "126px";
	
		document.getElementById("fibremetalsthree").style.backgroundImage = "url('images/plates/metals1/metals3.png')";
		document.getElementById("fibremetalsthree").style.height = "126px";
		document.getElementById("fibremetalsthree").style.width = "126px";
	
	
		document.getElementById("fibrefivedum").style.backgroundImage = "url('images/plates/solvents.png')";
		document.getElementById("fibrefivedum").style.height = "127px";
		document.getElementById("fibrefivedum").style.width = "175px";
	
		document.getElementById("fibresolventone").style.backgroundImage = "url('images/plates/solvent1/solvent1.png')";
		document.getElementById("fibresolventone").style.height = "126px";
		document.getElementById("fibresolventone").style.width = "126px";
	
		document.getElementById("fibresolventtwo").style.backgroundImage = "url('images/plates/solvent1/solvent2.png')";
		document.getElementById("fibresolventtwo").style.height = "126px";
		document.getElementById("fibresolventtwo").style.width = "126px";
	
	
		document.getElementById("filmtwodum").style.backgroundImage = "url('images/plates/ldpe.png')";
		document.getElementById("filmtwodum").style.height = "125px";
		document.getElementById("filmtwodum").style.width = "173px";
	
		document.getElementById("filmldpeone").style.backgroundImage = "url('images/plates/ldpe1/ldpe.png')";
		document.getElementById("filmldpeone").style.height = "126px";
		document.getElementById("filmldpeone").style.width = "126px";
	
	
	
		document.getElementById("filmonedum").style.backgroundImage = "url('images/plates/phtalate.png')";
		document.getElementById("filmonedum").style.height = "126px";
		document.getElementById("filmonedum").style.width = "126px";
	
		document.getElementById("filmphtalateone").style.backgroundImage = "url('images/plates/phtalate1/phtalate1.png')";
		document.getElementById("filmphtalateone").style.height = "126px";
		document.getElementById("filmphtalateone").style.width = "126px";
	
		document.getElementById("filmphtalatetwo").style.backgroundImage = "url('images/plates/phtalate1/phtalate2.png')";
		document.getElementById("filmphtalatetwo").style.height = "126px";
		document.getElementById("filmphtalatetwo").style.width = "126px";
	
		document.getElementById("filmphtalatethree").style.backgroundImage = "url('images/plates/phtalate1/phtalate3.png')";
		document.getElementById("filmphtalatethree").style.height = "126px";
		document.getElementById("filmphtalatethree").style.width = "126px";
	
	
	
	
		document.getElementById("filmfourdum").style.backgroundImage = "url('images/plates/pvc.png')";
		document.getElementById("filmfourdum").style.height = "136px";
		document.getElementById("filmfourdum").style.width = "136px";
	
		document.getElementById("filmpvcone").style.backgroundImage = "url('images/plates/pvc1/pvc1.png')";
		document.getElementById("filmpvcone").style.height = "126px";
		document.getElementById("filmpvcone").style.width = "126px";
	
		document.getElementById("filmpvctwo").style.backgroundImage = "url('images/plates/pvc1/pvc2.png')";
		document.getElementById("filmpvctwo").style.height = "126px";
		document.getElementById("filmpvctwo").style.width = "126px";
	
		document.getElementById("filmpvcthree").style.backgroundImage = "url('images/plates/pvc1/pvc3.png')";
		document.getElementById("filmpvcthree").style.height = "126px";
		document.getElementById("filmpvcthree").style.width = "126px";
	
		document.getElementById("filmpvcfour").style.backgroundImage = "url('images/plates/pvc1/pvc4.png')";
		document.getElementById("filmpvcfour").style.height = "126px";
		document.getElementById("filmpvcfour").style.width = "126px";
	
		document.getElementById("filmpvcfive").style.backgroundImage = "url('images/plates/pvc1/pvc5.png')";
		document.getElementById("filmpvcfive").style.height = "126px";
		document.getElementById("filmpvcfive").style.width = "126px";
	
		document.getElementById("filmpvcsix").style.backgroundImage = "url('images/plates/pvc1/pvc6.png')";
		document.getElementById("filmpvcsix").style.height = "126px";
		document.getElementById("filmpvcsix").style.width = "126px";
	
		document.getElementById("filmpvcseven").style.backgroundImage = "url('images/plates/pvc1/pvc7.png')";
		document.getElementById("filmpvcseven").style.height = "126px";
		document.getElementById("filmpvcseven").style.width = "126px";
	
		document.getElementById("filmpvceight").style.backgroundImage = "url('images/plates/pvc1/pvc8.png')";
		document.getElementById("filmpvceight").style.height = "126px";
		document.getElementById("filmpvceight").style.width = "126px";
	
	
	
		document.getElementById("filmthreedum").style.backgroundImage = "url('images/plates/hdpe.png')";
		document.getElementById("filmthreedum").style.height = "129px";
		document.getElementById("filmthreedum").style.width = "167px";
		document.getElementById("filmthreedum").style.left = "354px";
	
		document.getElementById("filmhdpeone").style.backgroundImage = "url('images/plates/hdpe1/hdpe1.png')";
		document.getElementById("filmhdpeone").style.height = "126px";
		document.getElementById("filmhdpeone").style.width = "126px";
	
		document.getElementById("filmhdpetwo").style.backgroundImage = "url('images/plates/hdpe1/hdpe2.png')";
		document.getElementById("filmhdpetwo").style.height = "126px";
		document.getElementById("filmhdpetwo").style.width = "126px";
	
		document.getElementById("filmhdpethree").style.backgroundImage = "url('images/plates/hdpe1/hdpe3.png')";
		document.getElementById("filmhdpethree").style.height = "126px";
		document.getElementById("filmhdpethree").style.width = "126px";
	
		document.getElementById("filmhdpefour").style.backgroundImage = "url('images/plates/hdpe1/hdpe4.png')";
		document.getElementById("filmhdpefour").style.height = "126px";
		document.getElementById("filmhdpefour").style.width = "126px";
	
		document.getElementById("filmhdpefive").style.backgroundImage = "url('images/plates/hdpe1/hdpe5.png')";
		document.getElementById("filmhdpefive").style.height = "126px";
		document.getElementById("filmhdpefive").style.width = "126px";
	
		document.getElementById("filmhdpesix").style.backgroundImage = "url('images/plates/hdpe1/hdpe6.png')";
		document.getElementById("filmhdpesix").style.height = "126px";
		document.getElementById("filmhdpesix").style.width = "126px";
}
	
