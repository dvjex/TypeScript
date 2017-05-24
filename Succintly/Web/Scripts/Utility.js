var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Succintly;
(function (Succintly) {
    (function (Utility) {
        var Logger = (function () {
            function Logger(formatter) {
                this.formatter = formatter;
            }
            Logger.prototype.log = function (message) {
                if (typeof window.console !== 'undefined') {
                    window.console.log(this.getTimeStamp() + ' - ' + message);
                }
            };

            Logger.prototype.getTimeStamp = function () {
                var now = new Date();
                return this.formatter.pad(now.getHours()) + ':' + this.formatter.pad(now.getMinutes()) + ':' + this.formatter.pad(now.getSeconds()) + ':' + this.formatter.pad(now.getMilliseconds(), 3);
            };
            return Logger;
        })();
        Utility.Logger = Logger;
        var AnnoyingLogger = (function (_super) {
            __extends(AnnoyingLogger, _super);
            function AnnoyingLogger() {
                _super.apply(this, arguments);
            }
            AnnoyingLogger.prototype.log = function (message) {
                alert(message);
                _super.prototype.log.call(this, message);
            };
            return AnnoyingLogger;
        })(Logger);
        Utility.AnnoyingLogger = AnnoyingLogger;

        var Formatter = (function () {
            function Formatter() {
            }
            Formatter.prototype.pad = function (num, len, padChar) {
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
        Utility.Formatter = Formatter;
    })(Succintly.Utility || (Succintly.Utility = {}));
    var Utility = Succintly.Utility;
})(Succintly || (Succintly = {}));
//# sourceMappingURL=Utility.js.map
