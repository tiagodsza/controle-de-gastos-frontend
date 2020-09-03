<template>
    <div>
        <span>{{ title }}</span><br />
        <input type="text" v-model="valor">
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
        input: {
            type: String
        }
    },    
}
</script>