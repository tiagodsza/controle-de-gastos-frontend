import controle_gastos_api from '../../support/controle_gastos_api'

function postExpense(data) {
    return controle_gastos_api.post('/', data)
}

function getExpense() {
    controle_gastos_api.get('/message').then(({data}) => {
        console.log(data.message)
    })
}

function test() {
    console.log('Teste')
}

export {getExpense, test, postExpense};