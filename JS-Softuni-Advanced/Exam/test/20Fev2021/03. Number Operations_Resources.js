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
    //[5,2]

    //[2]
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2; //[5,2]
        const rounds = array1.length < array2.length ? array1.length : array2.length; //1

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]); //[7]
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr //[7,2]
    }
};

module.exports = numberOperations;