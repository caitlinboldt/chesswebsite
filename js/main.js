//first name
//last name
// age in years
// alert 1-greeting 2-full name 3- age in months 4- age in days

// var firstName = prompt('What is your first name?');
// var lastName = prompt('What is your last name?');
// var ageYear = prompt('How old are you?');

// var ageMonth = ageYear * 12
// var ageDays = ageYear * 365

// alert(`Hello and welcome to the site ${firstName} ${lastName}. Your age in months is ${ageMonth} and in days is ${ageDays}`);


	/*------------------
		CONTACT FORM
	--------------------*/
	$('#contact-form').on('submit', function() {
		var send_btn = $('#send-form'),
			form = $(this),
			formdata = $(this).serialize(),
			chack = $('#form-chack');
			send_btn.text('Wait...');

		function reset_form(){
		 	$("#name").val('');
			$("#email").val('');
			$("#massage").val('');
		}

		$.ajax({
			url:  $(form).attr('action'),
			type: 'POST',
			data: formdata,
			success : function(text){
				if (text == "success"){
					send_btn.addClass('done');
					send_btn.text('Success');
					setTimeout(function() {
						reset_form();
						send_btn.removeClass('done');
						send_btn.text('Send Massage');
					}, 3000);
				}
				else {
					reset_form();
					send_btn.addClass('error');
					send_btn.text('Error');
					setTimeout(function() {
						send_btn.removeClass('error');
						send_btn.text('Send Massage');
					}, 5000);
				}
			}
		});
		return false;
	});

