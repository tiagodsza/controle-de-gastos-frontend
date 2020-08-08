import controle_gastos_api from '../../support/controle_gastos_api'

function postExpense(data) {
    return controle_gastos_api.post('/expenses/', data)
}

function getExpense() {
    return controle_gastos_api.get('/expenses/')
}

function test() {
    console.log('Teste')
}

export {getExpense, test, postExpense};