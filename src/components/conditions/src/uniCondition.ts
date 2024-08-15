import { PropType } from 'vue';
import { Single } from './condition';

export const uniConditionOpt = {
    name: 'UniCondition',
    inheritAttrs: false,
}

export type ConditionType = 'SINGLE' | 'MULTIPLE';

export const propsSchema = {
    title: {
        type: String as PropType<string>,
        default: '条件组'
    },
    type: {
        type: String as PropType<ConditionType>,
        default: 'SINGLE'
    },
    // 条件初始值
    conditions: {
        type: Object,
    },
    // NOTE - 设置添加条件时，需要返回一个条件对象
    // 如：{ operand: { factor: "name" }, operator: 'equal', value: [{ valueType: 'customer', value: '123 }]}
    add: {
        type: Function as PropType<() => Single>, // 类型为函数
        default: () => ({}) // 默认值为空函数
    },
    noDataText: {
        type: String as PropType<string>, // 类型为字符串
        default: '请添加条件或条件组' // 默认值为'请添加条件或条件组'
    },
    // NOTE - 计算各项下拉选项数据
    getOptions: {
        type: Function, // 类型为函数
        default: () => [] // 默认值为空数组
    },
    // NOTE - 输入条件前转换方法
    transformInputParameter: {
        type: Function, // 类型为函数
        default: (value: any)=> value // 默认值为返回输入值本身
    },
    // NOTE - 输出条件前，转换防范
    transformOutputParameter: {
        type: Function, // 类型为函数
        default: (value: any)=> value // 默认值为返回输出值本身
    },
};
