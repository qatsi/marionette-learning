ContactManager.module('ContactsApp.Show', function(Show, ContactManager, Backbone, Marionette, $, _) {
  Show.Controller = {
    showContact: function(id){
      var loadingView = new ContactManager.Common.Views.Loading({
        title: 'Loading item.'
      });
      ContactManager.infoRegion.show(loadingView);
      // Here we recieve promise object
      var deferredContact = ContactManager.request('contact:entity', id);
      $.when(deferredContact).done(function(contact){
        var contactView;
        if (contact !== undefined) {
          contactView = new Show.Contact({
            model: contact
          });
          contactView.on('contact:edit', function(contact){
            ContactManager.trigger('contact:edit', contact.get('id'));
          });
        } else
        {
          contactView = new Show.MissingContact();
        }
        ContactManager.mainRegion.show(contactView);
      });
    }
  }
});