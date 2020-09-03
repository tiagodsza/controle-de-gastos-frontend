<template>
    <div id="input-text-field">
        <span id="title">{{ title }}</span><br />
        <input type="text" v-model="name">
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
        value: {
            type: String
        }
    },    
    computed: {
        name: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', !value ? '' : value);
            },
        },
    }
}
</script>

<style>
    #input-text-field{
        margin: 10px;
    }
    #title {
        font-size: 20px;
    }
</style>