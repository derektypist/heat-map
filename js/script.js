// Initialise variables

let url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json';
let req = new XMLHttpRequest();
let values = [];
let width = 800;
let height = 600;
let padding = 40;
let svg = d3.select('svg');
let tooltip = d3.select('#tooltip');

// Draw Canvas
let drawCanvas = () => {
    svg.attr('width', width);
    svg.attr('height', height);
};
