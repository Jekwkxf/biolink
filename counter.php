<?php
// File to store the view count
$counterFile = 'views.txt';

// Check if the file exists, if not, create it with a default count of 0
if (!file_exists($counterFile)) {
    file_put_contents($counterFile, '0');
}

// Read the current view count
$views = file_get_contents($counterFile);

// Increment the view count
$views++;

// Write the updated view count back to the file
file_put_contents($counterFile, $views);

// Output the view count
echo $views;
?>
