<header>
	<style type="text/css">

	.upload{
			display: inline-block;
			font-size: 14px;
			margin: -3px 5px;
			position: absolute;
			right: 0;
		}
		.menu-element{
			display: inline-block;
			font-size: 14px;
			margin: 5px;
			position: absolute;
			right: 0;
		}
		header{
			position: relative;
		}
		.header-buttons{
			margin: 0px 20%;
		}
		/* .header-button{
	        cursor: pointer;
	        color: var(--main-a);
	        font-weight: bold;
	        font-size: 13px;
	        padding: 6px 33px;
	        border-radius: 3px 3px 0 0;
	        border: 1px solid var(--header-border);
          background:  linear-gradient(var(--header-button-1), var(--header-button-2));
	        border-bottom: 0px;
	        text-align: center;
	        margin: 0px 5px;
	        text-decoration: none;
	    } */
		.header-button {
    cursor: pointer;
    color: var(--main-a) !important;
    font-weight: bold;
    font-size: 14px;
    padding: 6px 33px;
    border-radius: 3px 3px 0 0;
    border: 1px solid var(--header-border);
    background: linear-gradient(var(--header-button-1), var(--header-button-2));
    border-bottom: 0px;
    text-align: center;
    margin: 0px 4px;
    text-decoration: none;
    text-shadow: 1px 1px 0px white;
}
.header-buttongray {
    cursor: pointer;
    color: var(--gray-a) !important;
    font-weight: bold;
    font-size: 14px;
    padding: 6px 33px;
    border-radius: 3px 3px 0 0;
    border: 1px solid var(--header-borderg);
    background: linear-gradient(var(--header-buttong-1), var(--header-buttong-2));
    border-bottom: 0px;
    text-align: center;
    margin: 0px 4px;
    text-decoration: none;
    text-shadow: 1px 1px 0px white;
}
	    .brand-logo:{
				display: block;
	    }
      .lgoolol {
      	margin-bottom: -25px;
      }

.pobygo {
margin-bottom:-30px;
}
.pbg {
margin-left: 682px;
}
.test {
margin-left: -770px;
}

		.brand-logo > img{
			content: var(--rlogo);
		}
	</style>
	<a class="brand-logo" href="."><img class="lgoolol" src="revidcr.png"></a>
	<?php
                    $statement = $mysqli->prepare("SELECT * FROM inbox WHERE reciever = ? AND `is_read` = 0");
                $statement->bind_param("s", $_SESSION['profileuser3']);
                $statement->execute();
                $result = $statement->get_result();
                $unread = $result->num_rows;
					?>
	<?php
      if(!$loggedIn) {
        echo '<div class="menu-element"><strong><a href="./aregister.php">Sign Up</a></strong> | <a href="./alogin.php">Login</a> | <a href="./help.php">Help</a></div>';
      } else {
        $statement = $mysqli->prepare("SELECT * FROM users WHERE username = ? LIMIT 1");
			    $statement->bind_param("s", $_SESSION['profileuser3']);
			    $statement->execute();
			    $result = $statement->get_result();
			    if($result->num_rows === 0) exit('No rows');
			    while($row = $result->fetch_assoc()) {
			        /* echo "<div class=\"menu-element\"><strong>Hello, <a href=\"./profile.php?user=".$row["username"]."\">".$row["username"]."</a></strong> | <a href=\"./account.php\">Account</a> | <a href=\"./#\">History</a> | <a href=\"./help.php\">Help</a> | <a href=\"./alogout.php\">Log Out</a> | <a href=\"./#\">Site: <img src='en.png'></img></a></div>";*/
					echo '<div class="menu-element"><a href="my_videos.php"><img style="margin-right:3px;margin-bottom:-2px;" src="img/my_videos.png"></a> <a href="./profile.php?user='.$row['username'].'">'.$row['username'].'</a>  | <img style="margin-bottom:-1px;" src="img/mail.gif"> (<a href="/inbox">'.$unread.'</a>) | <a href="account.php">Account</a> | <a href="#">QuickList</a> (0) | <a href="help.php">Help</a> | <a href="alogout.php">Sign Out</a></div>';
			    }
			    $statement->close();
      }
    ?>


	<div class="cheader">
	    <a href="./">Home</a> | <a href="./videos.php">Videos</a> | <a href="./channels.php">Channels</a> | <a href="./community.php">Community</a> | <a href="./upload.php">Upload</a>
	</div>