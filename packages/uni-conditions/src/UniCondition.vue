<template>
  <div class="uni-condition__container">
    <div class="uni-condition__title">{{ props.title }}</div>
    <condition-group
        v-if="props.conditions"
        :conditions="props.conditions"
        :getOptions="props.getOptions"
        :isGroup="isGroup"
        :add="props.add"
    >
      <template v-for="(slot, index) in slotsMap" :key="index" v-slot:[slot]="slotProps">
        <slot :name="slot" v-bind="slotProps"></slot>
      </template>
    </condition-group>
    <div class="uni-condition__no-data" v-else>
      {{ props.noDataText }}
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, computed} from 'vue-demi';
import type {Single} from './condition.ts';
import ConditionGroup from './ConditionGroup.vue';

type ConditionType = 'SINGLE' | 'MULTIPLE';

export default defineComponent({
  name: 'UniCondition',
  components: {
    ConditionGroup,
  },
  props: {
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
      type: Object as PropType<any>,
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
      type: Function as PropType<Function>, // 类型为函数
      default: () => [] // 默认值为空数组
    },
    // NOTE - 输入条件前转换方法
    transformInputParameter: {
      type: Function, // 类型为函数
      default: (value: any) => value // 默认值为返回输入值本身
    },
    // NOTE - 输出条件前，转换防范
    transformOutputParameter: {
      type: Function, // 类型为函数
      default: (value: any) => value // 默认值为返回输出值本身
    },
  },
  setup(props, {slots}) {
    const isGroup = computed(() => props.type === 'MULTIPLE');
    const slotsMap = computed(() => Object.keys(slots));
    return {
      isGroup,
      props,
      slotsMap,
    };
  },
})
</script>

<style lang="scss" scoped>
.uni-condition {
  &__container {
    background: #fff;
    color: #333;
    display: flex;
    flex-direction: column;
    min-width: 1000px;
  }

  &__title {
    padding: 5px 15px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }

  &__no-data {
    color: #999;
    padding: 50px 0;
  }
}
</style>
