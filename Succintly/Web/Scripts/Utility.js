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
                return Formatter.pad(now.getHours(), 2, '0') + ':' + Formatter.pad(now.getMinutes(), 2, '0') + ':' + Formatter.pad(now.getSeconds(), 2, '0') + ':' + Formatter.pad(now.getMilliseconds(), 3, '0');
            };
            return Logger;
        })();
        Utility.Logger = Logger;

        var Formatter = (function () {
            function Formatter() {
            }
            Formatter.pad = function (num, len, padChar) {
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
