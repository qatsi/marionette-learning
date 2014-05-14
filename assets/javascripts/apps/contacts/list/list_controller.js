ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _) {
  List.Controller = {
    listContacts: function() {
      var loadingView = new ContactManager.Common.Views.Loading();
      ContactManager.infoRegion.show(loadingView);

      var deferredContacts = ContactManager.request('contact:entities');
      $.when(deferredContacts).done(function(contacts) {
        var contactsListView = new List.Contacts({
          collection: contacts
        });
        // Item delete trigger
        contactsListView.on('itemview:contact:delete', function(childView, model) {
          model.destroy();
        });
        // Item show trigger
        contactsListView.on('itemview:contact:show', function(childView, model) {
          ContactManager.trigger('contact:show', model.get('id'));
        });
        // Show template
        ContactManager.mainRegion.show(contactsListView);
      });
    }
  }
});
