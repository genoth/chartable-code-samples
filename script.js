d3.selectAll('.item:nth-child(2)').text('select')
  .append('div') // to the last child of the current selection
  .html('<strong>selection</strong>')
// nth child actually the 2nd element, not zero indexed
// odd, even, 2n is the second element, '.item:nth-child(2n+1)'
// .select
// .remove

d3.selectAll('.item')
  .attr('class', 'highlight') // change the class completely

d3.selectAll('.item:nth-child(2)')
  .classed('highlight', true) // add an additional class

d3.selectAll('.item:nth-child(3)')
  .classed({
    'highlight': true,
    'item': false,
    'bigger': true
  }) // specify regarding multiple classes by creating an object

// You don't always have to create classes, you can just specify css inline

d3.selectAll('.item:nth-child(4)')
.style({
  'background': '#268BD2',
  'color': '#EEE8D5'
})
