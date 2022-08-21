var sqlite3 = require(['sqlite3']);


const addMaintenanceCard = function (maintenance) {
    const $article = document.createElement("article"),
        $maintenancesCards = document.getElementById('maintenancesCards');

    // Adding new article
    $article.classList.add('maintenance') //Adding the class
    $article.innerHTML = `<p class="type">${maintenance.type}</p>
        <p class="date">${maintenance.date}</p>
        <p class="status">${maintenance.status}</p>
        <p class="responsible">Asignado a ${maintenance.responsible}</p>
        <p class="comment">${maintenance.comment}</p>
        <ul class="activities">

        </ul>
        <button class="normal">Ver más</button>
        <button class="delete">Eliminar</button>`

    $activitiesList = $article.querySelector('.activities')

    for (const activity of maintenance.activities) {
        const $newActivity = document.createElement('li')
        $newActivity.innerHTML = `
            <p class="name">${activity.name}</p>
            <p class="description">${activity.description}</p>`
        $activitiesList.appendChild($newActivity)
    }

    $maintenancesCards.appendChild($article)
}

const newMaintenance = {
    'type' : 'Preventivo',
    'date' : 'Agosto 5, 2022',
    'status' : 'Programado',
    'responsible': 'Carlos Cervantes',
    'comment': 'Mantenimiento programado para despues.',
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

addMaintenanceCard(newMaintenance);