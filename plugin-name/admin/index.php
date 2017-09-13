<div id="2face"></div>
<h1><i class="glyphicon glyphicon-cog"></i> Two Face Config</h1>

<div class="row jumbotron">
    <div class="row col-md-12">
        <div class="col-md-4 col-md-offset-2">
            <h2 class="pull-left">Take a snap</h2>
        </div>
        <div class="col-md-4">
            <h2>Your face here</h2>
        </div>
    </div>
    <div class="row col-md-12">
        <div class="col-md-4 col-md-offset-2">
            <div id="my_camera" class="row"></div>
        </div>
        <div class="col-md-4">
            <div id="results" class="row">Your captured image will appear here...</div>
        </div>
    </div>
    <div class="row col-md-12">
        <div class="col-md-4 col-md-offset-2">
            <form>
                <input class="btn btn-primary" id="takeSnapshot" type=button value="Take Snapshot">
                <input class="btn btn-primary" id="verifyFace" type=button value="Verify its you">
            </form>
        </div>
        <div class="col-md-4">
            <form>
                <input class="btn btn-primary" id="submitFace" type=button value="Submit Selfie">
            </form>
        </div>
    </div>
    <div class="row col-md-12 userDetails">
        <div class="col-md-4 col-md-offset-2">
            <?php

            $current_user = wp_get_current_user();

            if (!($current_user instanceof WP_User))
                return;
            echo '<div>';
            echo 'Username: <p id="face_id">' . $current_user->user_login . '</p>';
            echo 'Display Name: <p id="face_name">' . $current_user->first_name . ' ' . $current_user->last_name . '</p>';
            echo '</div>';
            ?>
        </div>
        <div id="found_face_box" class="col-md-4 hidden">
            <div class="col-md-6">
                Username: <p id="found_face_id"></p>
                Display Name: <p id="found_face_name"></p>
            </div>
            <div class="col-md-6 message">

            </div>
        </div>
        <div id="not_found_face_box" class="col-md-4 hidden">
            <div class="col-md-12 message">
            </div>
        </div>
    </div>

</div>