<template>
  <div id="app">
    <h1>
      Controle de gastos {{ title }}
    </h1>
    <span>Produto</span><br />
    <input type="text" v-model="produto"><br />
    <span>Valor</span><br />
    <input type="text" v-model="valor"><br />
    <span>Lugar</span><br />
    <input type="text" v-model="lugar"><br />
    <span>Data</span><br />
    <input type="text" v-model="data"><br />
    <button v-on:click="onSave()">Salvar</button>
  </div>
</template>

<script>
import {test, getExpense} from './domains/expense/expense.service'

export default {
  name: 'App',
  data() {
    return {
      title:'',
      produto: '',
      valor: '',
      lugar: '',
      data: ''
    }
  },
  methods: {
    onSave() {
      test();
      getExpense();
    }
  }
}
</script>

<style>
</style>
