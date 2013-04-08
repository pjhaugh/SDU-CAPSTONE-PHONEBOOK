var serviceURL = "http://localhost/directory/services/";

var phoneBook;

$("#home").live("pagecreate", function(event) {
	getBooks();
});

function getBooks() {
	$.getJSON(serviceURL + 'getBooks.php', function(data) {
		$('#bookList li').remove();
		phoneBook = data.items;
		$.each(phoneBook, function(index, phoneBook) {
			$('#bookList').append('<li><a href="numberList.html?id=' + phonebook(index).baseNumber + '">' + phoneBook(index).name  + '</li>');
		});
		$('#bookList').listview('refresh');
	});
}