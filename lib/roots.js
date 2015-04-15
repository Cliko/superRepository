Router.route('/', function () {
  // render the Home template with a custom data context
  this.render('Home', {data: {title: 'Home page'}});
});
Router.route('/repository', function () {
  // render the Home template with a custom data context
  this.render('Repository', {data: {title: 'Repository page'}});
});
Router.route('/create', function () {
  // render the Home template with a custom data context
  this.render('ContactCreate', {data: {title: 'Create contact'}});
});