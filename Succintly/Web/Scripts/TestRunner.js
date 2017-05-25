/// <reference path="tsUnit.ts" />
var SuccintlyTest;
(function (SuccintlyTest) {
    var TestRunner = (function () {
        function TestRunner() {
            this.test = new tsUnit.Test();
            Composer.compose(this.test);
        }
        TestRunner.prototype.runInBrowser = function () {
            this.test.showResults(document.getElementById('result'), this.test.run());
        };
        TestRunner.prototype.runInScriptEngine = function () {
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
        };
        return TestRunner;
    })();
    SuccintlyTest.TestRunner = TestRunner;

    var Composer = (function () {
        function Composer() {
        }
        Composer.compose = function (test) {
            //register test classes
            test.addTestClass(new SuccintlyTest.SimpleMathTest());
            test.addTestClass(new SuccintlyTest.ComplexMathTest());
        };
        return Composer;
    })();
    SuccintlyTest.Composer = Composer;
})(SuccintlyTest || (SuccintlyTest = {}));
//# sourceMappingURL=TestRunner.js.map
