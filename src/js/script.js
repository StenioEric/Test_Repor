import { getUser } from '/src/js/services/user.js'
import { getRepositories } from '/src/js/services/repositories.js'
import { user } from '/src/js/objects/user.js'
import { screen } from '/src/js/objects/screen.js'



async function getUserProfile(userName){

    const userResponse = await getUser(userName)
    user.setInfo(userResponse)
    console.log(user)

    screen.renderUser(user)

    // getUser(userName).then(userData => {
    //    
    //     getUserRepositories(userName)

    // })
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