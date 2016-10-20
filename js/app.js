$( document ).ready(function() {
    console.log( "ready!" );

// console.log($('span.operator').text());

var holder = '';
var rightHolder = '';
var opNum = false;
var answer = 0;
$('span').not('.operator').on('click', function(){
  if(!opNum){
    num = ($(this).text());
    holder = holder + num;
    console.log(holder);
    $('#screen').text(holder);
  }
  if(opNum){
    rightNum = ($(this).text());
    rightHolder = rightHolder + rightNum;
    $('#screen').text(holder + ' ' + oper + ' ' + rightHolder);
  }
})

$('#clear').on('click', function(){
  holder = '';
  rightHolder = '';
  $('#screen').text(holder);
})

$('.operator').not('#equals').not('#clear').on('click', function(){
  oper = ($(this).text());
  opNum = true;
  $('#screen').text(holder+' '+oper);

})

$('#equals').on('click', function(){
  leftInteger = parseInt(holder);
  rightInteger = parseInt(rightHolder);
  // operInt = parseInt(oper);
  opNum = false
  holder = '';
  rightHolder = '';
  console.log('left = ' + leftInteger);
  console.log('right = ' + rightInteger);
  console.log(oper);
  switch (true) {
    case oper==='÷':
      answer = leftInteger/rightInteger;
      break;
    case oper==='x':
      answer = leftInteger*rightInteger;
      break;
    case oper==='-':
      answer = leftInteger-rightInteger;
      break;
    case oper ==='+':
      answer = leftInteger+rightInteger;
      break;
    default:
      answer = 'Error';
  }
  console.log('answer = ' + answer);
  if(answer%1===0){
    $('#screen').text(answer);
  }
  else{
  $('#screen').text(answer.toFixed(4));
  }
  //use switch statement for each operator carouse
    //eg; switch oper === '+'
      // leftInteger + rightInteger
      //case oper === 'x'
      // leftInteger * rightInteger


})

});
