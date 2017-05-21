module Succintly {
    module Utility {
        export class Logger {
            log(message: string): void {
                if (typeof window.console !== 'undefined') {
                    window.console.log(message);
                }
            }
        }
    }
} 