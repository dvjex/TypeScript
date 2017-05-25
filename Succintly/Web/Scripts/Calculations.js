var Succintly;
(function (Succintly) {
    var Calculations = (function () {
        function Calculations() {
        }
        Calculations.prototype.addTwoNumbers = function (a, b) {
            return a + b;
        };

        Calculations.prototype.addNumbers = function (num) {
            var sum = 0;
            for (var i = 0; i < num.length; i++)
                sum = sum + num[i];
            return sum;
        };
        return Calculations;
    })();
    Succintly.Calculations = Calculations;
})(Succintly || (Succintly = {}));
//# sourceMappingURL=Calculations.js.map
