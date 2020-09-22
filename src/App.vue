<template>

  <div id="app">
    <h1>
      Controle de gastos
    </h1>   
    <GetExpenses></GetExpenses>
    <CreateExpence class="create_expense"></CreateExpence>
  </div>
</template>
<script>
import CreateExpence from './components/CreateExpence.vue'
import GetExpenses from './components/GetExpenses.vue'

export default {
  components: {
    CreateExpence,
    GetExpenses,
  }
}
</script>


