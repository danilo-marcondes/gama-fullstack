const headersDefault = (tokenSection) => {
    let headersApp = {
        headers: {
            'Content-Type' : 'application/json',
            'Autorization' : tokenSection
        }
    }
    return headersApp
}

export default headersDefault;