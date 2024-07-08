// Side menu
function openNav() {
  document.getElementById("sideMenu").style.width = "250px";
}
function closeNav() {
  document.getElementById("sideMenu").style.width = "0";
}

// Accordion click event
$(document).ready(function() {
  $('.accordion .btn-link').on('click', function() {
      var target = $(this).attr('data-target');
      var isExpanded = $(target).hasClass('show');

      // Close all open sections
      $('.collapse.show').collapse('hide');
      
      // Open the clicked section if it's not already expanded
      if (!isExpanded) {
          $(target).collapse('show');
      }
  });
});

$(document).ready(function() {
  // Set the date we're counting down to (example: New Year's day)
  var countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

  var x = setInterval(function() {
      // Get the current date and time
      var now = new Date().getTime();

      // Calculate the distance between now and the countdown date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the HTML elements
      $("#days").text(days.toString().padStart(2, '0').slice(-2));
      $("#hours").text(hours.toString().padStart(2, '0').slice(-2));
      $("#minutes").text(minutes.toString().padStart(2, '0').slice(-2));
      $("#seconds").text(seconds.toString().padStart(2, '0').slice(-2));

      // If the countdown is over, display a message
      if (distance < 0) {
          clearInterval(x);
          $("#days").text('00');
          $("#hours").text('00');
          $("#minutes").text('00');
          $("#seconds").text('00');
          // Here you can add what happens when the countdown finishes
      }
  }, 1000);
});

  // Form submission handling
  $('#joinForm').submit(function(event) {
    event.preventDefault();
    // Process form submission here (e.g., send data to server)
    alert('Form submitted!');
    // Clear form fields after submission
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
});