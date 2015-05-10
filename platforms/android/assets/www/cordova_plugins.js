cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.devgirl.calendar/www/calendar.js",
        "id": "org.devgirl.calendar.Calendar",
        "clobbers": [
            "window.calendar"
        ]
    },
    {
        "file": "plugins/org.promact.avocarrot/www/avocarrot.js",
        "id": "org.promact.avocarrot.avocarrot",
        "clobbers": [
            "window.avocarrot"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.devgirl.calendar": "0.1.0",
    "org.promact.avocarrot": "0.1.0",
    "org.apache.cordova.device": "0.3.0"
}
// BOTTOM OF METADATA
});