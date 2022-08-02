const config1 = [['(', ')']];
const config2 = [
    ['(', ')'],
    ['[', ']'],
];
const config3 = [
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
];
const config4 = [['|', '|']];
const config5 = [
    ['(', ')'],
    ['|', '|'],
];
const config6 = [
    ['1', '2'],
    ['3', '4'],
    ['5', '6'],
    ['7', '7'],
    ['8', '8'],
];
const config7 = [
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
    ['|', '|'],
];

module.exports = function check(str, bracketsConfig) {
// function check(str, bracketsConfig) {
    const stack = {
        data: [],
        add: function (newData) {
            this.data.push(newData);
        },
        remove: function () {
            return this.data.pop();
        },
        top: function () {
            return this.data[this.data.length - 1];
        },
        size: function () {
            return this.data.length;
        },
        isEmpty: function () {
            return this.data.length === 0;
        },
    };

    const searchWrongBracket = (currentBracket) => {
        return bracketsConfig.some((bracketsPair) => {
            if (bracketsPair.includes(currentBracket)) {
                if (currentBracket === bracketsPair[0]) {
                    if (bracketsPair[0] === bracketsPair[1]) {
                        if (stack.isEmpty() || currentBracket !== stack.top()) {
                            stack.add(currentBracket);
                        } else {
                            stack.remove();
                        }
                    } else {
                        stack.add(currentBracket);
                    }
                } else {
                    if (stack.isEmpty()) {
                        stack.add(currentBracket);
                        return true; // to break loop
                    } else {
                        if (stack.top() === bracketsPair[0]) {
                            stack.remove();
                        } else {
                            return true; // to break loop
                        }
                    }
                }
            }
        });
    };

    [...str].some(searchWrongBracket);

    return stack.isEmpty();
}

// console.log(check('()', config1));
// console.log(check('((()))()', config1));
// console.log(check('())(', config1));
// console.log(check('([{}])', config3));
// console.log(check('[(])', config2));
// check('|()|', config5);
// check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', config7); // false
