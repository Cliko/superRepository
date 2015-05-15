Router.map(function(){

    this.route('/', function () {
      // render the Home template with a custom data context
      this.render('Home', {data: {title: 'Home page'}});
    });

    this.route('contact/create', function () {
      this.render('ContactCreate', {data: {title: 'Create contact'}});
    });
    this.route('contact/edit/:_id', function () {
        var edit_contact = contacts.findOne({_id: this.params._id});
        var params = this.params
        var id = params._id

        Session.set("contact_id", id)
        this.render('ContactEdit');
    });
    this.route('contact/delete/:_id', function () {
        this.render('ContactDelete', {data: {title: 'Delete contact',id:this.params}});
    });
    this.route('contact', function () {
        this.render('Contact', {data: {title: 'Contact page'}});
    });

    this.route('profil', function () {
        this.render('Profil', {data: {title: 'Mon profil'}});
    });

});
