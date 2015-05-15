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
                    return { id: contact._id ,lastname : contact.lastname.toUpperCase(), firstname : contact.firstname, mail : contact.mail , phone: contact.phone };
                }
            );
        }
    });
    Template.ContactCreate.events
    ( {
        'submit .add_contact' : function( event, template ) {
            event.preventDefault();
            var $lastname = event.target.lastname.value;
            var $firstname = event.target.firstname.value;
            var $mail = event.target.mail.value;
            var $phone = event.target.phone.value;
            contacts.insert({
                lastname : $lastname, firstname : $firstname, mail : $mail , phone: $phone
            });
            Router.go("Home");
        }
    });
    Template.ContactEdit.rendered = function(){
        var contact_id = Session.get('contact_id');
        var contact = contacts.findOne(contact_id);
        console.log(contact_id);
        $("input#firstname").val(contact.firstname);
        $("input#lastname").val(contact.lastname);
        $("input#mail").val(contact.mail);
        $("input#firstname").val(contact.firstname);
        $("input#phone").val(contact.phone);
    }
    Template.ContactEdit.events
    ( {
        'submit #edit_contact' : function( event, template ) {
            event.preventDefault();
            var $lastname = event.target.lastname.value;
            var $firstname = event.target.firstname.value;
            var $mail = event.target.mail.value;
            var $phone = event.target.phone.value;
            var contact_id = Session.get('contact_id');
            contacts.update({ _id: contact_id},{
                lastname : $lastname, firstname : $firstname, mail : $mail , phone: $phone
            });
        }
    });
    Template.Home.events
    ( {
        'submit .' : function( event, template ) {
            event.preventDefault();

        }
    })

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
