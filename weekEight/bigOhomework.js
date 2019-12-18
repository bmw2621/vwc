// import { plot, stack,  Plot } from 'nodeplotlib';
var npl = require('nodeplotlib')

function constantTime(arr){
    // Return middle element
    return arr[Math.floor(arr.length/2)]
}

function linearTime(arr){
    // Return array with all elements multiplied by 2
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2)
    }
    return newArr;
}

function polynomialTime(arr){
    // Return with product of all possible pairs
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            newArr.push(arr[i] * arr[j])
        }
    }
}

// Timing Function, give it a function to time, and a number of iterations
// Returns array of length iterations, with time it took func to run with array length index + 1
function timeFunction(func, iterations){
    var dataset = []                            // For results
    let dummyDataArr = []                       // Dummy Data to push through timed functions
    let start, end, elapsed
    for(let i = 0; i < iterations; i++){
        dummyDataArr.push(i)                    // Make dummy dataset bigger by one
        start = Date.now()
        func(dummyDataArr)
        end = Date.now()
        elapsed = end-start                     // Calculate elapsed time
        dataset.push(elapsed)                   // Add elapsed time to dataset and return it
    }
    return dataset
}

const iterations = 2000                         // Set number of iterations (max array size) for each function to be timed against
                                                // If you go over 2000 you gunna be waiting a while

var x_axis = []                                 // Create and fill array to act as X axis for graph
for(let i = 1; i <= iterations; i++){x_axis.push(i)}

const constantDataset = {                      // Calculate results into data structure for nodeplotlib
    x: x_axis,
    y: timeFunction(constantTime, iterations),
    type: 'line',
    name: "Constant Function"
  };

const linearDataset = {                        // Calculate results into data structure for nodeplotlib
    x: x_axis,
    y: timeFunction(linearTime, iterations),
    type: 'line',
    name: "Linear Function"
  };
  
const polynomialDataset = {                    // Calculate results into data structure for nodeplotlib
    x: x_axis,
    y: timeFunction(polynomialTime, iterations),
    type: 'line',
    name: "Polynomial Function"
  };

// Graph Layout
var layout = {
    title: {
        text:`Functions timed up to ${iterations} length Array`,
        font: {
        family: 'Courier New, monospace',
        size: 24
        },
        xref: 'paper',
        x: 0.2,
    },
    xaxis: {
        title: {
        text: 'Length of Array',
        font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
        }
        },
    },
    yaxis: {
        title: {
        text: 'Time in milliseconds',
        font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
        }
        }
    }
};
  
// Plot that shit
npl.plot([constantDataset, linearDataset, polynomialDataset], layout);
