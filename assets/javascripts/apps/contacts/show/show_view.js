ContactManager.module('ContactsApp.Show', function(Show, ContactManager, Backbone, Marionette, $, _) {
  Show.Contact = Marionette.ItemView.extend({
    template: '#contact-show'
  });
  Show.MissingContact = Marionette.ItemView.extend({
    template: '#missing-contact'
  });
});