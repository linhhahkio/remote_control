var application_speech = function(){
    RobotUtils.onService(function(ALTextToSpeech) {
        // Bind button callbacks
        $(".talk").click(function() {
            ALTextToSpeech.say($(this).html());
        });

        $(".inputTalk").click(function() {
            ALTextToSpeech.say($("#sayThis").val());
        });
    });
}

var application_animation = function(){
    RobotUtils.onService(function(ALBehaviorManager) {
        // Bind button callbacks
        $(".wave").click(function() {
            ALBehaviorManager.startBehavior("animations/Stand/Gestures/Hey_1");
        });

	       $(".bow").click(function() {
            ALBehaviorManager.startBehavior("animations/Stand/Gestures/BowShort_1");
        });

    });
}

var application_sound = function(){
    RobotUtils.onService(function(ALAudioPlayer) {
        // Bind button callbacks
        $(".sound").click(function() {
          if ($(this).html() === "Cry")
            {ALAudioPlayer.playFile("/data/home/nao/.local/share/PackageManager/apps/soundsetaldebaran/enu_ono_crying.ogg");}
          else {
            ALAudioPlayer.playFile("/data/home/nao/.local/share/PackageManager/apps/soundsetaldebaran/jpj_ono_laugh4_02.ogg");
          }
        });

    });
}

var application_image = function(){
    RobotUtils.onService(function(ALTabletService) {
        // Bind button callbacks
        $(".image").click(function() {
          if ($(this).html() === "Gorilla")
            {ALTabletService.showImage("http://what-do-animals-eat.com/wp-content/uploads/2017/02/gorilla.jpg");}
          else {
            ALTabletService.showImage("https://www.laurea.fi/update/Laureankuvat/Logot/Laurea_vaaka_slogan_fi-en_RGB.jpg");
          }
        });

        $(".hideImage").click(function() {
          ALTabletService.hideImage();
        });
    });
}

var application_behavior = function(){
    RobotUtils.onService(function(ALDialog) {
        // Bind button callbacks
        $(".start").click(function() {
            ALDialog.setLanguage("Finnish")
        });

        $(".stop").click(function() {
            ALDialog.setLanguage("English")
        });
    });

    RobotUtils.onService(function(ALBehaviorManager) {
        // Bind button callbacks
        $(".start").click(function() {
            ALBehaviorManager.startBehavior("working_-a99e21/behavior_1");
        });

        $(".stop").click(function() {
            ALBehaviorManager.stopBehavior("working_-a99e21/behavior_1");
        });
    });

    RobotUtils.onService(function(ALTabletService) {
        // Bind button callbacks

        $(".stop").click(function() {
            ALTabletService.hideWebview();
        });
    });
}
