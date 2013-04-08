var serviceURL = "http://localhost/directory/services/";

var phoneBook;

$('#home').bind('pageinit', function(event) {
	getBooks();
});

function getBooks() {
	$.getJSON(serviceURL + 'getBooks.php', function(data) {
		$.each('#bookList li').remove();
		phoneBook = data.items;
		$.each(phoneBook, function(index, phoneBook) {
			$('#bookList').append('<li><a href="numberList.html?id=' + phonebook.baseNumber + '">' +
					   phoneBook.name   '</li>')
		});
		$('#bookList').listview('refresh');
	});
}