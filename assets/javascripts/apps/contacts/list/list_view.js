ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
  List.Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: List.Templates.listItemView,
    events: {
      // 'click': 'highlightNames',
      'click td': 'showInfo', 
    },
    highlightNames: function(e){
      // console.log(this);
      e.preventDefault();
      this.$el.toggleClass('alert');
    },
    showInfo: function(e){
      console.log(e);
      e.preventDefault();
      alert($(e.target).text());
    }
    

  });
  List.Contacts = Marionette.CompositeView.extend({
    tagName: 'table',
    template: List.Templates.listView,
    itemView: List.Contact,
    itemViewContainer: 'tbody'
  });
});
