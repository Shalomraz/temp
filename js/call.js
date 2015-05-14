/**
 ** What is the output of each commnted line at the end?
 **/

var myName = 'Nir Geier',
  myId = 54321;

var myProfile = {
  myName: 'Citizen X',
  fullProfile: {
    myName: 'Dodly',
    myId: 12345,
    getMyProfileSummary: function() {
     return 'My name is: ' + this.myName + ' & my id#: ' + this.myId;
    }
  }
};

var test1 = myProfile.fullProfile.getMyProfileSummary;
var test2 = test1.call(myProfile);

console.log(myProfile.fullProfile.getMyProfileSummary()); 
console.log(test1());  
console.log(test2);

