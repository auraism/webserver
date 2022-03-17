//body Object
var Body = {
  setcolor : function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },

  setbackgroundcolor(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

var Links = {
  setcolor : function(color){
    // 아래의 jquery파일과 동일한 작업을
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}

//중복된 함수가 있어서 함수로 묶자
function nightdayhandler(self){
  var target = document.querySelector('body');
  if (self.value === 'night'){
    Body.setbackgroundcolor('black');
    Body.setcolor('white');
    Links.setcolor('yellow');
    self.value = 'day';

  } else{
    Body.setbackgroundcolor('white');
    Body.setcolor('black');
    Links.setcolor('magenta');
    self.value = 'night';
  }
}
