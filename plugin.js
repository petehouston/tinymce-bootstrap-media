/**
 * Plugin Name: TinyMCE Bootstrap Media
 * Plugin URI: https://github.com/petehouston/tinymce-bootstrap-media
 * Version: 1.0
 * Author: Pete Houston
 * Author URI: http://petehouston.com
 * Description: A simple TinyMCE plugin to insert Bootstrap responsive media
 * License: MIT
 */
(function (mce) {
    mce.PluginManager.add('bootstrapmedia', function(editor, url) {

        function formatMedia($url) {
            return '' +
                '<div class="embed-responsive embed-responsive-16by9">' +
                '<iframe class="embed-responsive-item" src="' + $url + '" width=\"100%\" allowfullscreen></iframe>' +
                '</div>';
        }

        function getYoutubeEmbedUrl($id) {
            return '//www.youtube.com/embed/' + $id;
        }

        // Youtube button
        editor.addButton('youtube', {
            text: 'Youtube',
            icon: false,
            onclick: function() {
                editor.windowManager.open({
                    title: 'Insert Youtube Video ID',
                    body: [
                        {   type: 'textbox',
                            name: 'code',
                            label: 'Video code'
                        }
                    ],
                    onsubmit: function(e) {
                        if(e.data.code) {
                            editor.insertContent(formatMedia(getYoutubeEmbedUrl(e.data.code)));
                        }
                        else {
                            mce.activeEditor.windowManager.alert('Please insert Youtube video ID into the box.');
                        }
                    }
                });
            }
        });
    });
}(tinymce));