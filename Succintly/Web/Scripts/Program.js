/// <reference path="Utility.ts" />
var Succintly;
(function (Succintly) {
    window.onload = function () {
        var formatter = new Succintly.Utility.Formatter();
        var logger = new Succintly.Utility.Logger(formatter);
        logger.log('Logger is loaded');
    };
})(Succintly || (Succintly = {}));
//# sourceMappingURL=Program.js.map
