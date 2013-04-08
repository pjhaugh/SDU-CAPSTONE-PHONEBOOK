<?php
include config.php

$sql = "select o.id, o.Organization_name from organizations o"

try{
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $dbh->prepare($sql);  
    $stmt->bindParam("id", $_GET[id]);
    $stmt->execute();
    $contact = $stmt->fetchObject();
    $dbh = null;
    echo '{"item":'. json_encode($contact) .'}';
}catch(PDOException $e){
    echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}


>