<template>

  <div id="app">
    <h1>
      Controle de gastos
    </h1>   
    <router-link to="/create" class="button">Inserir gastos</router-link> 
    <router-link to="/get_expenses" class="button">Relatório de Gastos</router-link> 
    <router-view></router-view>
  </div>
</template>

<style>
  .button {
    background: #5c9e50;
    font-size: 20px;
    padding: 10px;
    border:1px solid #000000;
    margin: 5px;
  }
</style>
