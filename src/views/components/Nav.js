let Nav = {
    render: async () => {
        let view = `<h1>Nav</h1>
        <a href="#/home">Home</a>
        <a href="#/login">Entrar</a>
        <a href="#/recuperar-senha">Esqueci a senha</a>
        <a href="#/novo-usuario">Cadastro</a>`
        return view
    },
    after_render: async () => {
        
    }
}

export default Nav