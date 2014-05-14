ContactManager.module('ContactsApp.Show', function(Show, ContactManager, Backbone, Marionette, $, _) {
  Show.Contact = Marionette.ItemView.extend({
    template: '#contact-show',
    onShow: function(){
      ContactManager.infoRegion.close();
    }
  });
  Show.MissingContact = Marionette.ItemView.extend({
    template: '#missing-contact',
    onShow: function(){
      ContactManager.infoRegion.close();
    }
  });
});