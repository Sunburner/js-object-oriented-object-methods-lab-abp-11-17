function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;

}

function BoardMember.prototype.veto = function() {
  returns 'No, I must disagree'
}
// // function polishedBoardMember('Mr. Polished', 'New York', 'law') {
// let polishedBoardMember = new BoardMember('Mr. Polished', 'New York', 'law')
//   polishedBoardMember.veto() = function(){
//
//   // this.veto = function(){
//     console.log("No, I must disagree")
//   }

BoardMember.prototype.approve = function() {
  return 'You can do that!'
}


BoardMember.prototype.doCharity = function() {
  return 'I like to help people'
}


BoardMember.prototype.approve = function() {
  return 'Hi, my name is $[this.name}.  I am from ${homeState}, and I was trained in ${training}.'
}
