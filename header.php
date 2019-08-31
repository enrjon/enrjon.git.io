<!DOCTYPE html>
<html>
<head>
  <meta charset = "utf-8">
  <meta name = "description" content = "Enrique's practice site for experimenting with web scripting.">
  <meta name = viewport content="width=device-width, initial-scale=1">
  <title></title>
  <link rel="stylesheet" href="css/style.css">
  <?php //include 'css/css.html';?>
</head>
  <header>
      <nav class = "nav-content">
        <a>
            <img src = "img/logo.png" alt = "logo">
        </a>
        <ul class="nav-left">
            <li><a href = "index.php">Home</a></li>
            <li><a href = "">Nav Tab 1</a></li>
            <li><a href = "">Nav Tab 2</a></li>
            <li><a href = "">Nav Tab 3</a></li>
        </ul>
        <div class="nav-right">
            <div class="tab-content">
                <div id="login">
                    <h1>Welcome to BaseSite!</h1>
                    <h3 class="required-header">* - Required</h3>
                    <form action="includes/login.php" method = "post">
                        <div class="field-wrap">
                            <label>
                                Email Address<span class="required-header">*</span>
                            </label>
                            <input type="email" required autocomplete="off" name="email"/>
                        </div>
                        <div class="field-wrap">
                            <label>
                                Password<span class="required-header">*</span>
                            </label>
                            <input type="password" required autocomplete="off" name="password"/>
                        </div>
                        <p class="forgot">
                            <a href="forgot.php">
                                Forgot Password?
                            </a>
                        </p>
                        <button class="button button-block" name="login"/>Log In</button>
                    </form>
                </div>

                <div id="register">
                    <h1>Register for an Account</h1>
                    <h3 class="required-header">* - Required</h3>
                    <form action="includes/register.php" method = "post">
                        <div class="field-wrap">
                            <label>
                                Name<span class="required-header"></span>
                            </label>
                            <input type="text" required autocomplete="on" name="name"/>
                        </div>
                        <div  class="field-wrap">
                            <label>
                                Email Address<span class="required-header"></span>
                            </label>
                            <input type="email" required autocomplete="on" name="email"/>
                        </div>
                        <div class="field-wrap">
                            <label>
                                Choose A Password
                            </label>
                            <input type="password" required autocomplete="off" name="password"/>
                        </div>

                        <button class="button button-block" name="register"/>Register</button>
                    </form>
                    <ul>
                        <li class="tab"><a href="#register">Register</a></li>
                        <li class="tab active"><a href="#login">Log In</a></li>
                    </ul>
                </div>

                <form action="includes/logout.php" method="post">
                    <button type="submit" name="logout-submit">Log Out</button>
                </form>

            </div>
        </div>
      </nav>
      <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'>
      </script>

      <script src="js/index.js"></script>
  </header>
