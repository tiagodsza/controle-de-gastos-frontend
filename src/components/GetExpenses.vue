<template>
    <div>
        <h1>Relatório de Gastos</h1>
        <div>
            <ul>
                <li v-for="expense of this.expenses" :key=expense.id >
                    Name: {{expense.name}}  Lugar:  {{ expense.place}} Valor:R${{ expense.amount}}
                </li>
            </ul>            
        </div>
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
</style>