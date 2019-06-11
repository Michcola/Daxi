<template>
    <div>
        <g-button @click="onClickButton">顶部弹出</g-button>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Toast from '../../../src/toast'
    import Button from '../../../src/button'
    import plugin from '../../../src/plugin'

    Vue.use(plugin)
    export default {
        components: {
            'g-toast': Toast,
            'g-button': Button
        },
        methods: {
            onClickButton() {
                this.$toast('我喜欢唱,跳,rap', {
                    autoClose: false,
                    enableHTML: true,
                    closeButton: {
                        text: '知道了',
                        callback: () => {
                            console.log('Oops?')
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .g-toast {
        z-index: 30 !important;
    }
</style>