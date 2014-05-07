var ContactManager = new Marionette.Application();

ContactManager.addRegions({
  mainRegion: "#main-region"
});

ContactManager.on('initialize:after', function(){
  if (Backbone.history) {
    Backbone.history.start();
    if (Backbone.history.fragment === '') {
      Backbone.history.navigate('contacts');
      // Call it directly. Don't use {trigger: true}
      ContactManager.ContactsApp.List.Controller.listContacts();
    }
  }
});

// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();