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
                        <input type="text" v-model="value.value" />
                    </div>
                </template>
            </slot>
        </div>
        <div class="uni-condition__value-operator" v-if="props.showOperators">
            <img src="./assets/minus-circle.svg" @click="emit('remove')" width="20" alt="" />
            <img src="./assets/plus-circle.svg" @click="emit('add')" width="20" alt="" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { conditionProps, conditionOptions } from './condition';

// 定义组件信息
defineOptions(conditionOptions);

// 定义组件 props 描述
const props = defineProps(conditionProps);
const emit = defineEmits(["update:condition", "remove", 'add']);
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
    emit("update:condition", value);
}, { deep: true });
</script>

<style lang="scss" scoped>
@import "./styles/condition.scss";
</style>
