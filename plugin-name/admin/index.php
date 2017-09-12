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


<div id="results">Your captured image will appear here...</div>


<div id="my_camera"></div>

<form>
    <input type=button value="Take Snapshot" onClick="take_snapshot()">
</form>

