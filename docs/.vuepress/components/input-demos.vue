<template>
    <div>
        <g-input value="正常"></g-input>
        <g-input value="只读" readonly></g-input>
        <g-input value="不可选" disabled></g-input>
        <g-input value="123木头人" error="错误"></g-input>
    </div>
</template>

<script>
    import Input from '../../../src/input'

    export default {
        components: {
            'g-input': Input
        }
    }
</script>

<style scoped>

</style>