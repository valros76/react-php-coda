<?php
class PersoController
{

  public function Add(...$perso)
  {
    $pseudo = $perso["pseudo"] ?? null;
    $title = $perso["title"] ?? null;
    $job = $perso["job"] ?? null;
    $stats = $perso["stats"] ?? null;

    if(
      !$pseudo
      || !$title
      || !$job
      || !$stats
    ){
      http_response_code(400);
      echo json_encode([
        "message" => "Une ou plusieurs valeurs ne sont pas définies.",
        "status" => 400
      ]);
      exit;
    }

    $config = new Config();
    $persoManager = new Perso(BDD::getInstance($config->getConfig()));

    $persoManager->initPerso(
      [
        "pseudo" => $pseudo,
        "title" => $title,
        "job" => $job,
        "stats" => [
          "strength" => $stats["strength"],
          "dexterity" => $stats["dexterity"],
          "luck" => $stats["luck"],
          "intelligence" => $stats["intelligence"],
          "wisdom" => $stats["wisdom"]
        ]
      ]
    );

    $newPerso = $persoManager->getAllProperties();

    if ($persoManager->add(
      $newPerso["pseudo"],
      $newPerso["title"],
      $newPerso["job"],
      $newPerso["stats"]
    )) {
      http_response_code(200);
      $response = json_encode([
        "message" => "Ajout du personnage en base de données.",
        "status" => 200
      ]);
      echo $response;
      exit;
    }

    http_response_code(400);
    $response = json_encode([
      "message" => "Erreur lors de l'ajout du personnage en BDD.",
      "status" => 400
    ]);
    echo $response;
    exit;
  }

  public function ShowList(){
    $configManager = new Config();
    $persoManager = new Perso(BDD::getInstance($configManager->getConfig()));
    $persos = $persoManager->getList();
    if(!$persos){
      http_response_code(400);
      echo json_encode([
        "message" => "Aucun personnage trouvé.",
        "status" => 400
      ]);
      exit;
    }

    http_response_code(200);
    echo json_encode([
      "message" => "Liste des personnages.",
      "status" => 200,
      "persos" => $persos
    ]);
    exit;
  }

  public function Show(...$params){
   $id = $params["id"];
  }

  public function Delete(...$params){
    $id = $params["id"];
  }

}
