let FormCadastro = {
    render: async () => {
        let view = `<style>
        .inputs{
            margin: 10px;
        }
    </style>
    
    <div>
        <form id="formCadastro">
            <h2>Não tem conta? Entre para Gama Bank</h2>
            <div class="inputs">
                <input id="cpf" type="text" placeholder="CPF">
            </div>
            <div class="inputs">
                <input id="nome" type="text" placeholder="Nome completo">
            </div>
            <div class="inputs">
                <input id="usuario" type="text" placeholder="Digite seu nome de usuário">
            </div>
            <div class="inputs">
                <input id="email" type="text" placeholder="Digite seu e-mail">
            </div>
            <div class="inputs">
                <input id="senha" type="text" placeholder="Digite sua senha">
            </div>
            <div class="inputs">
                <input id="confirmaSenha" type="text" placeholder="Confirme sua senha">
            </div>
            <div class="inputs">
                <input type="submit" value="Continuar" />
            </div>
        </form>
    </div>`
        return view
    },
    after_render: async () => {
        
    }
}

export default FormCadastro