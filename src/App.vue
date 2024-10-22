<script setup lang="ts">
import { ref } from 'vue';
import { UniCondition, Condition } from 'uni-conditions';
import 'uni-conditions/dist/style.css';
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
        :conditions.sync="condObj2"
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
    >
        <!-- <template v-slot:factorSlot="{ condition }">
            {{ condition }}
        </template>
        <template v-slot:operatorSlot="{ condition }">
            {{ condition }}
        </template>
        <template v-slot:valueSlot="{ condition }">
            {{ condition }}
        </template> -->
    </uni-condition>

    <uni-condition
        title="多条件组"
        type="MULTIPLE"
        :conditions.sync="condObj3"
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
    >
        <template v-slot:tableIdSlot="{ condition }">
            <div style="background: red; width: 30px; margin-right: 10px"></div>
            <select name="tableId" v-model="condition.operand.tableId" placeholder="请选择"  style="margin: 0 10px 0 0;">
                <option
                    v-for="option in getConditionOptions(condition, 'tableId')"
                    :key="option.value"
                    :value="option.value"
                >
                    {{ option.label }}
                </option>
            </select>
        </template>
        <template v-slot:fieldIdSlot="{ condition }">
            <select name="fieldId" v-model="condition.operand.fieldId" placeholder="请选择">
                <option
                    v-for="option in getConditionOptions(condition, 'fieldId')"
                    :key="option.value"
                    :value="option.value"
                >
                    {{ option.label }}
                </option>
            </select>
        </template>
        <!-- <template v-slot:factorSlot="{ condition }">
            {{ condition }}
        </template>
        <template v-slot:operatorSlot="{ condition }">
            {{ condition }}
        </template>
        <template v-slot:valueSlot="{ condition }">
            {{ condition }}
        </template> -->
    </uni-condition>

    <Condition :condition.sync="condObj" :getOptions="getConditionOptions">
        <!-- <template v-slot:factorSlot="{ condition }">
            {{ condition }}
        </template>
        <template v-slot:operatorSlot="{ condition }">
            {{ condition }}
        </template>
        <template v-slot:valueSlot="{ condition }">
            {{ condition }}
        </template> -->
    </Condition>

    <button style="margin: 20px 0 0" @click="() => console.log(condObj2)">获取条件</button>
</template>

<style scoped lang="scss">
select {
    flex: 1 1 0;
    font-size: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid #ccc;
    background: #fff;
    color: #333;
    padding: 6px 10px;
    width: 100%;
    box-sizing: border-box;
    transition: all .3s;
    box-shadow: inset 1px 1px 4px #0003;

    &:focus {
        border: 1px solid #0a03eb;
        box-shadow: inset 1px 1px 2px rgb(10, 3, 235, 0.4);
        outline: none;
    }
}
</style>
