<template>
    <div>
        <h1>Relatório de Gastos</h1>
        <table style="width:100%">
            <tr>
                <th>Name</th>
                <th>Lugar</th>
                <th>Valor</th>
                <th>Data</th>
            </tr>
            <tr v-for="expense of this.expenses" :key=expense.id >
                <td>{{expense.name}}</td>  
                <td>{{ expense.place}}</td> 
                <td>R${{ expense.amount}}</td>
                <td>{{ expense.date}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import { getExpense } from '../domains/expense/expense.service'

export default {
    data() {
        return {
            expenses: '',
        }
    },
    methods: {
        getExpenses() {
            getExpense().then(({ data }) => {
                this.expenses = data
            })
        }
    },
    created() {
        console.log('Create acionado!');
        this.getExpenses();
    },
}
</script>

<style scoped>
li {
    list-style: none;
}

.create_expense{
    position:absolute;
    bottom: 0;
    width: 100%;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

table td {
    text-align: center;
}
</style>
