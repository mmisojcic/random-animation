
$('#sex').animate({height:"8%"}, 1000, "linear", function(){
  setUp();
  textAnime();
});

function setUp(){
  setInterval(function(){
    var start = setPosition();
    var color = getColor();
    var ele = $(document.createElement('span'));
    ele.addClass('ball')
    .css({"background-color": color, "box-shadow":"0px 0px 20px "+color+", 0px 0px 15px "+color, "top": start[0], "left": start[1]})
    .appendTo('#box-main')
    .animate({opacity:1 , top:'50%', left:'50%', width:0, height:0}, 2000, "linear", function(){
        this.remove();
    });
  },10);
}

function textAnime(){
  var color = getColor();
  $('#text').animate({"color": color}, 500, function(){
    textAnime();
  });
}

function setPosition(){
  // dimenzije box-main
  var boxH = $('#box-main').height() - 50;
  var boxW = $('#box-main').width() - 50;

  var nboxH = Math.floor(Math.random() * boxH);
  var nboxW = Math.floor(Math.random() * boxW);

  return [nboxH,nboxW];
}

function getColor(){
  var colors = ["#FFF", "#2980B9", "#3498DB", "#1ABC9C", "#16A085", "#27AE60", "#2ECC71", "#F1C40F", "#F39C12", "#E67E22"];
  var n = Math.floor((Math.random() * 9) + 0);
  return colors[n];
}
