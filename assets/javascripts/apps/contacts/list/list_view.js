ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
  List.Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: List.Templates.listItemView,
    events: {
      'click': 'highlightNames',
      'click a.button.js-show': 'showClicked',
      'click a.button.js-edit': 'editClicked',
      'click a.button.js-delete': 'deleteClicked'
    },
    highlightNames: function(e){
      // console.log(this);
      e.preventDefault();
      this.$el.toggleClass('alert');
    },
    showClicked: function(e){
      e.preventDefault();
      e.stopPropagation();
      this.trigger('contact:show', this.model);
    },
    editClicked: function(e){
      e.preventDefault();
      e.stopPropagation();
      this.trigger('contact:edit', this.model);
    },
    deleteClicked: function(e){
      e.preventDefault();
      e.stopPropagation();
      this.trigger('contact:delete', this.model);
    },
    remove: function(){
      this.$el.fadeOut(function(){
        // Delete element
        $(this).remove();
      });
    }
  });
  List.Contacts = Marionette.CompositeView.extend({
    tagName: 'table',
    template: List.Templates.listView,
    itemView: List.Contact,
    itemViewContainer: 'tbody',
    // Magic trigger
    onItemviewContactDelete: function(){
      this.$el.fadeOut(function(){
        $(this).fadeIn();
      });
    },
    onShow: function(){
      ContactManager.infoRegion.close();
    }
  });
});