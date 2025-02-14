import React from 'react';
import { Size } from '../../types';
import { Icon, IconName } from '../Icon';
import { TextAreaProps } from './TextArea';
export declare type AutoComplete = 'name' | 'honorific-prefix' | 'given-name' | 'additional-name' | 'family-name' | 'honorific-suffix' | 'nickname' | 'username' | 'new-password' | 'current-password' | 'one-time-code' | 'organization-title' | 'organization' | 'street-address' | 'address-line1' | 'address-line2' | 'address-line3' | 'address-level4' | 'address-level3' | 'address-level2' | 'address-level1' | 'country' | 'country-name' | 'postal-code' | 'cc-name' | 'cc-given-name' | 'cc-additional-name' | 'cc-family-name' | 'cc-number' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-csc' | 'cc-type' | 'transaction-currency' | 'transaction-amount' | 'language' | 'bday' | 'bday-day' | 'bday-month' | 'bday-year' | 'sex' | 'url' | 'photo';
export interface InputProps {
    transferFocus?: boolean;
    value?: string;
    defaultValue?: string;
    isDisabled?: boolean;
    autoFocus?: boolean;
    placeholder?: string;
    id?: string;
    onEnterPress?: (value: string) => void;
    onChange?: (value: React.ChangeEvent<HTMLInputElement> | string) => void;
    onBlur?: () => void;
    onKeyDown?: (value: React.KeyboardEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    iconLeft?: IconName;
    iconRight?: IconName;
    ComponentLeft?: Icon;
    ComponentRight?: Icon;
    isAlternative?: boolean;
    size?: Size;
    isLoading?: boolean;
    /** custom className */
    className?: string;
    htmlType?: 'text' | 'email' | 'password';
    autoComplete?: AutoComplete;
    isFullWidth?: boolean;
    handlersWithEvent?: boolean;
}
export declare const Input: React.FC<InputProps> & {
    TextArea: React.FC<TextAreaProps>;
};
