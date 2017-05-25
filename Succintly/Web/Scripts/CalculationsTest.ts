/// <reference path="calculations.ts" />
/// <reference path="tsUnit.ts" />
module SuccintlyTest {
    export class CalculationsTest {
        addTwoNumbers_3and5_8(context: tsUnit.TestContext) {
            //arrange
            var math = new Succintly.Calculations();

            //act
            var result = math.addTwoNumbers(3, 5);

            //assert
            context.areIdentical(8, result);
        }
    }

    var test = new tsUnit.Test();
    test.addTestClass(new CalculationsTest()); // Register test class
    test.showResults(document.getElementById('result'), test.run());
} 