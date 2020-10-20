<template lang="pug">
.w-form
    slot
</template>

<script>
export default {
    provide() {
        return {
            form: this //将组件实例作为提供者，子代组件可方便获取
        }
    },
    props: {
        model: {
            type: Object,
            required: true
        },
        rules: {
            type: Object,
            required: true
        }
    },
    methods: {
        validate(cb) {
            const tasks = this.$children
                .filter(item => item.prop)
                .map(item => item.validate())
            Promise.all(tasks)
                .then(() => cb(true))
                .catch(() => cb(false))
        }
    }
}
</script>

<style lang="scss" scoped></style>
