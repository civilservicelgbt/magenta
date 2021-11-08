// GET THE SELECTED CONTENT

	var notifyService = document.getElementById("service-identifier").value;
	var mailingListService = document.getElementById("mailing-identifier-service").value;
	var mailingListTab = document.getElementById("mailing-identifier-tab").value;

// GENERATE THE NOTIFY CONTENT

	function generateNotifyEmail(type) {

		// Create a variable to hold the post output
		var jekyllPost = "";

		if (type == "updates") {
				jekyllPost += ""
		} else if (type == "events") {
				jekyllPost += ""
		} else {
			alert("An error occured.\n\nEmail types not specified.")
		}

		// Output the content

		return jekyllPost;

	}

// COPY TO CLIPBOARD

	function postContentToClipboard(){
		var output = generateJekyllPostContent();
		navigator.clipboard.writeText(output);
	}

	function fieldContentToClipboard(el){
		/* Get the text field */
		var output = document.getElementById(el).value;
		if (output == "") {
			alert("ERROR\n\nCannot copy.\n\nThe text field you are trying to copy is empty.");
		} else {
		/* Copy the text inside the text field */
			navigator.clipboard.writeText(output);
		}
	}

// WINDOWS

	// Open the Notify window
	function openNotify(destination) {
		var notifyURL = checkDestination(destination);
	  var browserWindow = window.Notify = window.open(notifyURL, "Send an email with GOV.UK Notify");
	}

	// Open the ML window
	function openMailingList() {
		var mailingListURL = checkDestination("ml")
	  var browserWindow = window.MailingList = window.open(mailingListURL, "Mailing list");
	}

	// Switch back to Notify
	function focusNotify(destination) {
		var notifyURL = checkDestination(destination);
		if (!window.Notify || window.Notify.closed) {
			window.Notify = window.open(notifyURL, "Send an email with GOV.UK Notify");
		}
		window.Notify.focus();
	}

	// Switch back to ML
	function focusMailingList() {
		var mailingListURL = checkDestination("ml")
		if (!window.MailingList || window.MailingList.closed) {
			window.MailingList = window.open(mailingListURL, "Mailing list");
		}
		window.MailingList.focus();
	}

	function checkDestination(destination) {
    if (destination == "login") {
			var url = "https://www.notifications.service.gov.uk/sign-in";
		} else if (destination == "new-template") {
			var url = "https://www.notifications.service.gov.uk/services/" + notifyService + "/templates/add-email";
		} else if (destination == "ml") {
			var url = "https://docs.google.com/spreadsheets/d/" + mailingListService + "/edit#gid=" + mailingListTab;
		} else {
			var url = "https://www.notifications.service.gov.uk/services/" + notifyService + "/templates";
		}
		return url
	}

	// Step by step toggles
	function switchStep(hide, show) {
		var hideThis = document.getElementById(hide);
		var showThis = document.getElementById(show);

		hideThis.hidden = true;
		showThis.hidden = false;
	}