<?php

include_once("conexao.php");

$conexao = mysqli_connect(HOST, USER, PASSWORD, DATABASE) or die ('Não foi possivel conectar!');
$result = mysqli_query($conexao, "SELECT * from atendimentos where dt_cha is not NULL");

$atendimentos = array();

while ($pedido = mysqli_fetch_array($result)) {
    $atendimentos[] = $pedido['id'];
}
// Parte importante
header("content-type: application/json");
json_encode($atendimentos);