// var sqlite3 = require(['sqlite3']);


const addMaintenanceCard = function (maintenance) {
    const $article = document.createElement("article"),
        $maintenancesCards = document.querySelector('.maintenancesCards');

    // Adding new article
    $article.classList.add('maintenance') //Adding the class
    $article.innerHTML = `<p class="date">${maintenance.date}</p>
        <p class="description">${maintenance.description}</p>
        <p class="responsible">Asignado a ${maintenance.responsible}</p>
        <div class="buttons">
            <button id="more"><img src="img/glasses.svg" alt="Ver más" width="32px"></button>
            <button id="postpone"><img src="img/timer.svg" alt="Posponer" width="22px"></button>
            <button id="cancel"><img src="img/rechaze.svg" alt="" width="24px"></button>
            <button id="done"><img src="img/accept.svg" alt=""width="30px"></button>
        </div>`

    // $activitiesList = $article.querySelector('.activities')

    // for (const activity of maintenance.activities) {
    //     const $newActivity = document.createElement('li')
    //     $newActivity.innerHTML = `
    //         <p class="name">${activity.name}</p>
    //         <p class="description">${activity.description}</p>`
    //     $activitiesList.appendChild($newActivity)
    // }

    $maintenancesCards.appendChild($article)
}

const newMaintenance = {
    'id' : 1,
    'type' : 'Preventivo',
    'date' : 'Agosto 5',
    'status' : 'Programado',
    'responsible': 'Carlos Cervantes',
    'description': 'Mantenimiento programado para despues.',
    'activities': [
        {
            'name':'Inspección visual',
            'description':'Inspecciones visualmente.'
        },
        {
            'name':'Inspección con cámara termográfica',
            'description':'Inspecciones con cámara para encontrar puntos calientes.'
        }
    ]
}

const newMaintenance2 = Object.assign({}, newMaintenance);
newMaintenance2.description = "Esto es una prueba."
newMaintenance2.date = 'Agosto 21'
newMaintenance2.responsible = 'Adrián Ramírez'

addMaintenanceCard(newMaintenance);
addMaintenanceCard(newMaintenance2);
addMaintenanceCard(newMaintenance);
addMaintenanceCard(newMaintenance2);