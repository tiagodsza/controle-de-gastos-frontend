import controle_gastos_api from '../../support/controle_gastos_api'

// function postExpense() {
//     const dictio = {
//         name: 'name',
//         amount: 'amount',
//         date: '2020-07-16 01:54:10',
//         place: 'place',
//       }
//     return controle_gastos_api.post('/', data = dictio)
// }

function getExpense() {
    controle_gastos_api.get('/message').then(({data}) => {
        console.log(data.message)
    })
}

function test() {
    console.log('Teste')
}

export {getExpense, test};