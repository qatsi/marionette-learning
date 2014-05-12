var ContactManager = new Marionette.Application();

ContactManager.addRegions({
  mainRegion: "#main-region"
});

ContactManager.navigate = function(route, options){
  options || (options = {});
  Backbone.history.navigate(route, options);
};

ContactManager.getCurrentRoute = function(){
  return Backbone.history.fragment;
}

ContactManager.on('initialize:after', function(){
  if (Backbone.history) {
    Backbone.history.start();
    if (this.getCurrentRoute() === '') {
      this.navigate('contacts');
      // Call it directly. Don't use {trigger: true}
      ContactManager.ContactsApp.List.Controller.listContacts();
    }
  }
});

// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();