var ContactManager = new Marionette.Application();

info = Backbone.Marionette.Region.extend({
  el: "#info-region",
  open: function(view){
    console.log(this);
    this.$el.hide();
    this.$el.empty().append(view.el);
    this.$el.slideDown('fast');
  }
});

ContactManager.addRegions({
  mainRegion: "#main-region",
  infoRegion: info
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
      ContactManager.trigger('contacts:list');  
    }
  }
});

// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();