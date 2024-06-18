import { getUser } from '/src/js/services/user.js'
import { getRepositories } from '/src/js/services/repositories.js'
import { user } from '/src/js/objects/user.js'



function getUserProfile(userName){
    getUser(userName).then(userData => {
        let userInfo =  `</div> class = "info">
                         <img src= "${userData.avatar_url}" alt = "Foto do perfil do usuário" />
                        <div class = "data">
                            <h1>${userData.name ?? 'Não possui nome cadastrado'} </h1>
                            <p>${userData.bio ?? 'Não possui bio cadastrada'}</p>
                        </div>
                        </div>`
                            
        document.querySelector('.profile-data').innerHTML = userInfo
        getUserRepositories(userName)

    })
}

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;
    getUserProfile(userName);
    
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const EnterPressed = key === 13

    if (EnterPressed) {
        getUserProfile(userName)
    }
})


function getUserRepositories(userName) {
    getRepositories(userName).then(reposData => {

        let repositoriesItems = "";
        reposData.forEach(repo => {
            repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
        });

        document.querySelector('.profile-data').innerHTML += `<div class="repositories section">
                                                                <h2>Repositórios</h2>
                                                                <ul>${repositoriesItems}</ul>
                                                            </div>`;

    });
}