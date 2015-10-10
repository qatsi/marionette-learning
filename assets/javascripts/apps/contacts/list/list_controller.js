ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _) {
  List.Controller = {
    listContacts: function() {
      var loadingView = new ContactManager.Common.Views.Loading({
        title: 'Loading list.'
      });
      ContactManager.infoRegion.show(loadingView);

      var deferredContacts = ContactManager.request('contact:entities');
      $.when(deferredContacts).done(function(contacts) {
        var contactsListView = new List.Contacts({
          collection: contacts
        });
        // Item delete trigger
        contactsListView.on('childview:contact:delete', function(childView, model) {
          model.destroy();
        });
        // Item show trigger
        contactsListView.on('childview:contact:show', function(childView, model) {
          ContactManager.trigger('contact:show', model.get('id'));
        });
        // Item edit trigger
        contactsListView.on('childview:contact:edit', function(childView, model) {
          ContactManager.trigger('contact:edit', model.get('id'));
        });
        // Show template
        ContactManager.mainRegion.show(contactsListView);
      });
    }
  }
});
