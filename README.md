# Heat Map

The aim of the project is to provide a Heat Map using JSON Data.  
Example is Monthly Global Land-Surface Temperature.  Function similar to
https://codepen.io/freeCodeCamp/full/JEXgeY.

## UX

User stories taken from https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-heat-map

As a user, my heat map should have a title with corresponding `id='title'`.

As a user, my heat map should have a description with corresponding `id='description'`.

As a user, my heat map should have an x-axis with corresponding `id='x-axis'`.

As a user, my heat map should have a y-axis with corresponding `id='y-axis'`.

As a user, my heat map should have `rect` elements with a `class='cell'` that represent
the data.

There should be at least 4 different fill colors used for the cells.

Each cell should have the properties `data-month`, `data-year`, `data-temp` containing their
corresponding month, year and temperature values.

The `data-month`, `data-year` of each cell should be within the range of the data.

My heat map should have cells that align with the corresponding month on the y-axis.

My heat map should have cells that align with the corresponding year on the x-axis.

My heat map should have multiple tick labels on the x-axis with the years between 1754 and 2015.

My heat map should have a legend with the corresponding `id='legend'`.

My legend should contain `rect` elements.

The `rect` elements in the legend should use at least 4 different fill colors.

As a user, I can mouse over an area and see a tooltip with corresponding `id=tooltip`, which displays
more information about the area.

As a user, my tooltip should have a `data-year` property that corresponds to the `data-year` of the
active area.

JSON Data is at https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json

Year from 1753 to 2015.  Month from 1 to 12.

[Wireframes](wireframes/wireframe-heat-map) are provided.

## Features

Hovering over an area gives more information about the area.  If there was time, can extend to later years.

## Technologies

This project uses the technologies of HTML5, CSS3, JavaScript and D3.  Additional Technologies include Google Fonts.

## Credits

### Content

Did a Google Search on `freecodecamp heat map`.

Went to w3schools.com to find out about the degree sign, which was found under HTML5 Entities D.  

HTML5 tags within the body, CSS3 and JavaScript were taken from [Notion](https://www.notion.so/Visualize-Data-with-a-Heat-Map-12660e493bd940ea95625aa641db574b).
This was accessed on 7 October 2020.

### Media

JSON Data taken from https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json

### Acknowledgements

Wireframe taken from https://codepen.io/freeCodeCamp/full/JEXgeY

Ganesh H, with the [YouTube Video](https://www.youtube.com/watch?v=6uM_wLOayYI) and [Notion](https://www.notion.so/Visualize-Data-with-a-Heat-Map-12660e493bd940ea95625aa641db574b).

The YouTube Video and Notion website were accessed on 7 October 2020.

freeCodeCamp.org.


