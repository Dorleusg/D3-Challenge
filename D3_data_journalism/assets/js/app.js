// Make the chart repsonive
function makeResponsive() {

    // If SVG area isn't empty when the browser loads, remove & replace with resized chart
    var svgArea = d3.select("#scatter").select("svg");
  
    if (!svgArea.empty()) {
      svgArea.remove();
    }