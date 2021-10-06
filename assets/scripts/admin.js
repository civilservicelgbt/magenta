// GET THE POST TYPE

	const generator = document.getElementById("post-generator");
	const postType = generator.dataset.posttype;

// GET THE FIELDS

	// Post title and summary

		// Title
		var postTitle = document.getElementById("post-title");

		// Excerpt
		var postExcerpt = document.getElementById("post-excerpt");

	// Post author

		// Author
		var postAuthor = document.getElementById("post-author");

	// Post publication date

		// Day
		var postPublishDay = document.getElementById("post-day");

		// Month
		var postPublishMonth = document.getElementById("post-month");

		// Year
		var postPublishYear = document.getElementById("post-year");

	// Post topics

		// Topic
		var postTopic = document.getElementById("post-topic");

	// Team member details

		// Role
		var postTeamMemberRole = document.getElementById("post-team-member-role");

		// Project
		var postTeamMemberProject = document.getElementById("post-team-member-project");

		// Region
		var postTeamMemberRegion = document.getElementById("post-team-member-region");

		// Email
		var postTeamMemberEmail = document.getElementById("post-team-member-email");

	// Event start date

		// Day
		var postEventStartDay = document.getElementById("post-event-start-day");

		// Month
		var postEventStartMonth = document.getElementById("post-event-start-month");

		// Year
		var postEventStartYear = document.getElementById("post-event-start-year");

		// Hour
		var postEventStartHour = document.getElementById("post-event-start-hour");

		// Minute
		var postEventStartMinute = document.getElementById("post-event-start-month");

	// Event registration closing date

		// Day
		var postEventRegistrationCloseDay = document.getElementById("post-event-registration-end-day");

		// Month
		var postEventRegistrationCloseMonth = document.getElementById("post-event-registration-end-month");

		// Year
		var postEventRegistrationCloseYear = document.getElementById("post-event-registration-end-year");

		// Hour
		var postEventRegistrationCloseHour = document.getElementById("post-event-registration-end-hour");

		// Minute
		var postEventRegistrationCloseMinute = document.getElementById("post-event-registration-end-month");

	// Event registration info

		// Form URL
		var postEventFormURL = document.getElementById("post-registration-form");

		// Email
		var postEventEmail = document.getElementById("post-registration-email");

		// No register message
		var postEventNoRegMessage = document.getElementById("post-registration-message");

	// Event location

		// Location
		var postEventLocation = document.getElementById("post-registration-location");

	// Consultation end date

		// Day
		var postConsultationEndDay = document.getElementById("post-consultation-end-day");

		// Month
		var postConsultationEndMonth = document.getElementById("post-consultation-end-month");

		// Year
		var postConsultationEndYear = document.getElementById("post-consultation-end-year");

		// Hour
		var postConsultationEndHour = document.getElementById("post-consultation-end-hour");

		// MinutConsultationEnd
		var postConsultationEndMinute = document.getElementById("post-consultation-end-month");

	// Consultation details

		// Website
		var postConsultationWebsite = document.getElementById("post-consultation-link");

	// Images and videos

		// Image URL
		var postImage = document.getElementById("post-image");

		// Video URL
		var postVideo = document.getElementById("post-video");

	// Permalinks

		// Permalink
		var postPermalink = document.getElementById("post-permalink");

			// When title is updated, auto update the permalink

		// Redirect From
		var postRedirectFrom = document.getElementById("post-redirect-from");

		// Redirect To
		var postRedirectTo = document.getElementById("post-redirect-to");

	// Body content

		var postContent = document.getElementById("post-content");

