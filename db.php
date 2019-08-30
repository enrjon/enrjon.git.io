<?php /*DB connect params*/

$host = 'localhost';
$dbname = 'learnsmart';
$user = 'postgres';
$pass = 'Enrjon12';
$port = 1900;

$dbconn = pg_connect("host='$host' port='$port' dbname='$dbname' user='$user' password='$pass'") or die('Could not connect: ' .pg_last_error());


?>
