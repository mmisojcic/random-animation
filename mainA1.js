mainAnimation();
$('#text').animate({width:"100%"}, 2000, "linear", function(){ textAnime();});

function setAnimePosition(){
    var boxH = $('#box-main').height() - 50;
    var boxW = $('#box-main').width() - 50;

    var nboxH = Math.floor(Math.random() * boxH);
    var nboxW = Math.floor(Math.random() * boxW);

    return [nboxH,nboxW];
};

function getColor(){
  var colors = ["#FFF", "#2980B9", "#3498DB", "#1ABC9C", "#16A085", "#27AE60", "#2ECC71", "#F1C40F", "#F39C12", "#E67E22"];
  var n = Math.floor((Math.random() * 9) + 0);
  return colors[n];
};

function textAnime(){
  var color = getColor();
  $('#text').animate({"color": color}, 500, function(){
    textAnime();
  });
}

function mainAnimation() {
  setInterval(function(){
    for(i=1;i<7;i++){
      var nap = setAnimePosition();
      var color = getColor();
      var elem = $(document.createElement('span'));
      elem.addClass('box-small box-sm'+i)
      .css({"background-color": color})
      .appendTo('#box-main')
      .animate({ top: nap[0], left: nap[1], width: '15em', height:'10em', opacity:'0'}, 3000, "linear", function(){
        this.remove();
      });
    }
  },500);
};
