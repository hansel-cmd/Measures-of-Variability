const text_area = document.querySelector('#text-area');
const range_text = document.querySelector('#range');
const mean_text = document.querySelector('#mean');
const variance_text = document.querySelector('#variance');
const sd_text = document.querySelector('#standard_deviation');
const sample_variance_text = document.querySelector('#sample_variance');
const sample_sd_text = document.querySelector('#sample_standard_deviation');

let data; // array of data elements
let range; // the value when subtracting the highest to the lowest
let mean; // the mean of the given data
let variance; // the variance of the given data
let sd; // the standard deviation of the given data
let sample_variance; // the sample variance of the given data
let sample_sd; // the sample standard deviation of the given data


function calculate() {

    reset();

    parseData();

    getRange();

    getMean();

    getVariance();

    getStandardDeviation();

}

function reset() {

    data = 0;
    range = 0;
    mean = 0;
    variance = 0;
    sd = 0;
    sample_variance = 0;
    sample_sd = 0;
}


function parseData() {

    let value = text_area.value.replaceAll(/\s/g, ' ').split(' ');
    
    data = value.reduce((retval, cur_data) => {
        
        if (retval === undefined)
            retval = []

        if (!isNaN(parseInt(cur_data)))
            retval.push(parseInt(cur_data));

        return retval;
    }, []);

    data.sort((a, b) => a - b);
}


function getRange() {
    
    range = data[data.length - 1] - data[0];
    range_text.innerHTML = range;

}


function getMean() {
    
    let sum = data.reduce((retval, cur_data) => {
        return retval + cur_data
    }, 0);

    mean = sum / data.length;
    mean_text.innerHTML = mean;

}

function getVariance() {

    let sumation = data.reduce((retval, current_data) => {
        return retval + (current_data - mean) ** 2;
    }, 0);


    variance = sumation / data.length;
    sample_variance = sumation / (data.length - 1);

    variance_text.innerHTML = variance;
    sample_variance_text.innerHTML = sample_variance;

}

function getStandardDeviation() {

    sd = Math.sqrt(variance);
    sample_sd = Math.sqrt(sample_variance);

    sd_text.innerHTML = sd;
    sample_sd_text.innerHTML = sample_sd;

}


// 35 45 30 35 40 25