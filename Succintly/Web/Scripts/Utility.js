var Succintly;
(function (Succintly) {
    var Utility;
    (function (Utility) {
        var Logger = (function () {
            function Logger() {
            }
            Logger.prototype.log = function (message) {
                if (typeof window.console !== 'undefined') {
                    window.console.log(message);
                }
            };
            return Logger;
        })();
        Utility.Logger = Logger;
    })(Utility || (Utility = {}));
})(Succintly || (Succintly = {}));
//# sourceMappingURL=Utility.js.map
