<template>
    <div class="tabs-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "DaxiTabsItem",
        props: {
            disabled: {}
        }
    }
</script>

<style scoped>
    .tabs-item {

    }
</style>