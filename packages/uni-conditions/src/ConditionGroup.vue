<template>
  <div class="uni-condition__group">
    <!-- 条件组添加按钮 -->
    <div class="uni-condition__add" v-if="props.isGroup">
      <a href="javascript:" @click="addHandler">添加条件组</a>
    </div>
    <!-- 条件内容容器 -->
    <div class="uni-condition__content" :class="{ 'show-type': showTypeFlag }">
      <!-- 条件类型选择器 -->
      <div class="uni-condition__type" v-if="showTypeFlag">
        <select v-model="props.conditions.type">
          <option v-for="op in operator" :value="op.value">{{ op.label }}</option>
        </select>
      </div>
      <!-- 条件组存在时的渲染 -->
      <template v-if="props.isGroup">
        <condition-group
            v-for="(condition, index) in props.conditions.conditions"
            :key="index"
            :conditions.sync="condition"
            :getOptions="props.getOptions"
            :isGroup="false"
            :parentIndex="index"
            :add="props.add"
            @remove="removeHandler(index, props.parentIndex)"
            @add="addHandler"
        >
          <!-- 插槽模板 -->
          <!-- eslint-disable vue/valid-v-slot -->
          <template v-for="(slot, index) in slotsMap" :key="index" v-slot:[slot]="slotProps">
            <slot :name="slot" v-bind="slotProps"></slot>
          </template>
        </condition-group>
      </template>
      <!-- 单个条件存在时的渲染 -->
      <template v-else>
        <condition
            v-for="(condition, index) in props.conditions.conditions"
            :key="index"
            :parentIndex="index"
            :condition.sync="condition"
            :getOptions="props.getOptions"
            :showOperators="true"
            @remove="removeHandler(index, props.parentIndex)"
            @add="addHandler"
        >
          <!-- 插槽模板 -->
          <template v-for="(slot, index) in slotsMap" :key="index" v-slot:[slot]="slotProps">
            <slot :name="slot" v-bind="slotProps"></slot>
          </template>
        </condition>
      </template>
    </div>
    <!-- 非条件组时的移除按钮 -->
    <div v-if="!props.isGroup" @click="emit('remove')" class="uni-condition__group-operator">✕</div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue-demi';
import Condition from './Condition.vue';
import { operator, conditionGroupProps } from './conditionGroup.ts';

export default defineComponent({
  name: 'ConditionGroup',
  components: {
    Condition,
  },
  props: conditionGroupProps,
  setup(props, { emit, slots }) {
    // 动态计算插槽名称数组
    const slotsMap = computed<string[]>(() => {
      return Object.keys(slots);
    });

    // 计算是否显示条件类型选择器
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
     * @param groupIndex
     */
    const removeHandler = (index: number, groupIndex: number | undefined) => {
      if (props.conditions.conditions.length === 1) {

        if (!props.isGroup) {
          (emit as Function)('remove', index, groupIndex);
        }

        return;
      }
      props.conditions.conditions.splice(index, 1);
    }

    return {
      operator,
      showTypeFlag,
      props,
      removeHandler,
      addHandler,
      emit,
      slotsMap
    };
  }
})
</script>

<style lang="scss" scoped>
@import "./styles/conditionGroup";
</style>
