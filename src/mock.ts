export const single = {
    operand: {
        factor: 'field2',
    },
    operator: 'greaterThanOrEqual',
    value: [
        {
            valueType: 'customerGroup',
            value: '12',
        },
    ],
};

export const singleConditions = {
    type: "AND",
    conditions: [
        {
            operand: {
                factor: 'field',
            },
            operator: 'equal',
            value: [
                {
                    valueType: 'customer',
                    value: '12',
                },
            ],
        },
        {
            operand: {
                tableId: 'table1',
                fieldId: 'field2',
            },
            operator: 'equal',
            value: [
                {
                    valueType: 'customer',
                    value: '222',
                },
            ],
        }
    ]
};

export const multipleCondition = {
    type: "OR",
    conditions: [
        {
            type: "AND",
            conditions: [
                {
                    operand: {
                        tableId: 'table_02',
                        fieldId: 'field_02',
                    },
                    operator: 'equal',
                    value: [
                        {
                            valueType: 'customer',
                            value: '22',
                        }
                    ]
                }
            ]
        }
    ]
}
