<?php
/**
 * Created by PhpStorm.
 * User: KilleR
 * Date: 08/05/2017
 * Time: 10:22
 */

DEFINE ("DB_USER", "");
DEFINE ("DB_PASSWORD", '');
DEFINE ("DB_HOST", "");
DEFINE ("DB_NAME", "");
DEFINE ("DB_PORT", "");

$dsn = 'mysql:dbname='.DB_NAME.';port='.DB_PORT.';host='.DB_HOST;
try {
    $PDOc = new PDO($dsn, DB_USER, DB_PASSWORD);
} catch(PDOException $e) {
    die ("I can't connect to MySQL: ".$e->getMessage());
}

$data=NULL;

/**
 * Use PDO to prepare and execute a MySQL INSERT query.
 *
 * Variables and values in the query MUST be passed as parameters to ensure security is maintained.
 *
 * @param string	$query	MySQL query to be executed, with variables in :var format
 * @param array		$params	An associative array of ':var'=>'value' for every parameter in $query
 *
 * @return mixed	returns the insert id on success, or false on failure
 */
function PDOexecute_insert($query, $params) {
    global $PDOc; // needs to be able to see the PDO DB connection
    // catch and handle NULL values
    foreach($params as $key=>$val) {
        if(gettype($val) == 'NULL') {
            $params[$key] = '';
        }
    }

    $PDOs = $PDOc->prepare($query);
    if($PDOs->execute($params)) {
        $id = $PDOc->lastInsertId();
        return $id;
    } else {
//    print_r($PDOs->errorInfo());
        return false;
    }
}

/**
 * Use PDO to prepare and execute a MySQL UPDATE or DELETE query.
 *
 * Variables and values in the query MUST be passed as parameters to ensure security is maintained.
 *
 * @param string	$query	MySQL query to be executed, with variables in :var format
 * @param array		$params	An associative array of ':var'=>'value' for every parameter in $query
 *
 * @return boolean	returns true on success, false on failure
 */
function PDOexecute_update($query, $params) {
    global $PDOc; // needs to be able to see the PDO DB connection
    // catch and handle NULL values
    foreach($params as $key=>$val) {
        if(gettype($val) == 'NULL') {
            $params[$key] = '';
        }
    }

    $PDOs = $PDOc->prepare($query);
    if($PDOs->execute($params)) {
        return true;
    } else {
        //print_r($PDOs->errorInfo());
        return false;
    }
}

/**
 * Use PDO to prepare and execute a MySQL SELECT query.
 *
 * Variables and values in the query MUST be passed as parameters to ensure security is maintained.
 *
 * @param string	$query	MySQL query to be executed, with variables in :var format
 * @param array		$params	An associative array of ':var'=>'value' for every parameter in $query
 *
 * @return mixed	returns an array of results on success, or false on failure
 */
function PDOexecute_select($query, $params) {
    global $PDOc; // needs to be able to see the PDO DB connection
    // catch and handle NULL values
    foreach($params as $key=>$val) {
        if(gettype($val) == 'NULL') {
            $params[$key] = '';
        }
    }

    $PDOs = $PDOc->prepare($query);
    if($PDOs->execute($params)) {
        $result = $PDOs->fetchAll(PDO::FETCH_ASSOC);
        // strip unwanted slashes
        foreach($result as $resultkey=>$resultval) {
            foreach($resultval as $key=>$val) {
                $result[$resultkey][$key] = stripslashes(str_replace('\r\n',PHP_EOL,$val));
            }
        }
        return $result;
    } else {
//    print_r($PDOs->errorInfo());
        return false;
    }
}