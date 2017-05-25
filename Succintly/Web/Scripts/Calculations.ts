module Succintly {
    export class Math {
        addTwoNumbers(a: number, b: number): number {
            return a + b;
        }

        addNumbers(num: number[]): number {
            var sum: number = 0;
            for (var i = 0; i < num.length; i++)
                sum = sum + num[i];
            return sum;
        }
    }
} 