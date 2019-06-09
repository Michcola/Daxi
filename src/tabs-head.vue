<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DaxiTabsHead",
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                let {width, height, top, left} = vm.$el.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.transform = `translateX(${left}px)`
            })
        }
    }
</script>

<style scoped lang="scss">
    $tab-height: 40px;
    $color: blue;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        position: relative;

        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $color;
            transition: all 350ms;
        }
        > .actions-wrapper {
            margin-left: auto;
        }
    }
</style>