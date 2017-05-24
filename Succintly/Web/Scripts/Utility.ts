module Succintly {
    export module Utility {
        export interface ILogger {
            log(message: string): void;
        }
        export class Logger implements ILogger {
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
        export class AnnoyingLogger extends Logger {
            log(message: string): void {
                alert(message);
                super.log(message);
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