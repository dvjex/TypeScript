/// <reference path="calculations.ts" />
/// <reference path="testrunner.ts" />
/// <reference path="tsUnit.ts" />
module SuccintlyTest {
    export class SimpleMathTest {
        addTwoNumbers_3and5_8(context: tsUnit.TestContext) {
            //arrange
            var math = new Succintly.Calculations();

            //act
            var result = math.addTwoNumbers(3, 5);

            //assert
            context.areIdentical(8, result);
        }
    }
    export class ComplexMathTest {
        addMultipleNumbers_4and6and8and14_32(context: tsUnit.TestContext) {
            var math = new Succintly.Calculations();
            var res = math.addNumbers([4, 6, 8, 14]);
            context.areIdentical(32, res);
        }
    }

    var isMsScriptEngineContext: boolean = false;

    var testRunner = new TestRunner();
    if (!isMsScriptEngineContext) {
        testRunner.runInBrowser();
    }

    function getResult() {
        testRunner.runInScriptEngine();
    }
} 