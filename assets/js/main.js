/* Use D3 to dynamically create a stately map
 * Created: @cyhung June 2013
  */
function drawMap(data) {

var colorRange = ["#6BAED6","#3182BD","#08519C","#073E75"]; //d3 color hex
    
var color = d3.scale.ordinal()
.domain([40, 50, 60, 70])
.range(colorRange);
  var nodes = classes(data);
   for (var i=0;i<1;i++){
    d3.select("ul#mymap")
        .selectAll("ul#mymap li")
        .data(nodes)
        .enter()
        .append("li")
            .attr("class",function(d){return d.abb.trim()})
            .style("color", function(d){return color(d.value)})
            .attr("data-state",function(d){return d.abb.trim()})
            .text(function(d){return d.letter});
    }
 //translate bubble nodes from csv data
function classes(nodes) {
 var vizdata = [];
  
    //Lazily compute children.
    nodes.forEach(function(d) {
    vizdata.push({
    letter: d.letter,
    abb: d.abb,
    state: d.fullname,
    value: d.value});
   });
   return vizdata;
}



}; //end drawmap();