// GENERATE THE CONTENT
function generateJekyllPostContent() {

	// Create a variable to hold the post output
	var jekyllPost = "";

	// Add in the relevant fields...

		jekyllPost += "---\n"; // Need the front matter to be surrounded by 3 dashes on a new line

		jekyllPost += "title: " + postTitle.value + "\n";
		jekyllPost += "excerpt: " + postExcerpt.value + "\n";


	if (postType == "news") {
		jekyllPost += "date: " + postPublishYear.value + "-" + postPublishMonth.value + "-"  + postPublishDay.value + "\n";
		jekyllPost += "author: " + postAuthor.value + "\n";
		jekyllPost += "category: \n- " + postTopic.value + "\n";

		jekyllPost += "image: " + postImage.value + "\n";
		jekyllPost += "video: " + postVideo.value + "\n";

		jekyllPost += "permalink: \n- " + postPermalink.value + "\n";
		jekyllPost += "redirect_from: \n- " + postRedirectFrom.value + "\n";
		jekyllPost += "redirect_to: \n- " + postRedirectTo.value + "\n";
	}

	if (postType == "event") {
		jekyllPost += "date: " + postPublishYear.value + "-" + postPublishMonth.value + "-"  + postPublishDay.value + "\n";
		jekyllPost += "author: " + postAuthor.value + "# The 'author' is the host of the event \n";
		jekyllPost += "category: \n- " + postTopic.value + "\n";
		jekyllPost += "link: " + postEventFormURL.value + "\n";
		jekyllPost += "email: " + postEventEmail.value + "\n";
		jekyllPost += "no-register: " + postEventNoRegMessage.value + "\n";
		jekyllPost += "location: " + postEventLocation.value + "\n";

		jekyllPost += "event-date: " + postEventStartYear.value + "-" + postEventStartMonth.value + "-"  + postEventStartDay.value + " " + postEventStartHour.value + ":" + postEventStartMinute.value + "\n";

		jekyllPost += "registration-close-date: " + postEventRegistrationCloseYear.value + "-" + postEventRegistrationCloseMonth.value + "-"  + postEventRegistrationCloseDay.value + " " + postEventRegistrationCloseHour.value + ":" + postEventRegistrationCloseMinute.value + "\n";

		jekyllPost += "image: " + postImage.value + "\n";
		jekyllPost += "video: " + postVideo.value + "\n";

		jekyllPost += "permalink: \n- " + postPermalink.value + "\n";
		jekyllPost += "redirect_from: \n- " + postRedirectFrom.value + "\n";
		jekyllPost += "redirect_to: \n- " + postRedirectTo.value + "\n";
	}

	if (postType == "publication") {
		jekyllPost += "date: " + postPublishYear.value + "-" + postPublishMonth.value + "-"  + postPublishDay.value + "\n";
		jekyllPost += "author: " + postAuthor.value + "\n";
		jekyllPost += "category: \n- " + postTopic.value + "\n";

		jekyllPost += "image: " + postImage.value + "\n";
		jekyllPost += "video: " + postVideo.value + "\n";

		jekyllPost += "permalink: \n- " + postPermalink.value + "\n";
		jekyllPost += "redirect_from: \n- " + postRedirectFrom.value + "\n";
		jekyllPost += "redirect_to: \n- " + postRedirectTo.value + "\n";
	}

	if (postType == "consultation") {
		jekyllPost += "date: " + postPublishYear.value + "-" + postPublishMonth.value + "-"  + postPublishDay.value + "\n";
		jekyllPost += "author: " + postAuthor.value + "\n";
		jekyllPost += "category: \n- " + postTopic.value + "\n";
		jekyllPost += "consultation-link: " + postConsultationWebsite.value + "\n";
		jekyllPost += "end-date: " + postConsultationEndYear.value + "-" + postConsultationEndMonth.value + "-"  + postConsultationEndDay.value + " " + postConsultationEndHour.value + ":" + postConsultationEndMinute.value + "\n";

		jekyllPost += "image: " + postImage.value + "\n";
		jekyllPost += "video: " + postVideo.value + "\n";

		jekyllPost += "permalink: \n- " + postPermalink.value + "\n";
		jekyllPost += "redirect_from: \n- " + postRedirectFrom.value + "\n";
		jekyllPost += "redirect_to: \n- " + postRedirectTo.value + "\n";
	}

	if (postType == "topic") {
		jekyllPost += "category: \n- " + postTopic.value + "\n";

		jekyllPost += "image: " + postImage.value + "\n";

		jekyllPost += "permalink: \n- " + postPermalink.value + "\n";
		jekyllPost += "redirect_from: \n- " + postRedirectFrom.value + "\n";
		jekyllPost += "redirect_to: \n- " + postRedirectTo.value + "\n";
	}

	if (postType == "team") {
		jekyllPost += "role: " + postTeamMemberRole.value + "\n";
		jekyllPost += "project: " + postTeamMemberProject.value + "\n";
		jekyllPost += "region: " + postTeamMemberRegion.value + "\n";
		jekyllPost += "email: " + postTeamMemberEmail.value + "\n";
	}

		jekyllPost += "---\n\n"; // Need the front matter to be surrounded by 3 dashes on a new line

		jekyllPost += postContent.value;

	// Output the content

	return jekyllPost;

}

// GENERATE AN EMAIL

	// Get the content

	// Create an email

// DOWNLOAD A FILE

	// Get the content

	// Create a file

// COPY TO CLIPBOARD

	// Get the content

	// Copy to clipboard

// ADD TO GITHUB

	// Open the GitHub window

	// Get the file name

	// Copy the filename

	// Switch back to GitHub

	// Get the content

	// Copy the post content

	// Switch back to GitHub

// TESTS

	function test() {
		var output = generateJekyllPostContent();
		alert(output);
	}