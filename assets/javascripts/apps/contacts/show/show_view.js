ContactManager.module('ContactsApp.Show', function(Show, ContactManager, Backbone, Marionette, $, _) {
  Show.Contact = Marionette.ItemView.extend({
    template: '#contact-show',
    events: {
      'click a.js-edit': 'editClicked'
    },
    onShow: function(){
      ContactManager.infoRegion.destroy();
    },
    editClicked: function(e){
      e.preventDefault();
      this.trigger('contact:edit', this.model);
    }
  });
  Show.MissingContact = Marionette.ItemView.extend({
    template: '#missing-contact',
    onShow: function(){
      ContactManager.infoRegion.destroy();
    }
  });
});