var seconds = 0, minutes = 0,hours = 0,t,total =0,
	brk = false, done = true,
	audio = new Audio('./sound/twotones.wav');
	/*declare first user info*/
var user = {userName: "Robotboy1015", goldCoins: 5, productivePoints: 40,portraitPhoto:"https://avatarfiles.alphacoders.com/821/thumb-82166.png"};
	/*demo plan is plan4*/
var plan4 = {firstBreak:"0.0.5",secondBreak:"0.0.10",thirdBreak:"0.0.15",fourthBreak:"0.0.20",fifthBreak:"0.0.25",sixthBreak:"0.0.30",seventhBreak:"0.0.32",eighthBreak:"0.0.35"};

var plan3 = {firstBreak:"0.30.0",secondBreak:"1.0.0",thirdBreak:"1.30.0",fourthBreak:"2.0.0",fifthBreak:"2.30.0",sixthBreak:"3.0.0",seventhBreak:"3.5.0",eighthBreak:"3.10.0"};
var plan2 = {firstBreak:"0.30.0",secondBreak:"1.0.0",thirdBreak:"1.30.0",fourthBreak:"2.0.0",fifthBreak:"2.5.0",sixthBreak:"2.10.0"};
var plan1 = {firstBreak:"0.30.0",secondBreak:"1.0.0",thirdBreak:"1.5.0",fourthBreak:"1.10.0"};
	/*set plan4 as default */
var plan = plan4;	
	
/*carousel and modal script*/
$(document).ready(function(){
	$('.carousel').carousel();
	$('.modal').modal();
	$('.modal').modal({dismissible: false,});
	$('#modal2').modal({dismissible: true,});
	
	/*welcome, info, and settings*/
 	$('#modal1').modal('open');
 	
 	/*username and gold and PP and photo update on page load*/
 	$("#gold").html(user.goldCoins + " Gold");
 	$("#PP").html(user.productivePoints + " Productive Points");
 	$("#username").html(user.userName);
 	$("#usernamephoto").attr('src', user.portraitPhoto);;
 	
});	
/*if the user can afford it, take out a gold coin, otherwise alert that the user doesn't have enough'*/
$("#insertcoin").on("click", function(){
	if (user.goldCoins >= 1){
		user.goldCoins --;
	} else {
		nocoin();
	}
	$("#gold").html(user.goldCoins + " Gold");
	
});
/*if the user clicks the button, they get a free coin*/
$("#freecoin").on("click", function(){
	
		user.goldCoins ++;
		done = false;
	
	$("#gold").html(user.goldCoins + " Gold");
	
});
/*not enough coin to start timer*/
function nocoin(){
	alert("Oh, whoops. Looks like you don't have enough coins to keep playing or you have already finished.");
	done = false;
}

function alldone(){
	done = false;
}

/*add secounds and print out*/
function add(){
	seconds ++;
	if (seconds >= 60){
		seconds = 0;
		minutes ++;
		if (minutes >= 60){
			minutes = 0;
			hours ++;
		}
	}
	/*total is a cleaner vesion of what is printed out, it is used for the alert system*/
	total = hours +"."+ minutes +"." + seconds;

	
	
	$("#timer").html((hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds));

	timer();
}

/*timer add each second*/
function timer() {
	
	if (plan == plan1){
		
		// hour long game time
				/*check to see if it is time to stop, if not continue timing*/
		if (total == plan.firstBreak && brk == false){
			fifteenbreakt();
		}else if (total == plan.secondBreak && brk == true){
			firstbreak();
		}else if (total == plan.thirdBreak && brk == false){
			secondbreak();
		}else if (total == plan.fourthBreak && brk == true){
			thirdbreak();
		}else {
			 t = setTimeout(add, 1000);
		}
	}else if (plan == plan2){
		//2 hour long game time
						/*check to see if it is time to stop, if not continue timing*/
		if (total == plan.firstBreak && brk == false){
			fifteenbreakt();
		}else if (total == plan.secondBreak && brk == true){
			fifteenbreakf();
		}else if (total == plan.thirdBreak && brk == false){
			fifteenbreakt();
		}else if (total == plan.fourthBreak && brk == true){
			firstbreak();
		}else if (total == plan.fifthBreak && brk == false){
			secondbreak();
		}
		else if (total == plan.sixthBreak && brk == true){
			thirdbreak();
		}else {
			 t = setTimeout(add, 1000);
		}
	}else if (plan == plan3){
		//3 hour long game time
						/*check to see if it is time to stop, if not continue timing*/
		if (total == plan.firstBreak && brk == false){
			fifteenbreakt();
		}else if (total == plan.secondBreak && brk == true){
			fifteenbreakf();
		}else if (total == plan.thirdBreak && brk == false){
			fifteenbreakt();
		}else if (total == plan.fourthBreak && brk == true){
			fifteenbreakf();
		}else if (total == plan.fifthBreak && brk == false){
			fifteenbreakt();
		}else if (total == plan.sixthBreak && brk == true){
			firstbreak();
		}else if (total == plan.seventhBreak && brk == false){
			secondbreak();
		}
		else if (total == plan.eighthBreak && brk == true){
			thirdbreak();
		}else {
			 t = setTimeout(add, 1000);
		}		
	}else {
		
		/*check to see if it is time to stop, if not continue timing*/
		if (total == plan.firstBreak && brk == false){
			fifteenbreakt();
		}else if (total == plan.secondBreak && brk == true){
			firstbreak();
		}else if (total == plan.thirdBreak && brk == false){
			secondbreak();
		}else if (total == plan.fourthBreak && brk == true){
			thirdbreak();
		}else {
			 t = setTimeout(add, 1000);
		}		
	}
	

	
}


