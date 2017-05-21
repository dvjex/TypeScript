module Succintly {
    export module Utility {
        export class Logger {
            log(message: string): void {
                if (typeof window.console !== 'undefined') {
                    window.console.log(this.getTimeStamp() + ' - ' + message);
                }
            }

            private getTimeStamp(): string {
                var now = new Date();
                return Formatter.pad(now.getHours(), 2, '0') + ':' +
                    Formatter.pad(now.getMinutes(), 2, '0') + ':' +
                    Formatter.pad(now.getSeconds(), 2, '0') + ':' +
                    Formatter.pad(now.getMilliseconds(), 3, '0');
            }
        }

        class Formatter {
            static pad(num: number, len: number, padChar: string): string {
                var out = num.toString();
                while (out.length < len) {
                    out = padChar + out;
                }
                return out;
            }
        }
    }
}