/// <reference path="calculations.ts" />
/// <reference path="tsUnit.ts" />
var SuccintlyTest;
(function (SuccintlyTest) {
    var Composer = (function () {
        function Composer() {
        }
        Composer.compose = function (test) {
            //register test classes
            test.addTestClass(new SimpleMathTest());
            test.addTestClass(new ComplexMathTest());
        };
        return Composer;
    })();
    SuccintlyTest.Composer = Composer;

    var SimpleMathTest = (function () {
        function SimpleMathTest() {
        }
        SimpleMathTest.prototype.addTwoNumbers_3and5_8 = function (context) {
            //arrange
            var math = new Succintly.Calculations();

            //act
            var result = math.addTwoNumbers(3, 5);

            //assert
            context.areIdentical(8, result);
        };
        return SimpleMathTest;
    })();
    SuccintlyTest.SimpleMathTest = SimpleMathTest;
    var ComplexMathTest = (function () {
        function ComplexMathTest() {
        }
        ComplexMathTest.prototype.addMultipleNumbers_4and6and8and14_32 = function (context) {
            var math = new Succintly.Calculations();
            var res = math.addNumbers([4, 6, 8, 14]);
            context.areIdentical(32, res);
        };
        return ComplexMathTest;
    })();
    SuccintlyTest.ComplexMathTest = ComplexMathTest;

    var test = new tsUnit.Test();
    SuccintlyTest.Composer.compose(test);
    test.showResults(document.getElementById('result'), test.run());
})(SuccintlyTest || (SuccintlyTest = {}));
//# sourceMappingURL=CalculationsTest.js.map
