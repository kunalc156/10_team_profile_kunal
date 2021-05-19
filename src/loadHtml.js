const getManager = manager => {
    return `
    <div class="card">
        <div class="card-header">
            <h3 class="title">${manager.name}</h3>
            <span><i class="fas fa-mug-hot"></i></span><h4> Manager</h4>
        </div>
        <div class="emp-details">
            <p>ID: ${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office number: ${manager.officeNumber}</p>
        </div>
    </div>
    `;
}

const getEngineer = engineer => {
    return `
    <div class="card">
        <div class="card-header">
            <h3 class="title">${engineer.name}</h3>
            <span><i class="fas fa-glasses"></i></span><h4> Engineer</h4>
        </div>
        <div class="emp-details">
            <p>ID: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>GitHub: <a href="https://www.github.com/${engineer.github}" target="_blank"s>${engineer.github}</a></p>
        </div>
    </div>
    `;
}

const getIntern = intern => {
    return `
    <div class="card">
        <div class="card-header">
            <h3 class="title">${intern.name}</h3>
            <span><i class="fas fa-user-graduate"></i></span><h4> Intern</h4>
        </div>
        <div class="emp-details">
            <p>ID: ${intern.id}</p>
            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</a></p>
        </div>
    </div>
    `;
}

const loadHtml = (datas) => {

    htmlArray = [];

    for(let data of datas){
        const employee = data;
        const role = employee.getRole();

        if (role === 'Manager'){
            const managerCard = getManager(employee);

            htmlArray.push(managerCard);
        }

        if (role === 'Engineer'){
            const engineerCard = getEngineer(employee);

            htmlArray.push(engineerCard);
        }

        if (role === 'Intern'){
            const internCard = getIntern(employee);

            htmlArray.push(internCard);
        }
    }

    const employeeView = htmlArray.join('');

    const getTeam = getTeamPage(employeeView);

    return getTeam;
}

const getTeamPage = employeeView => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width, initial-scale=1.0">
        <title>Team Profile Viewer</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
    
    </head>
        <body>
            <header>
                <h1>Team Profile</h1>
            </header>
            <main class="main-container">
                <div class="flex-card">
                    ${employeeView}
                </div>
            </main>
        </body>
    <html>
    `;
}

module.exports = loadHtml;