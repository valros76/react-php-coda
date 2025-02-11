<?php
class PersoController
{

  public function Add(...$perso)
  {
    $pseudo = $perso["pseudo"];
    $title = $perso["title"];
    $job = $perso["job"];
    $stats = $perso["stats"];
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
    }
    http_response_code(200);
  }
}
