import { ChangeEvent, MouseEvent } from 'react';
export interface UseClickChangeValue {
    onChangeClick: (e: MouseEvent<HTMLLabelElement> | ChangeEvent<HTMLInputElement>, isPartiallyChecked?: Readonly<boolean>) => void;
    isChecked: Readonly<boolean> | undefined;
}
export interface UseClickChangeProps {
    isDisabled?: Readonly<boolean>;
    isDefaultChecked?: Readonly<boolean>;
    isChecked?: Readonly<boolean>;
    onChange?: (isChecked: Readonly<boolean> | ChangeEvent<HTMLInputElement>) => void;
    deps?: ReadonlyArray<unknown>;
    handlersWithEvent?: Readonly<boolean>;
}
export declare const useClickChange: (props: Readonly<UseClickChangeProps>) => Readonly<UseClickChangeValue>;
