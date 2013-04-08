<?php
include config.php

$sql = "select c.id, c.organization_name, c.department from directory c where c.organization_name = o.organization_name from organizations where o.base_number =:id"

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