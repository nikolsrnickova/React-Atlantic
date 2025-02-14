import * as React from 'react';
import { useClickChange } from '../../hooks/EventHandlers/useClickChange';
import { HorizontalPosition } from '../../types';
import { Button, ButtonProps } from './Button';
import { useRadioGroup } from './Context';
import { Group, GroupProps } from './Group';
import {
  StyledRadioInputHidden,
  StyledRadioInputShown,
  StyledRadioLabel,
  StyledRadioMark,
  StyledRadioSpan
} from './Radio.style';

export interface RadioProps {
  isChecked?: boolean;
  isDefaultChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (isChecked: boolean) => void;
  position?: HorizontalPosition;
  /** custom className */
  className?: string;
  value?: any;
}

export const Radio: React.FC<React.PropsWithChildren<RadioProps>> & {
  Button: React.FC<ButtonProps>;
  Group: React.FC<GroupProps>;
} = (props: React.PropsWithChildren<RadioProps>): React.ReactElement => {
  const {
    isDefaultChecked,
    position,
    isDisabled,
    className,
    children,
    value
  } = props;
  const { value: ctxVal, setValue: setCtxVal } = useRadioGroup();
  const { onChangeClick: hookOnChange, isChecked } = useClickChange({
    isDisabled,
    isDefaultChecked,
    deps: [props.isChecked],
    isChecked: props.isChecked,
    onChange: props.onChange
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    hookOnChange(e);

    if (!isDisabled) {
      if (value !== undefined) {
        setCtxVal(value);
      }
    }
  };

  let checked: boolean | undefined = props.isChecked || isChecked;

  if (ctxVal !== undefined) {
    checked = ctxVal === value;
  }

  return (
    <StyledRadioLabel
      isChecked={checked}
      isDisabled={isDisabled}
      className={className}
      position={position}
      isDefaultChecked={isDefaultChecked}
    >
      {position === 'right' && (
        <StyledRadioSpan isDisabled={isDisabled}>{children}</StyledRadioSpan>
      )}

      <StyledRadioInputShown isDisabled={isDisabled}>
        <StyledRadioMark isDisabled={isDisabled} isChecked={checked}>
          <StyledRadioInputHidden
            onChange={onChange}
            checked={checked}
            disabled={isDisabled}
            value={value}
          />
        </StyledRadioMark>
      </StyledRadioInputShown>

      {position === 'left' && (
        <StyledRadioSpan isDisabled={isDisabled}>{children}</StyledRadioSpan>
      )}
    </StyledRadioLabel>
  );
};

Radio.defaultProps = {
  position: 'left'
};

Radio.Button = Button;

Radio.Group = Group;
