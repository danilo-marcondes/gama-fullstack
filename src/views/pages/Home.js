import api from '../../service/api'
import Nav from '../components/Nav'


let Home = {
    render: async () => {
        let NavBar = await Nav.render()
        
        let view = `<h1>Home Page</h1>
        ${NavBar}`

    
        return view;
    },
    after_render: async () => {
        var buttonTest = document.getElementById('teste')
        buttonTest.addEventListener('click', function () {
            let postData = {
                name: 'Teste teste',
                age: 10
            }
            // api.post('', postData).then(res => {
            //     console.log(res.data)
            // })
            localStorage.setItem('dados', JSON.stringify(postData))
        })
    }
}

export default Home