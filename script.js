let thumb = document.getElementById('entireThumb');
let pumDark = document.getElementById('pumDark');
let StopButton = document.getElementById('StopButton');
let clock = document.getElementById('clock');
let timer = document.querySelector('.start'); // Select the timer element

let seconds = 0;
let interval;

document.addEventListener('keydown', function(e) {
    // Start or stop the timer when spacebar is pressed
    if (e.code === 'Space') {
        // Add animation classes to trigger animations
        thumb.classList.add('animationHand');
        pumDark.classList.add('pumDark');
        StopButton.classList.add('StopButton');
        clock.classList.add('clock');

        // Function to update the timer
        function updateTimer() {
            seconds++;
            let minutes = Math.floor(seconds / 60);
            let remainingSeconds = seconds % 60;
            timer.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        }

        // If interval already exists, stop and reset the timer
        if (interval) {
            clearInterval(interval); // Stop the existing timer
            interval = null; // Reset interval
            seconds = 0; // Reset time counter
            timer.textContent = '00:00'; // Reset the timer display
        } else {
            // Otherwise, start the timer
            interval = setInterval(updateTimer, 1000); // Start the timer
        }

        // Add event listeners to remove classes after animations
        thumb.addEventListener('animationend', function() {
            thumb.classList.remove('animationHand');
        });

        pumDark.addEventListener('animationend', function() {
            pumDark.classList.remove('pumDark');
        });

        StopButton.addEventListener('animationend', function() {
            StopButton.classList.remove('StopButton');
        });

        clock.addEventListener('animationend', function() {
            clock.classList.remove('clock');
        });
    }

    // Stop and reset the timer when 'r' is pressed
    if (e.code === 'KeyR') {
        stopAndResetTimer();
    }
});

// Stop and reset the timer function
function stopAndResetTimer() {
    if (interval) {
         // Add animation classes to trigger animations
         thumb.classList.add('animationHand');
         pumDark.classList.add('pumDark');
         StopButton.classList.add('StopButton');
         clock.classList.add('clock');



        clearInterval(interval); // Stop the existing timer
        interval = null; // Reset interval
        seconds = 0; // Reset time counter
        timer.textContent = '00:00'; // Reset the timer display
    }
}
