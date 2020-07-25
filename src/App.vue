<template>
  <div id="app">
    <h1>
      Controle de gastos {{ title }}
    </h1>
    <span>Produto</span><br />
    <input type="text" v-model="expense.name"><br />
    <span>Valor</span><br />
    <input type="text" v-model="expense.amount"><br />
    <span>Lugar</span><br />
    <input type="text" v-model="expense.place"><br />
    <span>Data</span><br />
    <input type="text" v-model="expense.date"><br />
    <button v-on:click="onSave()">Salvar</button>
  </div>
</template>

<script>
import { postExpense} from './domains/expense/expense.service'

export default {
  name: 'App',
  data() {
    return {
      expense: {
        name:'',
        amount: '',
        place: '',
        date: ''
      }
    }
  },
  methods: {
    onSave() {
      console.log(this.expense)
      postExpense(this.expense)
    }
  }
}
</script>

<style>
</style>
