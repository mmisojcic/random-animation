
mainAnimation();
textAnime();

function mainAnimation(){
  var elems = [];
  for (i=0;i<210;i++){
    var start = setPosition();
    var color = getColor();
    var elem = $(document.createElement('span'));
    elem.attr('id', i)
    .addClass('box-small')
    .css({"background-color": color, "top": start[0], "left": start[1]})
    .appendTo('#box-main').fadeIn(2000, function(){
      $('#text').fadeIn(1500);
    });
    elems.push(elem);
    if (i == 209){
      var endTop,endLeft;//kraj animacije top/left pozicije
      var nextLeft = ($('#box-main').width()/14);//sledeca left pozicija za element
      var nextTop = ($('#box-main').height()/15);//sledeca top pozicija za element
      var c = 0;//brojac elementa u redu
      var r = 0;//brojac redova
        for(j=0;j<210;j++){
          if(j==0){endTop=0;endLeft=0};
          $(elems[j]).animate({ top:endTop, left:endLeft, width:"7,14285714286", height:"6,66666666667%"}, 4000);
          endLeft = endLeft + nextLeft;
          c++;
          if(c == 14){
            r ++;
            endTop = nextTop * r;
            endLeft = 0;
            c = 0;
          }
        }
    };
  }
}

function getColor(){
  var colors = ["#FFF", "#2980B9", "#3498DB", "#1ABC9C", "#16A085", "#27AE60", "#2ECC71", "#F1C40F", "#F39C12", "#E67E22"];
  var n = Math.floor((Math.random() * 9) + 0);
  return colors[n];
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
