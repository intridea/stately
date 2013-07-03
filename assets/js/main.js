/* Use D3 to dynamically create a stately map
 * Created: @cyhung July 2013
 * version 1.0
  */
function drawMap() {
  
  drawMap.prototype.draw = function(mapid, datasource, datacol) {
  //load data from csv url
  d3.csv(datasource, function(data) {
  
  //nest data from csv into useful objects
  var nodes = d3.nest()
  .entries(data);
  
   //loop to build map
   for (var i=0;i<1;i++){
    d3.select('#'+mapid)
        .selectAll('#'+mapid+' li')
        .data(nodes)
        .enter()
        .append("li")
            .attr("id",function(d){return d.abb}) //add id to state abbreviation
            .attr("class",function(d){return toClass(d[datacol]);}) //add class to value in data column, this determines the color of each state
            .attr("data-state",function(d){return d.abb}) //add data-state attr to state abbreviation
            .text(function(d){return d.letter}); //add letter corresponding to each state. this is a fail-safe for older browsers
    }
    
    });
  
  }; //end draw();
  
  //converts data value to usable class; strips all white spaces and lower case e.g. I am data value => iamdatavalue
  function toClass(d) {
    var classname = d.replace(/\s/g, "").toLowerCase();
    return classname;
  }
  
}; //end drawmap();

