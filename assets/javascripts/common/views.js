ContactManager.module('Common.Views', function(Views, ContactManager, Backbone, Marionette, $, _){
  Views.Loading = Marionette.ItemView.extend({
    template: '#loading',
    serializeData: function(){
      return {
        title: this.options.title || 'Loading data',
        message: this.options.message || 'Please wait a bit…'
      }
    },
    onShow: function(){
      var opts = {
        lines: 7, // The number of lines to draw
        length: 0, // The length of each line
        width: 14, // The line thickness
        radius: 0, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 90, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#fff', // #rgb or #rrggbb or array of colors
        speed: 1.5, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: true, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: '50%', // Top position relative to parent
        left: '96%' // Left position relative to parent
      };
      $('#spinner').spin(opts);
    }
  });
});