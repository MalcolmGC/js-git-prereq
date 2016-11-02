(function() {
  'use strict';
  var listEl = document.querySelector('#list');
  var books = [
    {title: 'Emma', year: 1815, author: 'Jane Austen'},
    {title: 'Jane Eyre', year: 1847, author: 'Charlotte Brontë'},
    {title: 'Wuthering Heights', year: 1847, author: 'Emily Brontë'},
  ];
  function appendListItem (text) {
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(text));
    listEl.appendChild(entry);
  }
  //================================
  // Your code here
  //   loop through the books and use appendListItem to add an < li > for each book.
  // The text for the < li > should have the title, author and year.
  books.forEach (function (book) {
    var item = book.title 
      + ' by ' + book.author 
      + ' (' + book.year + ")"
    ;
    // document.getElementById('list').innerHTML += "<li>" + item+ "</li>";
    appendListItem(item);
  }); 
  //================================
}());
