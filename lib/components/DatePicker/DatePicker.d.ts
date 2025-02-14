import * as React from 'react';
export interface DatePickerProps {
    id?: string;
    selected?: Date | null;
    className?: string;
    onChange?: (date?: Date | null) => void;
    onKeyDown?: (e: any) => void;
    placeholder?: string;
    maxDate?: Date;
    minDate?: Date;
    isFullWidth?: boolean;
}
export declare const DatePicker: React.FC<DatePickerProps>;