/* get the player's attention to get up and move*/
function fifteenbreakt (){
	//pause timer
	clearTimeout(t);
	//play a alert sound
	audio.play();
	//open a modal telling the user to get up and move
	$('#modal2').modal('open');
	
	//to make it open happen only once
	brk = true;
}
/* get the player's attention to get up and move*/
function fifteenbreakf (){
	//pause timer
	clearTimeout(t);
	//play a alert sound
	audio.play();
	//open a modal telling the user to get up and move
	$('#modal2').modal('open');
	
	//to make it open happen only once
	brk = false;
}
//open modal and if they click all done, reward.
function firstbreak (){
	//pause timer
	clearTimeout(t);
	//play a alert sound
	audio.play();
	//open a modal telling the user to pay or be done
	$('#modal3').modal('open');
	//to make it open happen only once
	brk = false;
}
//open a modal and either click alldone and no reward or pay more.
function secondbreak (){
	//pause timer
	clearTimeout(t);
	//play a alert sound
	audio.play();
	//open a modal telling the user to pay or be done
	$('#modal5').modal('open');
	//to make it open happen only once
	brk = true;
}
//open a modal telling the player to be done
function thirdbreak (){
	//pause timer
	clearTimeout(t);
	//reset timer
	$("#timer").html("00:00:00");
	seconds = 0;
	minutes = 0;
	hours = 0;
	//play a alert sound
	audio.play();
	//open a modal telling the user to be done
	$('#modal6').modal('open');
	//to make it open happen only once
	brk = false;
}


/*Start*/
$("#start").on("click", function(){
	if (done){
		timer();
	} else {
		nocoin();
	}	
});
/*Stop*/
$("#stop").on("click",  function() {
	clearTimeout(t);
});
/*Reset*/
$("#reset").on("click",  function() {
	$("#timer").html("00:00:00");
	seconds = 0;
	minutes = 0;
	hours = 0;
});

/*finish */
$("#alldone").on("click",  function() {
	//pause timer
	clearTimeout(t);
	if (done){
		//open a modal telling the use they got a coin
		$('#modal4').modal('open');
	}

	//to make it open happen only once
	brk = true;
});

				/*Plan selector*/
/*set plan 1 which is one hour*/
function onehourPlan () {
  plan = plan1;
  	/*open tutorial*/
 	$('#modal7').modal('open');
}
/*set plan 2 which is one hour*/
function twohourPlan () {
  plan = plan2;
  	/*open tutorial*/
 	$('#modal7').modal('open');  
}
/*set plan 3 which is one hour*/
function threehourPlan () {
  plan = plan3;
  	/*open tutorial*/
 	$('#modal7').modal('open');  
}
/*set plan demo which is 30 seconds*/
function demoPlan () {
  plan = plan4;
  	/*open tutorial*/
 	$('#modal7').modal('open');  
}

			/*tutorial buttons*/
//open second page 
function nextModal(){
	 /*open pageabout the profile*/
 	$('#modal8').modal('open'); 
}
//open third page 
function nextModal2(){
	 /*open page about logging work time*/
 	$('#modal9').modal('open'); 
}
//open fourth page 
function nextModal3(){
	 /*open page about friends achievment*/
 	$('#modal10').modal('open'); 
}
//open the last page 
function nextModal3(){
	 /*open page about thier recent achievment*/
 	$('#modal11').modal('open'); 
}


				/*productive points*/
/*button function*/
$("#submitP").on("click",  function() {
	/* 1 = art, 2 = homework, 3 = work, 4 = exercise*/
	var radioValue = $("input[name='group1']:checked").val(),
		hinput = $("#htime"),
		minput = $("#mtime"),
		htimeValue = hinput.val(),
		mtimeValue = minput.val(),
		inth = parseInt(htimeValue),
		intm = parseInt(mtimeValue),
		totalm = (inth * 60) + intm,
		newpp = parseInt(totalm/20);
		user.productivePoints = user.productivePoints +newpp;

	$("#PP").html(user.productivePoints + " Productive Points");
		
	
	if (radioValue == undefined && htimeValue == "" && mtimeValue == ""){
		alert("Please select the type of activity and how long you did it, enter the hours and minutes separately.");
	} else if (htimeValue == "" && mtimeValue == ""){
		alert("Please enter how long you did this activity");
	}else if (radioValue == undefined){
		alert("Please select the type of activity you would like to log");
	} else if (htimeValue == ""){
		alert("Please enter how many hours you did this activity");
	} else if (mtimeValue == ""){
		alert("Please enter how many minutes you did this activity");
	}else {
		if (radioValue == 1){
			 Materialize.toast(inth + ' hours and ' + intm + ' minutes'+ ' of Creative logged ', 3000);
			 $('input[name=group1]').attr('checked',false);
			 hinput.val('');
			 minput.val('');
		}else if (radioValue == 2){
			 Materialize.toast(inth + ' hours and ' + intm + ' minutes'+ ' of Homework logged ', 3000);
			 $('input[name=group1]').attr('checked',false);
			 hinput.val('');
			 minput.val('');
		}else if (radioValue == 3){
			 Materialize.toast(inth + ' hours and ' + intm + ' minutes' + ' of Chores logged ', 3000);
			 $('input[name=group1]').attr('checked',false);
			 hinput.val('');
			 minput.val('');
		}else if (radioValue == 4){
			 Materialize.toast(inth + ' hours and ' + intm + ' minutes' + ' of Exercise logged ', 3000);
			 $('input[name=group1]').attr('checked',false);
			 hinput.val('');
			 minput.val('');
		}
	}
	    
});





