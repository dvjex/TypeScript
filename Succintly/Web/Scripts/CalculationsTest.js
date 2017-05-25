/// <reference path="calculations.ts" />
/// <reference path="tsUnit.ts" />
var SuccintlyTest;
(function (SuccintlyTest) {
    var CalculationsTest = (function () {
        function CalculationsTest() {
        }
        CalculationsTest.prototype.addTwoNumbers_3and5_8 = function (context) {
            //arrange
            var math = new Succintly.Calculations();

            //act
            var result = math.addTwoNumbers(3, 5);

            //assert
            context.areIdentical(8, result);
        };
        return CalculationsTest;
    })();
    SuccintlyTest.CalculationsTest = CalculationsTest;

    var test = new tsUnit.Test();
    test.addTestClass(new CalculationsTest()); // Register test class
    test.showResults(document.getElementById('result'), test.run());
})(SuccintlyTest || (SuccintlyTest = {}));
//# sourceMappingURL=CalculationsTest.js.map
