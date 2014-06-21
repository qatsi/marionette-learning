ContactManager.module('ContactsApp.Edit', function(Edit, ContactManager, Beckbone, Marionette, $, _){
  Edit.Contact = Marionette.ItemView.extend({
    template: '#contact-form',
    events: {
      'click button.js-submit': 'submitClicked'
    },
    onShow: function(){
      ContactManager.infoRegion.close();
    },
    submitClicked: function(e){
      e.preventDefault();
      console.log('Edit contact');
    }
  });
});