<template>
    <div>
        <g-popover>
            <template slot="content" slot-scope="{close}">
                这是一段内容确定关闭吗？
                <div style="text-align: right">
                    <g-button @click="close">关闭</g-button>
                    <g-button>取消</g-button>
                </div>
            </template>
            <g-button>嵌套操作</g-button>
        </g-popover>
    </div>
</template>

<script>
    import Popover from '../../../src/popover'
    import Button from '../../../src/button'

    export default {
        components: {
            'g-popover': Popover,
            'g-button': Button
        }
    }
</script>

<style scoped lang="scss">

</style>