/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    let firstElement: number = numbers[0];
    let secondElement: number = numbers[numbers.length - 1];
    return [firstElement, secondElement];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((nums: number): number => nums * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toIntegers = numbers.map((nums: string): number => {
        const parsed = parseInt(nums);
        return isNaN(parsed) ? 0 : parsed; //if cant be parsed then convert to 0
    });

    return toIntegers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const toStrings = amounts.map((price: string): number => {
        if (price.startsWith("$")) {
            //if price starts with $
            price = price.slice(1); //remove it from price
        }
        const convert = parseInt(price); //converting string to int
        return isNaN(convert) ? 0 : convert;
    });
    return toStrings;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shouting = messages.map((msg: string): string | null => {
        if (msg.endsWith("!")) {
            return msg.toUpperCase();
        }
        if (msg.endsWith("?")) {
            return null; //marking messages with a ? with null to remove later
        }
        return msg; //keeping msg unchanged
    });
    return shouting.filter((msg) => msg !== null) as string[]; //string[] is making sure the result will be strings
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessThan4 = words.filter((count) => count.length < 4).length;
    return lessThan4;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const c = colors.every(
        (rgb) => rgb === "red" || rgb === "green" || rgb === "blue",
    );
    return c;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce((total: number, num: number) => total + num, 0);
    const expression = addends.join("+");
    return `${sum}=${expression}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.length === 0) {
        return [];
    }

    if (negativeNum === -1) {
        const sum = values.reduce();
    }
    const negativeNum = values.findIndex((num: number): boolean => num < 0);
    const bNeg = values.slice(0, negativeNum + 1);
    const aNeg = values.slice(negativeNum + 1);

    return [];
}
