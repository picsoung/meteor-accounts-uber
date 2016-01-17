Package.describe({
  name: 'picsoung:accounts-uber',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Login service for Uber',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/picsoung/meteor-accounts-uber',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('picsoung:uber@1.0.0', ['client', 'server']);

  api.add_files("uber.js");
});
