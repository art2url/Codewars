// Let's build a calculator that can calculate the average 
// for an arbitrary number of arguments.

// The test expects you to provide a Calculator object with 
// an average method: Calculator.average()

// The test also expects that when you pass no arguments,
// it returns 0. The arguments are expected to be integers.

// It expects Calculator.average(3,4,5) to return 4.

let Calculator = {
    average: function(...args) {
        let arr = [];
        let sum = 0;

        for (let i = 0; i < arguments.length; i++) {
            arr[i] = arguments[i];
        }

        for (let j = 0; j < arr.length; j++) {
            sum += arr[j]
        }
        return sum > 0 ? sum / arr.length : 0
    }
};

func.average(0)