/**
 * Main JS file for profiles page.
 *
 * Matt Calthrop
 * 26 May 2013
 */


require.config(
    {
        paths: {
            "jquery": "lib/jquery-1.9.1-min",
            "handlebars": "lib/handlebars-1.0.0-rc.3-min"
        }
    }
);

require(
    [
        "jquery",
        "handlebars"
    ],
    function ($) {

        function displayProfiles() {
            var headerTemplateSource = $("#template-header").html(),
                headerTemplateCompiled = Handlebars.compile(headerTemplateSource),
                profilesTemplateSource = $("#template-profile").html(),
                profilesTemplateCompiled = Handlebars.compile(profilesTemplateSource),
                footerTemplateSource = $("#template-footer").html(),
                footerTemplateCompiled = Handlebars.compile(footerTemplateSource),
                $profilesParent = $('.profiles-container ul'),
                $title = $('title'),
                $pageHeaderParent = $('.page-header'),
                $pageFooterParent = $('.page-footer');

            $.getJSON('svc/pagedata.json')
                .done(function (json) {
                    var header = json.header,
                        profiles = json.profiles,
                        footer = json.footer;

                    $title.html(json.title);

                    $pageHeaderParent.append(headerTemplateCompiled(header));

                    for (var i = 0, len = profiles.length; i < len; i++) {
                        $profilesParent.append(profilesTemplateCompiled(profiles[i]));
                    }

                    $pageFooterParent.append(footerTemplateCompiled(footer));
                })
                .fail(function (jqxhr, textStatus, error) {
                    var err = textStatus + ', ' + error;
                    console.error("Request Failed: " + err, jqxhr);
                });
        }

        function setDimensions() {
            var width = $(window).width();
            var height = $(window).height();
            var dimensionsText = width + "x" + height;

            $('.dimensions').html(dimensionsText);
        }

        function onWindowResize() {
            setDimensions();
        }

        function onDocumentReady() {
            console.log('$.fn.jquery: ', $.fn.jquery);
            $(window).resize(onWindowResize);
            $(window).resize();
            displayProfiles();
        }

        $(document).ready(onDocumentReady);
    }
);

/* EOF */