var Succintly;
(function (Succintly) {
    var Math = (function () {
        function Math() {
        }
        Math.prototype.addTwoNumbers = function (a, b) {
            return a + b;
        };

        Math.prototype.addNumbers = function (num) {
            var sum = 0;
            for (var i = 0; i < num.length; i++)
                sum = sum + num[i];
            return sum;
        };
        return Math;
    })();
    Succintly.Math = Math;
})(Succintly || (Succintly = {}));
//# sourceMappingURL=Calculations.js.map
