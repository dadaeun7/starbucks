var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady(){
  new YT.Player('player', {
    videoId: 'lQfgn5iaJuI',
    playerVars: {
        autoplay: true,
        loop: true,
        playlist: 'lQfgn5iaJuI'
    },
    events: {
        onReady: function(event) {
            event.target.mute()
        }
    }
  });
}