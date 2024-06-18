<template>
  <BepFormPlus
    ref="formRef"
    :schema="schema"
    :model="form"
    :rules="rules"
    label-width="70px"
  >
    <template #append>
      <div class="page-footer">
        <el-button @click="handleReset">重置</el-button>
        <el-button type="primary" @click="handleSubmit">提交</el-button>
      </div>
    </template>
  </BepFormPlus>
</template>
<script lang="ts" setup>
  import type { FormRules } from 'element-plus'
  import { BepFormPlus } from 'bep-ui'
  import { ref } from 'vue'
  import type { IFormSchema, IOption, IFormPlusRef } from 'bep-ui'
  import { states } from '@/const/select'

  const rules: FormRules = {
    age: [{ min: 1, max: 100, message: 'Length should be 1 to 100', trigger: 'change' }],
    grade: [{ required: true, message: 'grade is required', trigger: 'change' }]
  }

  const list: IOption[] = states.map((item, index) => ({
    value: `${index}`,
    label: item
  }))

  const schema: IFormSchema = {
    renderType: 'Object',
    properties: {
      baseInfo: {
        title: '基本信息',
        renderType: 'SectionTitle'
      },
      name: {
        title: '姓名',
        renderType: 'InputText',
        required: true
      },
      address: {
        title: '家庭地址',
        renderType: 'Description'
      },
      age: {
        title: '年龄',
        renderType: 'InputNumber',
        required: true,
        renderOptions: {
          max: 10
        }
      },
      sex: {
        title: '性别',
        renderType: 'RadioGroup',
        renderOptions: {
          options: [
            {
              label: '男',
              value: 'male'
            },
            {
              label: '女',
              value: 'female'
            }
          ]
        }
      },
      grade: {
        title: '年级',
        renderType: 'Select',
        required: true,
        renderOptions: {
          multiple: true,
          options: [
            {
              label: '一年级',
              value: '1'
            },
            {
              label: '二年级',
              value: '2'
            },
            {
              label: '三年级',
              value: '3'
            },
            {
              label: '四年级',
              value: '4'
            },
            {
              label: '五年级',
              value: '5'
            }
          ]
        }
      },
      divider: {
        title: '分割线',
        renderType: 'Divider'
      },
      course: {
        title: '课程',
        renderType: 'Checkbox',
        renderOptions: {
          options: [
            {
              label: '语文',
              value: '1'
            },
            {
              label: '数学',
              value: '2'
            },
            {
              label: '英语',
              value: '3'
            },
            {
              label: '化学',
              value: '4'
            }
          ]
        },
        required: true
      },
      city: {
        title: '城市',
        renderType: 'SearchSelect',
        renderOptions: {
          remoteMethod: (keyword: string) => {
            if (keyword) {
              return Promise.resolve(
                list.filter((item) => {
                  return item.label.toLowerCase().includes(keyword.toLowerCase())
                })
              )
            }
            return Promise.resolve(list)
          }
        }
      },
      comment: {
        title: '评分',
        renderType: 'Rate',
        required: true
      },
      date: {
        title: '报名日期',
        renderType: 'DateTime',
        required: true
      },
      range: {
        title: '课程时间',
        renderType: 'DateTimeRange',
        required: true
      },
      color: {
        title: '颜色',
        renderType: 'ColorPicker',
        required: true
      },
      enable: {
        title: '是否启用',
        renderType: 'Switch',
        required: true
      },
      percent: {
        title: '进度',
        renderType: 'Slider',
        required: true,
        renderOptions: {
          style: {
            width: '60%'
          }
        }
      }
    }
  }
  const formRef = ref<IFormPlusRef>()
  const form = ref({
    name: '张三',
    age: 10,
    address: '四川省成都市高新区天府三街保利观园',
    color: '#ffffff',
    percent: 60
  })
  const handleSubmit = () => {
    formRef.value?.validate((isValid, invalidFields) => {
      console.log('isValid====>', isValid, invalidFields)
    })
  }
  const handleReset = () => {
    formRef.value?.reset()
  }
</script>
<style lang="scss" scoped>
  .page-footer {
    padding: 10px 30px;
    display: flex;
  }
</style>
