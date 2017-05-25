/// <reference path="calculations.ts" />
/// <reference path="tsUnit.ts" />
module SuccintlyTest {
    export class Composer { // Test Composer
        static compose(test: tsUnit.Test) {
            //register test classes
            test.addTestClass(new SimpleMathTest());
            test.addTestClass(new ComplexMathTest());
        }
    }

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

    var test = new tsUnit.Test();
    SuccintlyTest.Composer.compose(test);
    test.showResults(document.getElementById('result'), test.run());
} 