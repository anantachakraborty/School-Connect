<?php
  if(isset($_GET['query'])) {
    $search_term = $_GET['query'];
    echo "You searched for: " . $search_term;
  }
?>
