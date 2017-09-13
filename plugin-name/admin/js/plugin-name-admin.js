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
                    console.log(data);
                },
                success: function(data) {
                    var matchesHTML = "";
                    // data.matches.forEach(function(match) {
                    //     var url = 'http://localhost' + match.face_image;
                    //     var img = '<img class="face_images" src="'+url+'" />';
                    //
                    //     var html = '<div>' + img + '</div>';
                    //
                    //     matchesHTML += html;
                    // });

                    document.getElementById('results').innerHTML =
                        '<div>' +
                            '<img id="face_image" src="'+data_uri+'"/>' +
                        '</div>' +
                        '<div>' +
                            '<span id="face_message">' + data.message + '<span/>' +
                        '</div>' +
                        matchesHTML;
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
        submitKnownFace();
    });

})( jQuery );
