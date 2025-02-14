import * as React from 'react';
import { Size } from '../../types';
import { OptionProps } from './Option';
import { OptionType } from './Select.utils';
export interface SelectProps {
    onChange?: (value?: any) => void;
    value?: any;
    defaultValue?: any;
    options?: OptionType[];
    isMulti?: boolean;
    isFullWidth?: boolean;
    isAlternative?: boolean;
    placeholder?: string;
    isDisabled?: boolean;
    size?: Size;
    className?: string;
    autoFocus?: boolean;
}
export declare const Select: React.FC<React.PropsWithChildren<SelectProps>> & {
    Option: React.FC<OptionProps>;
};
