<?php
define('HOST', 'localhost');
define('USER', 'sgauser');
define('PASSWORD', 'SenhaNovoSGA');
define('DATABASE', 'sgadb');

$conexao = mysqli_connect(HOST, USER, PASSWORD, DATABASE) or die ('Não foi possivel conectar!');