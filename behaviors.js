(function($) {
/**
 * jQuery when the DOM is ready.
 */
$(document).ready(function(){
  var url = 'https://api.soundcloud.com/tracks?client_id=59a99891c97851fe05153a2c4afeff7f?q=Breakups';

  $.getJSON(url, function(tracks){
    $(tracks).each(function(track){
      console.log(track);
    });
  });
});

})(jQuery);
