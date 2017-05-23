module Succintly {
    export module Utility {
        export class Logger {
            constructor(private formatter: Formatter) {
            }
            log(message: string): void {
                if (typeof window.console !== 'undefined') {
                    window.console.log(this.getTimeStamp() + ' - ' + message);
                }
            }

            private getTimeStamp(): string {
                var now = new Date();
                return this.formatter.pad(now.getHours()) + ':' +
                    this.formatter.pad(now.getMinutes()) + ':' +
                    this.formatter.pad(now.getSeconds()) + ':' +
                    this.formatter.pad(now.getMilliseconds(), 3);
            }
        }

        export class Formatter {
            pad(num: number, len: number=2, padChar: string='0'): string {
                var out = num.toString();
                while (out.length < len) {
                    out = padChar + out;
                }
                return out;
            }
        }
    }
}