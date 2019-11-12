console.log('Test Code again');
$("#slideshow > div:gt(0)").hide();

// setInterval(function() { 
//   $('#slideshow > div:first')
//     .fadeOut(3000)
//     .next()
//     .fadeIn(3000)
//     .end()
//     .appendTo('#slideshow');
// },  6000)

// setInterval(function() { 
//     $('.slideshow > div:first')
//       .fadeOut(3000)
//       .next()
//       .fadeIn(3000)
//       .end()
//       .appendTo('.slideshow');
//   },  6000)

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeTo(3000,0)
    .next()
    .fadeTo(0,1)
    .end()
    .appendTo('#slideshow');
},  6000)

setInterval(function() { 
    $('.slideshow > div:first')
      .fadeTo(3000,0)
      .next()
      .fadeTo(0,1)
      .end()
      .appendTo('.slideshow');
  },  6000)