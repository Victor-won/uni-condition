import { PropType } from 'vue';
import { Single } from './condition.ts';

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

export const conditionGroupProps = {
    isGroup: {
        type: Boolean,
        default: false,
    },
    parentIndex: {
        type: Number,
    },
    conditions: {
        type: Object as PropType<any>,
        default: () => ({
            type: 'AND',
            conditions: [],
        }),
    },
    getOptions: {
        type: Function as PropType<Function>,
        default: () => [],
    },
    add: {
        type: Function as PropType<() => Single>,
    },
    slotProps: {
        type: Object as PropType<any>,
        default: () => ({}),
    }
};
