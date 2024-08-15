<template>
    <div class="uni-condition__container">
        <div class="uni-condition__title">{{ props.title }}</div>
        <template v-if="props.conditions">
            <condition-group
                :conditions="props.conditions"
                :getOptions="props.getOptions"
                :isGroup="isGroup"
                :add="props.add"
            />
        </template>
        <div class="uni-condition__no-data" v-else>
            {{ props.noDataText }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { uniConditionOpt, propsSchema } from './uniCondition.ts';
import ConditionGroup from './ConditionGroup.vue';
import { computed } from 'vue';

defineOptions(uniConditionOpt);
const emit = defineEmits({});
const props = defineProps(propsSchema);
const isGroup = computed(() => props.type === 'MULTIPLE');
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
