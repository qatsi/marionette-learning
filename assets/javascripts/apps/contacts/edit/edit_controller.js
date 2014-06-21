ContactManager.module('ContactsApp.Edit', function(Edit, ContactManager, Beckbone, Marionette, $, _){
  Edit.Controller = {
    editContact: function(id){
      var loadingView = new ContactManager.Common.Views.Loading({
        title: 'Loading item.'
      });
      ContactManager.infoRegion.show(loadingView);
      // Here we recieve promise object
      var deferredContact = ContactManager.request('contact:entity', id);
      $.when(deferredContact).done(function(contact){
        var contactView;
        if (contact !== undefined) {
          contactView = new Edit.Contact({
            model: contact
          });
        } else {
          contactView = new ContactManager.ContactsApp.Show.MissingContact();
        }
        ContactManager.mainRegion.show(contactView);
      });
    }
  };
});