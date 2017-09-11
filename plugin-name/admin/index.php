<h1><i class="glyphicon glyphicon-cog"></i> Two Face Config</h1>

<div class="jumbotron">
<?php

$current_user = wp_get_current_user();

if ( !($current_user instanceof WP_User) )
    return;

/**
 * @example Safe usage: $current_user = wp_get_current_user();
 * if ( !($current_user instanceof WP_User) )
 *     return;
 */
echo 'You are: ' . $current_user->user_login . '<br />';

?>
</div>

<br />

<div id="results">Your captured image will appear here...</div>

<h1>WebcamJS Test Page</h1>
<h3>Demonstrates simple 320x240 capture &amp; display</h3>

<div id="my_camera"></div>

<form>
    <input type=button value="Take Snapshot" onClick="take_snapshot()">
</form>