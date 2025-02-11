<?php
class PersoController{

  public function Add($perso = []){
    var_dump($perso);
    var_dump($_POST);
    http_response_code(200);
  }

}