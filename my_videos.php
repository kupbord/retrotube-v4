<!DOCTYPE html>
<?php include 'global.php';?>
<?php include 'bancheck.php';?>
<head>
    <title>Your Videos - Revid</title>
	<link rel="stylesheet" type="text/css" href="./css/global.css">
	<link rel="stylesheet" type="text/css" href="./css/index.css">
    <link rel="stylesheet" type="text/css" href="./css/channels.css">
</head>
<body>
	<?php
	include("header.php");
    if(!isset($_SESSION['profileuser3'])) {
        echo('<script>
        window.location.href = "index.php";
        </script>');	
    }
	?>
	<h2>Your Videos</h2>
    <div class="container-flex">
    <div class="col-2-3">
	<?php
                    $statement = $mysqli->prepare("SELECT * FROM videos WHERE author = ? ORDER BY date DESC LIMIT 5");
                    $statement->bind_param("s", $_SESSION['profileuser3']);
                    $statement->execute();
                    $result = $statement->get_result();
                    if($result->num_rows !== 0){
                        while($row = $result->fetch_assoc()) {
                            if($row['duration'] > 3600) {
                                $lengthlist = floor($row['duration'] / 3600) . ":" . gmdate("i:s", $row['duration'] % 3600);
                              } else { 
                                $lengthlist = gmdate("i:s", $row['duration'] % 3600) ;
                              };
                            echo '
                                <div class="video container-flex">
                                    <div class="col-1-3 video-thumbnail">
                                    <a href="watch.php?v='.$row['vid'].'">
                                    <img onerror="this.src=\'comingsoon.png\'" src="content/thumb/' . $row['thumb'] . '">
                                    </a>
                                    </div>
                                    <div class="col-1-3 video-title"><a href="watch.php?v='.$row['vid'].'">'.$row['videotitle'].'</a><br><span style="font-size: 12px;">'.$row['description'].'</span></div>
                                    <div class="col-1-3 video-info">
                                        <div>From: <a href="profile.php?user='.$row['author'].'">'.$row['author'].'</a></div>
                                        <div>Views: <span>'.$row['views'].'</span></div>
                                        <div>Likes: <span>'.$row['likes'].'</span></div>
                                        <div>Time: <span><b>'.$lengthlist.'</b></span></div>
                                    </div>
                                </div>
                                <hr>';
                        }
                    }
                    else{
                        echo "It seems there are no videos here. Why don't you upload one?";
                    }
                    $statement->close();
                ?>
    </div>
    <div class="col-1-3">
    <div class="card message">
Editing comes later.
</div>
</div></div>
    <?php include("footer.php") ?>
</body>
<?php $mysqli->close();?>