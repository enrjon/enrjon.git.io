<?php
  require 'db.php';
  session_start();
?>

<!DOCTYPE html>

<html>
<head>
  <title>Test Site</title>
    <?php include 'css/css.html';?>
</head>
<?php
  if($_SERVER['REQUEST_METHOD'] == 'POST') {
    if(isset($_POST['login'])) {
      require 'login.php'
    }
  }
?>

</html>
