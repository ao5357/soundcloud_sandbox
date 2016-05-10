(function($) {
/**
 * jQuery when the DOM is ready.
 */
$(document).ready(function(){
  SC.initialize({
    client_id: '59a99891c97851fe05153a2c4afeff7f'
  });

  var $form = $('form'),
    $results = $('#results');
  $form.on('submit', function(e){
    $results.html('Loading...');
    
    var resultHtml = '<ul>';
    // find all sounds of buskers licensed under 'creative commons share alike'
    SC.get('/tracks', {
      q: $form.find('#search').val()
    })
      .then(function(tracks) {
        $.each(tracks, function(i, track){
          resultHtml += '<li><a href="' + track.permalink_url + '">' + track.title + '</a></li>';
        });
        $results.html(resultHtml + '</ul>');
      });
    });
    e.stopPropagation();
    return false;
  });
})(jQuery);
