



if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  // Template.Home = function()
  // {
  //     loginButtons.set('dropdownVisible', false);
  // };
  Template.Home.rendered = function(){
    Accounts._loginButtonsSession.set('dropdownVisible', true);
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
