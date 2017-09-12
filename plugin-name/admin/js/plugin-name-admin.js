(function( $ ) {
	'use strict';

	/**
	 * All of the code for your admin-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
	if($('#2face').length === 0)
		return;

    Webcam.set({
        width: 320,
        height: 240,
        image_format: 'jpeg',
        jpeg_quality: 90
    });
    Webcam.attach( '#my_camera' );

    window.take_snapshot=function() {
        // take snapshot and get image data
        Webcam.snap( function(data_uri) {
            // display results in page
            document.getElementById('results').innerHTML =
                '<form id="face_submission">' +
                '<h2>Here is your image:</h2>' +
                '<img id="face_image" src="'+data_uri+'"/>' +
                '<div>' +
                '<input type="submit"/>' +
                '</div>' +
                '<form/>';

            $('#face_submission').submit(function(e) {
                e.preventDefault();

            	submitKnownFace();
            });

        } );


    };

     window.getBase64Image = function(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");

        return dataURL;
        // return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    };

	window.submitKnownFace = function() {
    	// pull out some shit
    	$.ajax({
            url: 'http://localhost:80/api/faces/',
            data: {
                'face_image': getBase64Image(document.getElementById('face_image')),
                'face_id': $('#face_id').html(),
                'face_name': $('#face_name').html(),
            },
            error: function(data) {
                console.log(data);
            },
            success: function(data) {
                console.log(data);
            },
            type: 'POST'


		})

	}




})( jQuery );
