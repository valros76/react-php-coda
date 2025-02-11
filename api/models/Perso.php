<?php
class Perso{
  private int $id;
  private string $pseudo;
  private string $title;
  private string $job;
  private string $stat_strength;
  private string $stat_dexterity;
  private string $stat_luck;
  private string $stat_intelligence;
  private string $stat_wisdom;
  private string $creation_date;

  private $bdd;

  public function __construct($bdd = null){
    if(!is_null($bdd)){
      $this->setBdd($bdd);
    }
  }

  public function getId(): int{
    return $this->id;
  }

  public function setId(int $id){
    $this->id = $id;
  }

  public function getPseudo(): string{
    return $this->pseudo;
  }

  public function setPseudo(string $pseudo){
    $this->pseudo = $pseudo;
  }

  public function getTitle(): string{
    return $this->title;
  }

  public function setTitle(string $title){
    $this->title = $title;
  }

  public function getJob(): string{
    return $this->job;
  }

  public function setJob(string $job){
    $this->job = $job;
  }

  public function getStatStrength(): string{
    return $this->stat_strength;
  }

  public function setStatStrength(string $stat_strength){
    $this->stat_strength = $stat_strength;
  }

  public function getStatDexterity(): string{
    return $this->stat_dexterity;
  }

  public function setStatDexterity(string $stat_dexterity){
    $this->stat_dexterity = $stat_dexterity;
  }

  public function getStatLuck(): string{
    return $this->stat_luck;
  }

  public function setStatLuck(string $stat_luck){
    $this->stat_luck = $stat_luck;
  }

  public function getStatIntelligence(): string{
    return $this->stat_intelligence;
  }

  public function setStatIntelligence(string $stat_intelligence){
    $this->stat_intelligence = $stat_intelligence;
  }

  public function getStatWisdom(): string{
    return $this->stat_wisdom;
  }

  public function setStatWisdom(string $stat_wisdom){
    $this->stat_wisdom = $stat_wisdom;
  }

  public function getCreationDate(): string{
    return $this->creation_date;
  }

  public function setCreationDate(string $creation_date){
    $this->creation_date = $creation_date;
  }

  public function add(
    $pseudo,
    $title,
    $job,
    $stat_strength,
    $stat_dexterity,
    $stat_luck,
    $stat_intelligence,
    $stat_wisdom
  ){
    /**
     * TODO add datas into BDD
     */
  }

  private function setBdd($bdd){
    $this->bdd = $bdd;
  }
}