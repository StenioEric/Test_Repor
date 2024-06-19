const user = {
    avatarUrl: '',
    name:'',
    bio:'',
    userName:'',
    repositories:[],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.user = gitHubUser.login

    },
    setRepositories(repositories){
        this.repositories = repositories
    }
}

export {user}