<template>
  <div id="app">
    <h1>
      Controle de gastos
    </h1>
    <InputTextField title="Produto" :input="produto"></InputTextField>
    <InputTextField title="Valor" :input="valor"></InputTextField>
    <InputTextField title="Lugar" :input="lugar"></InputTextField>
    <InputTextField title="data" :input="data"></InputTextField>
  </div>
</template>

<script>
import InputTextField from 'C:/Users/tiago/Repositories/controle-de-gastos/controle-de-gastos-frontend/src/components/InputTextField.vue';

export default {
  name: 'App',
  components: {
    InputTextField
  },
  data() {
    return {
      produto: '',
      valor: '',
      lugar: '',
      data: ''
    }
  }
}
</script>

<style>
</style>
