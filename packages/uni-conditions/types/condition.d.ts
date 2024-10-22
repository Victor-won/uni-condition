export type IOption = {
    value: string;
    label: string;
};
type IValueQuery = {
    valueType: string;
    value: string;
};
export type Single = {
    operand: Record<string, string>;
    operator: string;
    value: IValueQuery[];
};
export {};
//# sourceMappingURL=condition.d.ts.map