var Succintly;
(function (Succintly) {
    (function (Utility) {
        var Logger = (function () {
            function Logger() {
            }
            Logger.prototype.log = function (message) {
                if (typeof window.console !== 'undefined') {
                    window.console.log(this.getTimeStamp() + ' - ' + message);
                }
            };

            Logger.prototype.getTimeStamp = function () {
                var now = new Date();
                return Formatter.pad(now.getHours()) + ':' + Formatter.pad(now.getMinutes()) + ':' + Formatter.pad(now.getSeconds()) + ':' + Formatter.pad(now.getMilliseconds(), 3);
            };
            return Logger;
        })();
        Utility.Logger = Logger;

        var Formatter = (function () {
            function Formatter() {
            }
            Formatter.pad = function (num, len, padChar) {
                if (typeof len === "undefined") { len = 2; }
                if (typeof padChar === "undefined") { padChar = '0'; }
                var out = num.toString();
                while (out.length < len) {
                    out = padChar + out;
                }
                return out;
            };
            return Formatter;
        })();
    })(Succintly.Utility || (Succintly.Utility = {}));
    var Utility = Succintly.Utility;
})(Succintly || (Succintly = {}));
//# sourceMappingURL=Utility.js.map
