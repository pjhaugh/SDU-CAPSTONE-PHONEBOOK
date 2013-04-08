var serviceURL = "http://localhost/directory/services/";

var phoneBook;

$('#homePage').bind('pageinit', function(event) {
	getBooks();
});

function getBooks() {
$('#bookList li').remove();
	$.getJSON(serviceURL + 'getBooks.php', function(data) {
		
		phoneBook = data.items;
		$.each(phoneBook, function(index, phoneBook) {
			$('#bookList').append('<li><a href="numberList.html?id=' + phonebook.baseNumber + '">' +
					'<h4>'   phoneBook.name   '<h/4>')
		});
		$('#contactList').listview('refresh');
	});
}