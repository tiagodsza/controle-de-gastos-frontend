<template>

  <div id="app">
    <h1>
      Principal
    </h1>   
    <router-link to="/create">Inserir gastos</router-link> 
    <router-link to="/get_expenses">Relatório de Gastos</router-link> 
    <router-view></router-view>
  </div>
</template>
