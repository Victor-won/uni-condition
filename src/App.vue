<script setup lang="ts">
import { ref } from 'vue';
import { UniCondition, Condition } from 'uni-conditions';
import "uni-conditions/dist/style.css";
import { single, singleConditions, multipleCondition } from './mock';
import { Single } from 'uni-conditions/src/condition';

const condObj = ref<Single>(single);
const condObj2 = ref(singleConditions);
const condObj3 = ref(multipleCondition);

const getConditionOptions = (curCond: Single, property: string) => {
    switch (property) {
        case 'factor':
        case 'fieldId':
            return [
                {
                    label: '字段',
                    value: 'field',
                },
                {
                    label: '字段2',
                    value: 'field2',
                },
                {
                    label: '字段3',
                    value: 'field3',
                },
                {
                    label: '字段4',
                    value: 'field4',
                },
            ];
        case 'tableId':
            return [
                {
                    label: '表1',
                    value: 'table1',
                },
                {
                    label: '表2',
                    value: 'table2',
                },
                {
                    label: '表3',
                    value: 'table3',
                },
                {
                    label: '表4',
                    value: 'table4',
                },
            ];
        case 'operator':
            if (curCond.operand.factor === 'field' || curCond.operand.fieldId === 'field') {
                return [
                    { label: '等于', value: 'equal' },
                    { label: '不等于', value: 'notEqual' },
                    { label: '大于', value: 'greaterThan' },
                    { label: '小于', value: 'lessThan' },
                    { label: '大于等于', value: 'greaterThanOrEqual' },
                    { label: '小于等于', value: 'lessThanOrEqual' },
                ];
            }
            return [
                { label: '等于', value: 'equal' },
                { label: '不等于', value: 'notEqual' },
                { label: '大于', value: 'greaterThan' },
                { label: '小于', value: 'lessThan' },
                { label: '大于等于', value: 'greaterThanOrEqual' },
                { label: '小于等于', value: 'lessThanOrEqual' },
                { label: '包含', value: 'contains' },
                { label: '不包含', value: 'notContains' },
                { label: '以...开始', value: 'startsWith' },
            ];
        case 'valueType':
            return [
                { label: '字符串', value: 'string' },
                { label: '数字', value: 'number' },
                { label: '日期', value: 'date' },
                { label: '客户', value: 'customer' },
                { label: '客户组', value: 'customerGroup' },
                { label: '订单', value: 'order' },
                { label: '订单项', value: 'orderItem' },
                { label: '自定义', value: 'customer' },
            ];
    }
};

/**
 * 选择表确认字段 -> 字段 -> 通过字段类型确认 -> 判断符 -> 字段类型 -> 值类型 -> 值
 */
</script>

<template>
    <uni-condition
        title="条件组"
        :conditions="condObj2"
        @update:conditions="(value) => (condObj2 = value)"
        :add="
            () => ({
                operand: {
                    factor: 'field',
                },
                operator: 'equal',
                value: [
                    {
                        valueType: 'customer',
                        value: '12',
                    },
                ],
            })
        "
        :getOptions="getConditionOptions"
    />

    <uni-condition
        title="多条件组"
        type="MULTIPLE"
        :conditions="condObj3"
        @update:conditions="(value) => (condObj3 = value)"
        :add="
            () => ({
                operand: {
                    factor: 'field',
                },
                operator: 'equal',
                value: [
                    {
                        valueType: 'customer',
                        value: '12',
                    },
                ],
            })
        "
        :getOptions="getConditionOptions"
    />

    <Condition
        :condition="condObj"
        @update:condition="(value: Single) => condObj = value"
        :getOptions="getConditionOptions"
    />

    <button style="margin: 20px 0 0;" @click="() => console.log(condObj2)">获取条件</button>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
