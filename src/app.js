import Utils from '../src/service/Utils'

import Home from './views/pages/Home'
import Error404 from './views/pages/Error'
import Login from './views/pages/Login'
import RecuperaSenha from './views/pages/RecuperaSenha'
import Cadastro from './views/pages/Cadastro'

// routes
let routes = {
    '/' : Home,
    '/home' : Home,
    '/login' : Login,
    '/recuperar-senha' : RecuperaSenha,
    '/novo-usuario' : Cadastro
}

const router = async () => {
    const root = null || document.getElementById('root')

    //Obeter URL do navegador
    let request = Utils.parseRequestURL();

    //Analisar a URL
    let parseURL = (request.resource ? '/' + request.resource: '/') + 
        (request.id ? '/:id' + request.resource: '') +
        (request.verb ? '/' + request.resource: '')

    //Renderiza a página conforme URL
    let page = routes[parseURL] ? routes[parseURL] : Error404
    root.innerHTML = await page.render()
    await page.after_render();
}

//Observa as mudanças na hash
window.addEventListener('hashchange', router);

//Oberservar o carregamento da página
window.addEventListener('load', router)