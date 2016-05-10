(function($) {
/**
 * jQuery when the DOM is ready.
 */
$(document).ready(function(){
  var url = 'https://api.soundcloud.com/tracks?client_id=59a99891c97851fe05153a2c4afeff7f&q=Breakups';

  $.getJSON(url, function(tracks){
    $.each(tracks, function(i, track){
      console.log({
        'i': i,
        'track': track
      });
    });
  });

  
  SC.initialize({
    client_id: '59a99891c97851fe05153a2c4afeff7f'
  });

  // find all sounds of buskers licensed under 'creative commons share alike'
  SC.get('/tracks', {
    q: 'buskers'
  })
    .then(function(tracks) {
      console.log(tracks);
    });
  });

})(jQuery);
