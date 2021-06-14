const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    //arr1 = [5];
    //arr2 = [10];
    sumArrays: function (array1, array2) {
        //arr2 = [10]
        const longerArr = array1.length > array2.length ? array1 : array2;
        //arr1 = 1
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];
        //1
        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }
        //[15]
        resultArr.push(...longerArr.slice(rounds)); // [15]

        return resultArr
    }
};

module.exports = numberOperations;