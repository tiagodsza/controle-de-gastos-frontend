<template>
    <button v-on:click="onClickFunction()">{{ title }}</button>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
        onClickFunction: {
            type: Function
        },
    }
}
</script>

<style>
    button {
        margin: 10px;
    }
</style>
