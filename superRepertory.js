



if (Meteor.isClient) {

  Template.Home.rendered = function(){
    Accounts._loginButtonsSession.set('dropdownVisible', true);
  };

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
