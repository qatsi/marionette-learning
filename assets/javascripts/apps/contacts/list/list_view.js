ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
  List.Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: List.Templates.listItemView,
    events: {
      'click': 'highlightNames',
      // 'click': 'showInfo',
      'click a.button.js-delete': 'deleteClicked', 
    },
    highlightNames: function(e){
      // console.log(this);
      e.preventDefault();
      this.$el.toggleClass('alert');
    },
    showInfo: function(e){
      console.log(this.$el);
      e.preventDefault();
      alert($(this.el).text());
    },
    deleteClicked: function(e){
      e.stopPropagation();
      console.log(this.model.collection);
      this.model.collection.remove(this.model);
    }

  });
  List.Contacts = Marionette.CompositeView.extend({
    tagName: 'table',
    template: List.Templates.listView,
    itemView: List.Contact,
    itemViewContainer: 'tbody'
  });
});
