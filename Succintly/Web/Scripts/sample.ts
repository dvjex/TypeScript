﻿//Deprecated
function log(message: string): void {
    if (typeof window.console !== 'undefined') {
        window.console.log(message);
    }
}
var testLog = 'Hello';
log(testLog);

var b = 'fd';
//b = 1;