import { PropType } from 'vue';
import { Single, IOption } from './condition';

export const operator = [
    {
        label: '且',
        value: 'AND',
    },
    {
        label: '或',
        value: 'OR',
    }
] as const;

export type OperatorType = typeof operator[number]['value'];

export type ConditionGroup = {
    type: OperatorType;
    conditions: (Single | ConditionGroup)[];
};

export const conditionGroupOpt = {
    name: "ConditionGroup",
    inheritAttrs: false,
};

export const conditionGroupProps = {
    isGroup: {
        type: Boolean,
        default: false,
    },
    parentIndex: {
        type: Number,
    },
    conditions: {
        type: Object as PropType<ConditionGroup>,
        default: () => ({
            type: 'AND',
            conditions: [],
        }),
    },
    getOptions: {
        type: Function as PropType<() => IOption[]>,
        default: () => [],
    },
    add: {
        type: Function as PropType<() => Single>,
    }
};
