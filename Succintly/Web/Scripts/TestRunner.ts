/// <reference path="tsUnit.ts" />
module SuccintlyTest {
    export class TestRunner {
        private test: tsUnit.Test;
        constructor() {
            this.test = new tsUnit.Test();
            Composer.compose(this.test);
        }
        runInBrowser() {
            this.test.showResults(document.getElementById('result'), this.test.run());
        }
        runInScriptEngine() {
            var res = this.test.run();
            var len = res.errors.length;
            if (len > 0) {
                var msg = '';
                for (var i = 0; i < len; i++) {
                    var err = res.errors[i];
                    msg += err.testName + ' ' + err.funcName + ' ' + err.message + '\r\n';
                }
                throw new Error(msg);
            }
        }
    }

    export class Composer { // Test Composer
        static compose(test: tsUnit.Test) {
            //register test classes
            test.addTestClass(new SimpleMathTest());
            test.addTestClass(new ComplexMathTest());
        }
    }
}