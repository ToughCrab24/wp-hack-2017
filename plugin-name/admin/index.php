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

<video id="myVideo" width="400" height="300" preload autoplay loop muted></video>
<br />
<button id="start" class="btn btn-primary">Start Tracking</button>
<button id="stop" class="btn btn-warning">Stop Tracking</button>