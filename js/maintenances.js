$preventiveButton = document.getElementById('preventive');
$preventiveButton.onclick = function(e){
    $preventiveButton.classList.add('selected')
    $correctiveButton.classList.remove('selected')
}

$correctiveButton = document.getElementById('corrective');
$correctiveButton.onclick = function(e){
    $correctiveButton.classList.add('selected')
    $preventiveButton.classList.remove('selected')
}