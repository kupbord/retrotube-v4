<!DOCTYPE html>
<?php include 'global.php';?>
<head>
	<link rel="stylesheet" type="text/css" href="./css/global.css">
</head>
<body>
	<?php
	include("header.php");
	?>
	<h2>FAQ</h2>
	<p>
	<h4>Q: What are my passwords hashed with?</h4>
	<p>A: All passwords are plaintext. (just kidding, its bcrypt lol)</p>
	<h4>Q: Help! I can't upload a video. When I try to upload it, it loads for a few seconds and then does nothing!</h4>
	<p>A: Try compressing the video. Server automatically does this, however that's after the file is uploaded, so you might still need to do it manually.</p>
	<h4>Q: What features will you add soon?</h4>
	<p>
	A: I'll add some more stuff soon I guess.<br><br>
	Contact server: https://discord.gg/rajbccdvmu<br>
	</p>
	<h4 id="verified">Q: How do I join the Verified Program?</h4>
	<p>A: You have to either be trusted by the Revid staff/community, or have atleast 100 total views on your channel (subject to change). For the latter, you can see it on the homepage while logged in.</p>
	<h4>Q: What are the benefits?</h4>
	<p>A: Your uploads will be compressed to 480p instead of 360p, and you get a verified badge on your profile.</p>
	<hr>
	<h2>Credits</h2>
	<h4>Original site - <em>tyre</em></h4>
	<h4>Current site - <em>kylarz</em></h4>
	<h4>Q: What did you do to the site?</h4>
	<p>A: I added ffmpeg to patched the uploader, added search, added randomized video strings, and patched some other vulnerabilities, among various other things.
    <?php include("footer.php") ?>
</body>
<?php $mysqli->close();?>