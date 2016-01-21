'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function projectClick(e) { 
	//console.log("Project clicked");
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    //$(this).css("background-color", "#7fff00");

    // In an event listener, $(this) is the element that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    console.log("Number of matching items:" + jumbotronHeader.length);
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    var image = $(containingProject).find(".img");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       
       $(description).fadeOut();
       $(image).fadeOut(); 
       $(description).toggle();
       $(image).toggle();


    }

}

function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
  $("#submitBtn").click(updateProject); 
}

function updateProject(e) {
  var projectID = $('#project').val();
  $(projectID).animate({
    width: $('#width').val()
  });

  var newText = $('#description').val();
  $(projectID + " .project-description").text(newText);
}