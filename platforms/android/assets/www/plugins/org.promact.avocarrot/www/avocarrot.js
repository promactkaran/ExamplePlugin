cordova.define("org.promact.avocarrot.avocarrot", function(require, exports, module) { 

//to call avocarrot.LoadAds() function

var avocarrot = {
    LoadAds: function(successCallback, errorCallback ) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'Avocarrot', // mapped to our native Java class called "CalendarPlugin"
            'ShowAds', // with this action name
            [{                  // and this array of custom arguments to create our entry
                //what to pass here ?
            }]
        );
    }
}
module.exports = calendar;
});
