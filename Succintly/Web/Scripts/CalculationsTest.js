/// <reference path="calculations.ts" />
/// <reference path="testrunner.ts" />
/// <reference path="tsUnit.ts" />
var SuccintlyTest;
(function (SuccintlyTest) {
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

    var isMsScriptEngineContext = false;

    var testRunner = new SuccintlyTest.TestRunner();
    if (!isMsScriptEngineContext) {
        testRunner.runInBrowser();
    }

    function getResult() {
        testRunner.runInScriptEngine();
    }
})(SuccintlyTest || (SuccintlyTest = {}));
//# sourceMappingURL=CalculationsTest.js.map
