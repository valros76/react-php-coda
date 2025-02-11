<?php
class HttpRequest
{

  private $url;
  private $method;
  private $params;
  private $route;

  public function __construct($url = null, $method = null)
  {
    $this->url = is_null($url) ? $_SERVER["REQUEST_URI"] : $url;
    $this->method = is_null($method) ? $_SERVER["REQUEST_METHOD"] : $method;
    $this->params = [];
  }

  public function getUrl()
  {
    return $this->url;
  }

  public function getMethod()
  {
    return $this->method;
  }

  public function getParams()
  {
    return $this->params;
  }

  public function addParam($value)
  {
    $this->params[] = $value;
  }

  public function getRoute()
  {
    return $this->route;
  }

  public function setRoute($route)
  {
    $this->route = $route;
  }

  public function bindParam()
  {
    switch ($this->method) {
      case "GET":
      case "DELETE":
        foreach ($this->route->getParams() as $param) {
          if (isset($_GET["param"])) {
            $this->addParam($_GET[$param]);
          }
        }
        break;
      case "POST":
      case "PUT":
        foreach ($this->route->getParams() as $param) {
          if (isset($_POST["param"])) {
            $this->addParam($_POST[$param]);
          }
        }
        break;
    }
  }

  public function run($config){
    $this->bindParam();
    $this->route->run($this, $config);
  }
}
