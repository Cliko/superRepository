contacts = new Mongo.Collection( "contacts" );
if (Meteor.isClient) {

    Template.Home.rendered = function(){
        Accounts._loginButtonsSession.set('dropdownVisible', true);
     };

    Template.Home.helpers({
        all_contacts: function(){
            return contacts.find().map
            (
                function( contact )
                {
                    return { lastname : contact.lastname.toUpperCase(), firstname : contact.firstname, mail : contact.mail , phone: contact.phone };
                }
            );
        }
    });

    Template.ContactCreate.events
    ( {
        'click #submit_contact' : function( event, template ) {
            event.preventDefault();
            var $lastname = template.find("#lastname");
            var $firstname = template.find("#firstname");
            var $mail = template.find("#mail");
            var $phone = template.find("#phone");
        }
    });

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
