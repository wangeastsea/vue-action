<template lang="pug">
    .w-input
        input(:value="val" @input="inputAction" :bind="$attrs")
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        value: {
            type: String,
            defalut: ''
        }
    },
    computed: {
        val() {
            return this.value
        }
    },
    methods: {
        inputAction(e) {
            this.$emit('input', e.target.value)
            this.$parent.$emit('validate')
        }
    }
}
</script>

<style lang="scss" scoped></style>
