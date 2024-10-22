import { PropType } from 'vue';
import { Single } from './condition';
export declare const operator: readonly [{
    readonly label: "且";
    readonly value: "AND";
}, {
    readonly label: "或";
    readonly value: "OR";
}];
export type OperatorType = typeof operator[number]['value'];
export declare const conditionGroupProps: {
    isGroup: {
        type: BooleanConstructor;
        default: boolean;
    };
    parentIndex: {
        type: NumberConstructor;
    };
    conditions: {
        type: PropType<any>;
        default: () => {
            type: string;
            conditions: never[];
        };
    };
    getOptions: {
        type: PropType<Function>;
        default: () => never[];
    };
    add: {
        type: PropType<() => Single>;
    };
    slotProps: {
        type: PropType<any>;
        default: () => {};
    };
};
//# sourceMappingURL=conditionGroup.d.ts.map