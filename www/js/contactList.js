var db;
var dbCreated = false;

var scroll = new iScroll('wrapper', { vScrollbar: false, hScrollbar:false, hScroll: false });

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    db = window.openDatabase("ContactDirectoryDB", "1.0", "PhoneGap Demo", 200000);
    if (dbCreated)
    	db.transaction(getContacts, transaction_error);
    else
    	db.transaction(populateDB, transaction_error, populateDB_success);
}

function transaction_error(tx, error) {
	$('#busy').hide();
    alert("Database Error: " + error);
}

function populateDB_success() {
	dbCreated = true;
    db.transaction(getContacts, transaction_error);
}

function getContacts(tx) {
	var sql = "select e.name, e.department from directory where e.organization_name = `UMD`";
	tx.executeSql(sql, [], getContacts_success);
}

function getContacts_success(tx, results) {
	$('#busy').hide();
    var len = results.rows.length;
    for (var i=0; i<len; i++) {
    	var contact = results.rows.item(i);
		$('#contactList').append('<li><a href="contactdetails.html?id=' + contact.id + '">' +
				'<p class="line1">' + contact.name + '</p>' +
				'<p class="line2">' + contact.title + '</p>' +
				'<span class="bubble">' + contact.reportCount + '</span></a></li>');
    }
	setTimeout(function(){
		scroll.refresh();
	},100);
	db = null;
}

function populateDB(tx) {
	$('#busy').show();
	tx.executeSql('DROP TABLE IF EXISTS directory');
	var sql = 
		"CREATE TABLE IF NOT EXISTS directory ( " +
		"`organization_name` varchar(50) NOT NULL," +
	        "`name` varchar(50) NOT NULL," +
	        "`department` varchar(50) NOT NULL," +
	        "`extension` varchar(5) NOT NULL," +
	        "PRIMARY KEY(`extension`)" +
	        ");";
        tx.executeSql(sql);
    
        tx.executeSql("INSERT INTO directory (organization_name, name, department, extension) VALUES (`UMD`, `John Doe`, `Agriculture`, `12234`), " +
		      "(`Other Place`, `Jane Smith`, `Lazer Research`, `63230`)");

}
