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
var mydata = [
  { date: '4/01/2017', low: 50, high: 78 },
  { date: '4/02/2017', low: 55, high: 79 },
  { date: '4/03/2017', low: 40, high: 68 },
  { date: '4/04/2017', low: 50, high: 74 },
  { date: '4/05/2017', low: 67, high: 92 },
];

d3.select('tbody')
  .selectAll('tr')
  .data(mydata)
  .enter().append('tr')
  .html(function(d) {
    return '<th scope="row">' + d.date + '</th><td>' + d.low + '</td><td>' + d.high + '</td>'
  })














