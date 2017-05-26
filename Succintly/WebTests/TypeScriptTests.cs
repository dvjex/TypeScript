using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace WebTests
{
    [TestClass]
    public class TypeScriptTests
    {
        private TestContext _context;

        public TestContext TestContext { 
            get { return this._context; }
            set { this._context = value; }
        }

        [TestMethod]
        public void RunTypeScriptTests()
        {
            var runner = new JavaScriptTestHelper(_context);

            //Load JS files
            runner.LoadFile("ReferenceScripts\\tsUnit.js");
            runner.LoadFile("ReferenceScripts\\TestRunner.js");
            runner.LoadFile("ReferenceScripts\\Calculations.js");
            runner.LoadFile("ReferenceScripts\\CalculationsTest.js");

            runner.ExecuteTest("getResult"); // Execute JS test
        }
    }
}
