<?php
$counterFile = 'views.txt';

if (!file_exists($counterFile)) {
    file_put_contents($counterFile, '0');
}

$views = file_get_contents($counterFile);
$views++;
file_put_contents($counterFile, $views);

echo $views;
?>
