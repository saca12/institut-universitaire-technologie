<?php

if($_SERVER["REQUEST_METHOD"]=="post")
{
    $nom = $_POST['name'];
    $prenom = $_POST['last_name'];
    $birth_date = $_POST['birth_date'];
    $birth_place = $_POST('birth_place');
    $national = $_POST('notional');
    $level = $_POST('level');
    $diplome_year = $_POST('diplome_year');
    $diplome = $_POST('diplome');
    $school = $_POST('school');
    $filiere = $_POST('filiere');

    $information = array(
        'nom'=>$nom,
        'prenom'=>$prenom,
        'date_naiss'=>$birth_date,
        'lieu_naiss'=>$birth_place,
        'nationalite'=>$national,
        'niveau'=>$level,
        'annee_diplome'=>$diplome_year,
        'diplome'=>$diplome,
        'ecole'=>$school,
        'filiere'=>$filiere
    );

    $data = fopen('users',"a+");
    if($data==NULL) echo 'Erreur lors de l\'ouverture du fichier';
    else{
        foreach($information as $key => $value){
            fwrite($data,$value);
        }
        
    }
}