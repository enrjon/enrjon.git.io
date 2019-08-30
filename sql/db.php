<?php /*DB connect params*/

/*$host = 'localhost';
$user = 'root';
$pass = 'Enrjon12';
$db = 'learnsmart';
$mysqli = new mysqli($host,$user,$pass,$db) or die($mysqli->error);*/

$host = 'localhost';
$dbname = 'learnsmart';
$user = 'postgres';
$pass = 'Enrjon12';
$port = 1900;

$dbconn = pg_connect("host='$host' port='$port' dbname='$dbname' user='$user' password='$pass'") or die('Could not connect: ' .pg_last_error());


?>
