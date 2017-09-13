<div id="2face"></div>
<h1><i class="glyphicon glyphicon-cog"></i> Two Face Config</h1>

<div class="jumbotron">
<?php

$current_user = wp_get_current_user();

if ( !($current_user instanceof WP_User) )
    return;
echo '<div>';
echo 'Username: <p id="face_id">' . $current_user->user_login . '</p>';
echo 'Display Name: <p id="face_name">' . $current_user->display_name . '</p>';
echo '</div>';
?>
</div>

<br />

<div class="row col-md-12">
    <div class="col-md-6">
        <h2 class="pull-left">Take a snap</h2>
    </div>
    <div class="col-md-6">
        <h2>Your face here</h2>
    </div>
</div>
<div class="row col-md-12">
    <div class="col-md-4">
        <div id="my_camera" class="row"></div>
    </div>
    <div class="col-md-4">
        <div id="results" class="row">Your captured image will appear here...</div>
    </div>
</div>
<div class="row col-md-12">
    <div class="col-md-4">
        <form>
            <input class="btn btn-primary" id="takeSnapshot" type=button value="Take Snapshot">
        </form>
    </div>
    <div class="col-md-4">
        <form>
            <input class="btn btn-primary" id="submitFace" type=button value="Submit selfie">
            <input class="btn btn-primary" id="verifyFace" type=button value="Verify its you">
        </form>
    </div>
</div>

