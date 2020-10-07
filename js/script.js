// Initialise variables

let url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json';
let req = new XMLHttpRequest();
let baseTemp;
let values = [];
let xScale;
let yScale;
let xAxis;
let yAxis;
let width = 1200;
let height = 600;
let padding = 60;
let svg = d3.select('svg');
let tooltip = d3.select('#tooltip');

// Draw Canvas
let drawCanvas = () => {
    svg.attr('width', width);
    svg.attr('height', height);
};

// Generate Scales
let generateScales = () => {
    let minYear = d3.min(values, (item) => {
        return item['year'];
    });

    let maxYear = d3.max(values, (item) => {
        return item['year'];
    });

    xScale = d3.scaleLinear()
            .domain([minYear, maxYear + 1])
            .range([padding, width-padding]);
    yScale = d3.scaleTime()
            .domain([new Date(0, 0, 0, 0, 0, 0, 0), new Date(0, 12, 0, 0, 0, 0, 0)])
            .range([padding, height-padding]);
};
