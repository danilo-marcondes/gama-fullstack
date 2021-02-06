let Error404  = {
    render: async () => {
        let view = `<h1>Opss.. Algo deu errado :/</h1>`
        return view
    },
    after_render: async () => {
    }
}

export default Error404