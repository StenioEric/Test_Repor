import { baseUrl,repoQuant } from '/src/js/varaibles.js'


async function getRepositories(userName) {
    const  response = await fetch(`${baseUrl}userName}/repos?per_page=${repoQuant}`)
    return await response.json()
}


export{getRepositories}