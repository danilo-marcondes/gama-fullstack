import api from '../../service/api'
import Nav from '../components/Nav'
import FormCadastro from '../components/FormCadastro'

let Home = {
    render: async () => {
        let NavBar = await Nav.render()
        let FormCadastroComp = await FormCadastro.render();

        let view = `<div><h1>GAMA ACADEMY</h1></div>
        ${FormCadastroComp}`

        return view;
    },
    after_render: async () => {

        function validaSenha(senha, confirmaSenha) {
            return senha === confirmaSenha
        }

        let envioFormulario = document.getElementById('formCadastro')

        envioFormulario.addEventListener('submit', function (e) {
            e.preventDefault()
            let cpf = document.getElementById('cpf').value
            let nome = document.getElementById('nome').value
            let usuario = document.getElementById('usuario').value
            let email = document.getElementById('email').value
            let senha = document.getElementById('senha').value
            let confirmaSenha = document.getElementById('confirmaSenha').value

            if (validaSenha(senha, confirmaSenha)) {
                let dadosEnvio = {
                    cpf: cpf,
                    login: usuario,
                    nome: nome,
                    senha: senha
                }

                let cabecalho = {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }

                api.post('usuarios', dadosEnvio, cabecalho).then(resposta => {
                    console.log(resposta.data)
                    if(resposta.status === 200){
                        window.location.replace('#/login')
                    }
                })

            } else {
                console.log('As senhas não conferem!')
                console.log(senha)
                console.log(confirmaSenha)
                alert('Verifique as senhas!')
            }
        })
    }
}

export default Home