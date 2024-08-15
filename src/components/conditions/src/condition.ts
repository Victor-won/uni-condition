import { PropType } from 'vue';

// 选项格式
export type IOption = {
    value: string;
    label: string;
}

// 定义一个值查询对象，包含值类型和值本身
type IValueQuery = {
    valueType: string; // 值的类型，例如字符串
    value: string; // 值的内容
};

// 定义单个操作数对象，包含操作数、运算符和值
export type Single = {
    operand: Record<string, string>; // 操作数，如字段名
    operator: string; // 运算符，如等于、不等于
    value: IValueQuery[]; // 值的数组，可能支持多个值的查询
};

export const conditionOptions = {
    name: 'Condition',
    inheritAttrs: false,
};

export const conditionProps = {
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
};
