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

// Set Up Scales
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

// Draw Cells (Use Rectangles)
let drawCells = () => {
    svg.selectAll('rect')
        .data(values)
        .enter()
        .append('rect')
        .attr('class', 'cell')
        .attr('fill', (item) => {
            let variance = item['variance'];
            // Set Fill Color According to the value of variance
            if (variance <= -1) {
                return 'blue';
            } else if (variance <= 0) {
                return 'lightblue';
            } else if (variance <= 1) {
                return 'orange';
            } else {
                return 'crimson';
            }
        })
        .attr('data-year', (item) => {
            return item['year'];
        })
        .attr('data-month', (item) => {
            return item['month'] - 1;
        })
        .attr('data-temp', (item) => {
            return baseTemp + item['variance'];
        })
        .attr('height', (item) => {
            return (height - (2 * padding)) / 12;
        })
        .attr('y', (item) => {
            return yScale(new Date(0, item['month'] - 1, 0, 0, 0, 0, 0));
        })
        .attr('width', (item) => {
            let minYear = d3.min(values, (item) => {
                return item['year'];
            })

            let maxYear = d3.max(values, (item) => {
                return item['year'];
            })

            let yearCount = maxYear - minYear;
            return (width - (2 * padding)) / yearCount;

        })
        .attr('x', (item) => {
            return xScale(item['year']);
        })
        .on('mouseover', (e, item) => {
            tooltip.transition().style('visibility', 'visible');

            // Set Up Month Names
            let monthNames = ["January", "February", "March", "April", "May", "June", 
                            "July", "August", "September", "October", "November", "December"];

            // Set Up Text on Tooltip and Convert Month Number to Month Name
            tooltip.text(item['year'] + ' ' + monthNames[item['month'] - 1] + ' : ' + item['variance']);
            tooltip.attr('data-year', item['year']);
        })
        .on('mouseout', (item) => {
            tooltip.transition().style('visibility', 'hidden');
        });
}


