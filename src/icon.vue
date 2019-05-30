<template>
    <svg class="g-icon">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        name: 'DaxiIcon',
        props: ['name']
    }
</script>

<style lang="scss" scoped>
    .g-icon {
        width: 1em;
        height: 1em;
    }
</style>