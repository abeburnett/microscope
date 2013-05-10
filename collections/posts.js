Posts = new Meteor.Collection('posts');

Posts.allow({
    insert: function(userId, doc) {
        // only allows posting if user logged in
        return !! userId;
    }
})