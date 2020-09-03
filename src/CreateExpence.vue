<template>
  <div >
    <h1>
      Controle de gastos
    </h1>
    <InputTextField title="Produto" :input="expense.name"></InputTextField>
    <!-- <span>Produto</span><br />
    <input type="text" v-model="expense.name"><br /> -->
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
import InputTextField from './components/InputTextField.vue'

export default {
  components: {
    InputTextField,
  },
  name: 'CreateExpense',
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
      postExpense(this.expense)
    },
  }
}
</script>