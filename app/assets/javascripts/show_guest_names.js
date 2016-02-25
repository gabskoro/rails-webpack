require('style.css');
var buttons = require('button.css');

var GuestList = require('guest_list.js');

module.exports = function() {
    var ul = document.createElement('ul');
    GuestList.map(function(guest) {
        var name = document.createTextNode(guest.name);
        var li = document.createElement('li');
        // li.className = buttons['action-button'];
        li.appendChild(name);
        ul.appendChild(li);
    });
    document.getElementById('list').appendChild(ul);
    console.log('test');
};
