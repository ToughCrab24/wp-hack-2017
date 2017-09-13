(function( $ ) {
	'use strict';

	if($('#2face').length === 0)
		return;

    Webcam.set({
        width: 320,
        height: 240,
        image_format: 'jpeg',
        jpeg_quality: 90
    });
    Webcam.attach( '#my_camera' );

    window.take_snapshot = function () {
        // take snapshot and get image data
        Webcam.snap(function (data_uri) {
            // display results in page
            document.getElementById('results').innerHTML =
                '<form id="face_submission">' +
                '<img id="face_image" src="'+data_uri+'"/>' +
                '<div>' +
                // '<input type="submit"/>' +
                '</div>' +
                '<form/>';
        });


    };

	window.submitKnownFace = function() {
    	// pull out some shit
    	$.ajax({
            url: 'http://localhost:80/api/faces/',
            data: {
                'face_image': document.getElementById('face_image').src,
                'face_id': $('#face_id').html(),
                'face_name': $('#face_name').html()
            },
            error: function(data) {
                console.log(data);
            },
            success: function(data) {
                console.log(data);
            },
            type: 'POST'
		})
	};

    window.verifyYourFace = function() {
        Webcam.snap(function (data_uri) {
            $.ajax({
                url: 'http://localhost:80/api/recognition/',
                data: {
                    'face_image': data_uri
                },
                error: function(data) {

                    document.getElementById('results').innerHTML =
                        '<div>' +
                        '<img id="face_image" src="'+data_uri+'"/>' +
                        '</div>';

                    $('#found_face_box').addClass('hidden');
                    $('#not_found_face_box').removeClass('hidden');
                    $('#not_found_face_box .message').html("We cannot verify this face");
                    console.log(data);
                },
                success: function(data) {

                    document.getElementById('results').innerHTML =
                        '<div>' +
                            '<img id="face_image" src="'+data_uri+'"/>' +
                        '</div>';

                    if(data.is_match && data.matches[0].face_id === $('#face_id').html()) {
                        $('#not_found_face_box').addClass('hidden');
                        $('#found_face_box').removeClass('hidden');
                        $('#found_face_id').html(data.matches[0].face_id);
                        $('#found_face_name').html(data.matches[0].face_name);
                        $('#found_face_box .message').html(data.message);
                    } else if(data.is_match && data.matches[0].face_id !== $('#face_id').html()) {
                        $('#found_face_box').addClass('hidden');
                        $('#not_found_face_box').removeClass('hidden');
                        $('#not_found_face_box .message').html(
                            '<h3>' + data.matches[0].face_name + ' is NOT authorized</h3>');
                    } else {
                        $('#found_face_box').addClass('hidden');
                        $('#not_found_face_box').removeClass('hidden');
                        $('#not_found_face_box .message').html(data.message);
                    }


                    console.log(data);
                },
                type: 'POST'
            })
        });
    };

	$('#takeSnapshot').on('click', take_snapshot);
	$('#verifyFace').on('click', verifyYourFace);

    $('#submitFace').on('click', function(e) {
        e.preventDefault();
        var result = confirm("Are you sure this is you?");
        if(!result)
            return;

        submitKnownFace();
    });

})( jQuery );
