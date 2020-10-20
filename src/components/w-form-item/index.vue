<template lang="pug">
    .w-form-item
        .label {{label}}
        slot
        .error-tip {{error}}
</template>

<script>
import Schema from 'async-validator'
export default {
    inject: ['form'],
    props: {
        label: {
            type: String,
            vaule: ''
        },
        prop: {
            type: String
        }
    },
    data() {
        return {
            error: ''
        }
    },
    mounted() {
        this.$on('validate', () => {
            this.validate()
        })
    },
    methods: {
        validate() {
            // 获取校验规则
            const rules = this.form.rules[this.prop]
            const value = this.form.model[this.prop]
            const descriptor = { [this.prop]: rules }
            const schema = new Schema(descriptor)
            return schema.validate({ [this.prop]: value }, errors => {
                if (errors) {
                    this.error = errors[0].message
                } else {
                    this.error = ''
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.w-form-item {
    .error-tip {
        color: red;
    }
}
</style>
