//2.4 Creating a simple bar chart

var bardata = [20, 30, 45, 15];
var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;

var yScale = d3.scaleLinear()

d3.select('#viz').append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('background', '#C9D7D6')
.selectAll('rect').data(bardata)
  .enter().append('rect')
    .style('fill', '#C61C6F')
    .attr('width', barWidth)
    .attr('height', function(d) {
      return d;
    })
    .attr('x', function(d, i) {
      return i*(barWidth + barOffset)
    })
    .attr('y', function(d) {
      return height - d;
    });

//2.3 Drawing SVG graphics with D3
// d3.select('#viz')
//   .append('svg')
//     .attr('width', 600)
//     .attr('height', 400)
//     .style('background', '#93A1A1')
//   .append('rect')
//     .attr('x', 200)
//     .attr('y', 100)
//     .attr('height', 200)
//     .attr('width', 200)
//     .style('fill', '#CB4B19');

// d3.select('#viz svg')
//   .append('circle')
//   .attr('cx', 300)
//   .attr('cy', 200)
//   .attr('r', 50)
//   .style('fill', 'blue')



// d3.selectAll("tr:nth-child(even) .day-high .temp").text("hot");

// d3.selectAll("tr:nth-child(even) .day-high .temp")
//     .html("<strong>hot</strong>")
//     .insert('span', 'strong')
//     .text('what up') // this is inserting before the 'strong' span
//     .append('span')
//     .text(" today");

// d3.select("h2")
//     .insert('span', ':first-child')
//     .html('woooooo')

// d3.selectAll("tr:nth-child(4) .day-high")
//     .append('span')
//     .html('hot')
//     // .style('background', 'red')
//     // .style('padding', '3px')
//     // .style('margin-left', '3px')
//     .classed('label label-danger', true)

// d3.select('h2 span')
//   .classed('small', false)

// d3.selectAll('tr')
//   .insert('td', ':first-child')
//   .append('input')
//   .attr('type', 'checkbox')
//   .property('checked', true)

// Binding data to the DOM

// d3.selectAll(".day-high .temp")
//   .data([45, 46, 47, 48])
//   .html(function(d) {
//     return d;
//   })

// d3.selectAll(".day-high .temp")
//   .data([45, 46, 47, 48])
//   .html(function(d) {
//     return '<strong>' + d + '</strong>';
//   })

// d3.selectAll(".day-high .temp")
//   .data([45, 46, 47, 48, 78])
//   .html(function(d, i) {
//     if(i===0) {
//       return '<strong class="text-muted" style="font-size: 2rem">' + d + '</strong>';
//     } else {
//       if (d>= 77) {
//         return '<strong class="text-danger">' + d + '</strong>';
//       } else {
//         return '<strong>' + d + '</strong>';
//       }
//     }
//   })

// Queuing Selections

// .enter() Subselections allow you to isolate methods and then act upon them. If you need to exit, use the exit method.


// this doesn't work. not sure why
// var mydata = [
//   { date: '4/01/2017', low: 50, high: 78 },
//   { date: '4/02/2017', low: 55, high: 79 },
//   { date: '4/03/2017', low: 40, high: 68 },
//   { date: '4/04/2017', low: 50, high: 74 },
//   { date: '4/05/2017', low: 67, high: 92 },
// ];

// d3.select('tbody')
//   .selectAll('tr')
//   .data(mydata)
//   .enter().append('tr')
//   .html(function(d) {
//     return '<th scope="row">' + d.date + '</th><td>' + d.low + '</td><td>' + d.high + '</td>'
//   })














