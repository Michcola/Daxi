<template>
    <div>
        <g-input v-model="message"></g-input>
        <div>
            message: {{message}}
        </div>
    </div>
</template>

<script>
    import Input from '../../../src/input'

    export default {
        components: {
            'g-input': Input
        },
        data() {
            return {
                message: 'hello'
            }
        }
    }
</script>

<style scoped>

</style>