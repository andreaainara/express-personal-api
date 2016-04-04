console.log("Sanity Check: JS is working!");
var template;
var $bookList;
var allBooks = [];

$(document).ready(function(){

$bookList = $('#bookTarget');

// compile handlebars template
var source = $('#book-template').html();
template = Handlebars.compile(source);
//get profile data
  $.ajax({
    method: 'GET',
    url: '/api/profile',
    success: showProfileSuccess,
    error: showProfileError
  });

$('#newBookForm').on('submit', function(e){
  e.preventDefault();
  console.log('new book serialized ', $(this).serializeArray());
  $.ajax({
    method: 'POST',
    url: '/api/favoritebooks',
    data: $(this).serializeArray(),
    success: newBookSuccess,
    error: newBookError
  });
});

$('#newBookForm').on('submit', function(e){
  e.preventDefault();
  $.ajax({
    method: 'PUT',
    url: '/api/favoritebooks/' + $(this).attr('data-id'),
    success: updateSuccess,
    error: updateError
  });
});

$bookList.on('click', '.deleteBtn', function(){
  console.log('you are trying to delete ', '/api/favoritebooks/' + $(this).attr('data-id'));
  $.ajax({
    method: 'DELETE',
    url: '/api/favoritebooks/' + $(this).attr('data-id'),
    success: deleteBookSuccess,
    error: deleteBookError
  });
});

});

//helper function to render all posts to views
//the collection is emptied and re-rendered every time our posts data change
function render(){
  //empty existing posts from views
  $bookList.empty();
  var source = $('#book-template').html();
  var template = Handlebars.compile(source);
  //pass allCity empty array into the template function
  var bookHtml = template({ favoritebooks : allBooks });
  //append to html to the view
  $bookList.append(bookHtml);
}

function showProfileSuccess(json){
// compile handlebars template
var source = $('#profile-template').html();
var template = Handlebars.compile(source);

var profile = json.Profile;
var profileHtml = template({profile:profile});
$('#profileTarget').append(profileHtml);
}

function showProfileError(err){
  console.log("Error: " + err);
}

function newBookSuccess(json){
  $('#newBookForm').val('');
  allBooks.push(json);
  render();
}

function newBookError(){
  console.log("Andrea doesn't like that book!");
}

function updateSuccess(json){
  $('#newBookForm').val('');
  allBooks.push(json);
  render();
}

function updateError(){
  console.log("Book update error!");
}

function deleteBookSuccess(json){
  var favoriteBooks = json;
  console.log(json);
  var bookId = favoriteBooks._id;
  console.log('delete book: ', bookId);
  // this will find the correct book and remove it from the array
  for(var index = 0; index < allBooks.length; index++){
    if(allBooks[index]._id === bookId){
      allBooks.splice(index, 1);
      break;
    }
  }
  render();
}

function deleteBookError(){
  console.log('Error! Why are you trying to take it away? :(');
}
