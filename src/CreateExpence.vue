<template>
  <div >
    <GetExpenses :key="getExpensesKey" id="getExpenses" v-scroll="onScroll" ></GetExpenses>
    <v-card id="form">
      <InputTextField class="input-form" title="Produto" v-model="expense.name"></InputTextField>
      <InputTextField class="input-form" title="Valor" v-model="expense.amount"></InputTextField>
      <InputTextField class="input-form" title="Lugar" v-model="expense.place"></InputTextField>
      <InputTextField class="input-form" title="Data" v-model="expense.date"></InputTextField>
      <Button title="Salvar" :onClickFunction="onSave"></Button>
    </v-card>
  </div>
</template>

<script>
import { postExpense} from './domains/expense/expense.service'
import InputTextField from './support/components/InputTextField.vue'
import Button from './support/components/Button.vue'
import GetExpenses from './GetExpenses.vue'

export default {
  components: {
    InputTextField,
    Button,
    GetExpenses,
  },
  name: 'CreateExpense',
  data() {
    return {
      expense: {
        name:'',
        amount: '',
        place: '',
        date: ''
      },
      getExpensesKey: 0,
    }
  },
  methods: {
    onSave() {
      postExpense(this.expense)
      this.getExpensesKey += 1
    },
  }
}
</script>

<style>
  .input-form {
    display: inline-block;
    
  }
  #form {
    margin: 0 0 10px 0;
    position: absolute;
    bottom: 0;
    background: #7aafa2;
  }

  #getExpenses {
    position: absolute;
    top: 20px;
    bottom: 20px;
  }


</style>