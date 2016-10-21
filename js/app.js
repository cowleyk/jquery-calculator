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
                // console.log(holder);
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
  if(holder==='' && ($(this).text())==='-'){
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
    console.log(holder+' '+oper);
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
  leftInteger = (parseFloat(holder));
  rightInteger = (parseFloat(rightHolder));
  //turn left&right numbers into into integers
                    // console.log('left = ' + leftInteger);
                    // console.log('right = ' + rightInteger);
                    // console.log(oper);
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

  if(answer===(Infinity)||answer===(-Infinity)){
    $('#screen').text('ERROR');

  }
  else if(answer%1===0){
    //if answer is a whole number, show no decimal places
    var answerOne = parseFloat(answer);
    $('#screen').text(answerOne);
    holder = answerOne;
  }
  else{
    //if answer is decimal, show only up to 4 decimal places
    var answerTwo = parseFloat(answer.toFixed(4));
    $('#screen').text(answerTwo);
    holder = answerTwo;
  }
  oper = '';
  rightHolder = '';
  opNum = false;
  console.log(holder);
  //resets operator, opNum & right number, answer will be stored as left # for further manipulation, after = but before an operator numbers will concat on left number

})

});
