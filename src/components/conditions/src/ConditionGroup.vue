<template>
    <div class="uni-condition__group">
        <div class="uni-condition__add" v-if="props.isGroup">
            <a href="javascript:;" @click="addHandler">添加条件组</a>
        </div>
        <div class="uni-condition__content" :class="{ 'show-type': showTypeFlag }">
            <div class="uni-condition__type" v-if="showTypeFlag">
                <select v-model="props.conditions.type">
                    <option v-for="op in operator" :value="op.value">{{ op.label }}</option>
                </select>
            </div>
            <template v-if="props.isGroup">
                <condition-group
                    v-for="(condition, index) in props.conditions.conditions"
                    :key="index"
                    :conditions="condition as ConditionGroup"
                    :getOptions="props.getOptions"
                    :isGroup="false"
                    :parentIndex="index"
                    :add="props.add"
                    @remove="removeHandler(index, props.parentIndex)"
                    @add="addHandler"
                />
            </template>
            <template v-else>
                <condition
                    v-for="(condition, index) in props.conditions.conditions"
                    :key="index"
                    :parentIndex="index"
                    :condition="condition"
                    :getOptions="props.getOptions"
                    :showOperators="true"
                    @remove="removeHandler(index, props.parentIndex)"
                    @add="addHandler"
                />
            </template>
        </div>
        <div v-if="!props.isGroup" @click="emit('remove')" class="uni-condition__group-operator">✕</div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Condition from './Condition.vue';
import { operator, conditionGroupOpt, conditionGroupProps } from './conditionGroup';
import type { ConditionGroup } from './conditionGroup';

defineOptions(conditionGroupOpt);
const props = defineProps(conditionGroupProps);
const emit = defineEmits(['remove']);

const showTypeFlag = computed(() => {
    return props.conditions.conditions.length > 1;
});

/**
 * 添加条件处理程序
 *
 * 此函数用于将新条件添加到条件列表中它通过调用`props.add()`方法来创建一个新的条件，
 * 然后将这个新条件添加到`props.conditions.conditions`数组中这样做的目的是动态地增加条件的数目，
 * 以便用户或系统可以根据需要定义和管理更多的条件
 */
const addHandler = () => {
    if (!props.add) throw new Error("props.add is required");

    if (props.isGroup) {
        props.conditions.conditions.push({
            type: 'AND',
            conditions: [props.add()],
        });
        return;
    }
    props.conditions.conditions.push(props.add());
}

/**
 * 移除指定索引处的条件
 *
 * 本函数用于从组件的条件数组中移除指定索引的条件项
 * 它直接操作组件的props，修改条件数组
 *
 * @param {number} index - 要移除的条件在数组中的索引
 */
const removeHandler = (index: number, groupIndex: number | undefined) => {
    if (props.conditions.conditions.length === 1) {

        if (!props.isGroup) {
            emit('remove', index, groupIndex);
        }

        return;
    }
    props.conditions.conditions.splice(index, 1);
}

</script>

<style lang="scss" scoped>
@import "./styles/conditionGroup";
</style>
