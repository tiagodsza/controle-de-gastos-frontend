<template>
  <div id="form">
    <InputTextField class="input-form" title="Produto" v-model="expense.name"></InputTextField>
    <InputTextField class="input-form" title="Valor" v-model="expense.amount"></InputTextField>
    <InputTextField class="input-form" title="Lugar" v-model="expense.place"></InputTextField>
    <InputTextField class="input-form" title="Data" v-model="expense.date"></InputTextField>
    <Button title="Salvar" :onClickFunction="onSave"></Button>
  </div>
</template>

<script>
import { postExpense} from '../domains/expense/expense.service'
import InputTextField from './InputTextField.vue'
import Button from './Button.vue'

export default {
  components: {
    InputTextField,
    Button,
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
    }
  },
  methods: {
    onSave() {
      postExpense(this.expense)
    },
  }
}
</script>

<style>
  .input-form {
    display: inline-block;
    width: 20%;
  }
  #form {
    margin: 0 0 10px 0;
    background: #7aafa2;
  }
</style>