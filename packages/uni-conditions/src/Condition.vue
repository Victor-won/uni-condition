<template>
  <div class="uni-condition__item" v-if="condition">
    <div class="uni-condition__operand">
      <slot
          v-for="operand in operandKeys"
          :key="operand"
          :name="`${operand}Slot`"
          :condition="condition"
          :property="operand"
      >
        <select v-model="condition.operand[operand]" placeholder="请选择">
          <option
              v-for="option in props.getOptions(condition, operand)"
              :key="option.value"
              :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </slot>
    </div>
    <div class="uni-condition__operator">
      <slot name="operatorSlot" :condition="condition" property="operator">
        <select v-model="condition.operator" placeholder="请选择">
          <option
              v-for="option in props.getOptions(condition, 'operator')"
              :key="option.value"
              :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </slot>
    </div>
    <div class="uni-condition__value">
      <slot
          name="valueSlot"
          :condition="condition"
          property="value"
      >
        <template v-for="(value, index) in condition.value" :key="index">
          <div class="uni-condition__value-item">
            <select name="valueType" v-model="value.valueType" placeholder="请选择">
              <option
                  v-for="option in props.getOptions(condition, 'valueType')"
                  :key="option.value"
                  :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
          <div class="uni-condition__value-item">
            <input type="text" v-model="value.value"/>
          </div>
        </template>
      </slot>
    </div>
    <div class="uni-condition__value-operator" v-if="props.showOperators">
      <img src="./assets/minus-circle.svg" @click="emit('remove')" width="20" alt=""/>
      <img src="./assets/plus-circle.svg" @click="emit('add')" width="20" alt=""/>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, computed, watch, defineComponent} from 'vue-demi';
import {PropType} from "vue";
import type {Single} from "./condition.ts";

export default defineComponent({
  components: {},
  name: 'Condition',
  props: {
    parentIndex: {
      type: Number,
    },
    condition: {
      type: Object as PropType<Single>,
      required: true,
    },
    showOperators: {
      type: Boolean,
      default: false,
    },
    getOptions: {
      type: Function,
      default: () => [],
    },
  },
  setup(props, {emit, slots}) {
    console.log("Setting", slots);
    const condition = ref(props.condition);
    // computed properties
    const operandKeys = computed(() => {
      return Object.keys(props.condition?.operand || {});
    })

    // watch props.modelValue, update condition
    watch(() => props.condition, (value) => {
      condition.value = value;
    });

    watch(condition, (value) => {
      (emit as Function)("update:condition", value);
    }, {deep: true});

    return {
      emit,
      props,
      operandKeys,
      condition,
      slots
    };
  }
})
</script>

<style lang="scss" scoped>
@import "./styles/condition.scss";
</style>
