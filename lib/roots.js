Router.route('/', function () {
  // render the Home template with a custom data context
  this.render('Home', {data: {title: 'Home page'}});
});
Router.route('contact/create', function () {
  // render the Home template with a custom data context
  this.render('ContactCreate', {data: {title: 'Create contact'}});
});
Router.route('contact/edit', function () {
    // render the Home template with a custom data context
    this.render('ContactEdit', {data: {title: 'Edit contact'}});
});
Router.route('contact/delete', function () {
    // render the Home template with a custom data context
    this.render('ContactDelete', {data: {title: 'Delete contact'}});
});
Router.route('contact', function () {
    // render the Home template with a custom data context
    this.render('Contact', {data: {title: 'Contact page'}});
});