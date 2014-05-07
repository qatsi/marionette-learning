var ContactManager = new Marionette.Application();

ContactManager.addRegions({
  mainRegion: "#main-region"
});

ContactManager.on('initialize:after', function(){
  // ContactManager.ContactsApp.List.Controller.listContacts();
  if (Backbone.history) {
    Backbone.history.start();
  }
});

// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();