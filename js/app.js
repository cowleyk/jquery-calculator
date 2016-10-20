$( document ).ready(function() {
    console.log( "ready!" );


var holder = '';
var rightHolder = '';
var oper = '';
var opNum = false;
var answer = 0;
$('span').not('.operator').on('click', function(){
  //select number buttons
  if(!opNum){
    num = ($(this).text());
    holder = holder + num;
    console.log(holder);
    $('#screen').text(holder);
  }
  //boolean opNum dictates whether to concat integers to number on right or left side of operator
  if(opNum){
    rightNum = ($(this).text());
    rightHolder = rightHolder + rightNum;
    $('#screen').text(holder + ' ' + oper + ' ' + rightHolder);
  }
})


$('.operator').not('#equals').not('#clear').on('click', function(){
  //select math operator button
  if(holder===''){
    holder = '-';
    $('#screen').text(holder);
  }
  //if no number is input, '-' means neg.# on left side of operator
  else if(oper && ($(this).text())==='-'){
    rightHolder = '-';
    $('#screen').text(holder+' '+oper+' '+rightHolder)
  }
  //if an operator already has been chosen, '-' is for neg.# on right side
  else{
    oper = ($(this).text());
    opNum = true;
    $('#screen').text(holder+' '+oper);
  }
  //if a number has already been entered and no other operator selected it must be a minus sign or just the other operator.  opNum boolean switches to true, next input starts right side number

})

$('#clear').on('click', function(){
  holder = '';
  rightHolder = '';
  oper = '';
  opNum = false;
  answer = 0;
  $('#screen').text(holder);
  //resets all variables
})

$('#equals').on('click', function(){
  leftInteger = (parseInt(holder));
  rightInteger = (parseInt(rightHolder));
  //turn left&right numbers into into integers
  console.log('left = ' + leftInteger);
  console.log('right = ' + rightInteger);
  console.log(oper);
  //switch stmt converts button pushed into mathmatical fxn
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
    case oper ==='':
      answer = leftInteger;
      break;
    default:
      answer = 'Error';
  }
  // opNum = false
  // holder = '';
  // resets right number and goes back to left side, equals == clear **commented out**

  oper = '';
  rightHolder = '';
  holder = answer;
  //resets operator and right number, answer will be stored as left # for further manipulation

  console.log('answer = ' + answer);
  if(answer%1===0){
    //if answer is a whole number, show no decimal places
    $('#screen').text(parseFloat(answer));
  }
  else{
    //if answer is decimal, show only up to 4 decimal places
    $('#screen').text(parseFloat(answer.toFixed(4)));
  }


})

});
