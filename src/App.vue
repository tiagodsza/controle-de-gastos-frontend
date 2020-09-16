<template>

  <div id="app">
    <h1>
      Controle de gastos
    </h1>   
    <CreateExpence class="create_expense"></CreateExpence>
  </div>
</template>
<script>
import CreateExpence from './components/CreateExpence.vue'

export default {
  components: {
    CreateExpence,
  }
}
</script>


