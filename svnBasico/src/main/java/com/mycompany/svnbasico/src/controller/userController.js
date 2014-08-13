    App.Controller.UserController = Backbone.View.extend({
        el: '#main',
        initialize: function(options) {
            this.editTemplate = _.template($('#user').html());
			this.editTemplate2 = _.template($('#user2').html());
            var self = this;
            Backbone.on('user-create', function(params) {
                self.create(params);
            });
            Backbone.on('user-save', function(params) {
                self.save(params);
            });
            Backbone.on('user-cancel', function(params) {
                self.cancel(params);
            });
        },
        create: function() {
            this.userModel = new App.Model.UserModel();
            this._renderEdit();
        },
        save:function() { 
            var model = $('#userForm').serializeObject();
			//this._renderEdit2();
			var aleatorio = Math.floor(Math.random() * 51) + 25;
            alert('saved model: '+JSON.stringify(model)+' Num' +aleatorio);
        },
        cancel: function(){
            alert('Cancel');
        },
        _renderEdit: function() {
            var self = this;
            self.$el.html(self.editTemplate({user: self.userModel}));
        },
		_renderEdit2: function() {
            var self = this;
            self.$el.html(self.editTemplate2({user: self.userModel}));
        }
    });