<template lang="pug">
    wForm(:model="ruleForm" :rules="rules" ref="ruleForm")
        wFormItem(label="名称" prop="name")
            wInput(v-model="ruleForm.name")
        wFormItem(label="描述" prop="desc")
            wInput(v-model="ruleForm.desc")
        wFormItem
            .button(@click="submitAction") 提交



</template>

<script>
import wForm from '@/components/w-form'
import wFormItem from '@/components/w-form-item'
import wInput from '@/components/w-input'
import create from '@/utils/create.js'
import wNotice from '@/components/w-notice/index.vue'
export default {
    components: {
        wForm,
        wFormItem,
        wInput
    },
    data() {
        return {
            ruleForm: {
                name: '',
                desc: ''
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: '请输入活动名称',
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        max: 5,
                        message: '长度在 3 到 5 个字符',
                        trigger: 'blur'
                    }
                ],
                desc: [
                    {
                        required: true,
                        message: '请填写活动形式',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    methods: {
        submitAction() {
            this.$refs['ruleForm'].validate(valid => {
                if (valid) {
                    const notice = create(wNotice, {
                        title: 'title',
                        message: 'success',
                        duration: 1000
                    })
                    notice.show()
                } else {
                    alert('校验失败！')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>
