// constructor functions for the user & chatroom
const User = function(name) {
    this.name = name;

    this.chatroom = null;
};

const Chatroom = function() {
    let users = {}; // a list of users

    return {
        register: function(user) {
            users[user.name] = user;

            user.chatroom = this;
        },

        send: function(msg, from, to) {
            if (to) {
                to.receive(msg, from);
            } else {
                for(key in users) {if(users[key] !== from) users[key].receive(msg, from);}
            }
        }
    };
};

// define prototype methods for User
User.prototype = {
    // the 2nd 'this' refers to User
    send: function(msg, to) {this.chatroom.send(msg, this, to);},

    receive: function(msg, from) {console.log(`From ${from.name} to ${this.name}: ${msg}`);}
};

// create some users & a chatroom
const user1 = new User('Maynard');
const user2 = new User('Adam');
const user3 = new User('Justin');
const user4 = new User('Danny');
const user5 = new User('Paul');

const chatroom = new Chatroom();

// users register to the chatroom
chatroom.register(user1);
chatroom.register(user2);
chatroom.register(user3);
chatroom.register(user4);
chatroom.register(user5);

// sending msg
user1.send('Hello Adam', user2);
user2.send('Hello Justin', user3);
user3.send('Hello Danny', user4);
user4.send('Hello Paul', user5);