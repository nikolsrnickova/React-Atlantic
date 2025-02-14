import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { useComposition } from '../../../hooks/useComposition';
import { Column, ColumnProps } from '../Column';
import { Table } from '../Table';
import { StyledRow } from './Row.style';

export interface RowProps {
	onClick?: () => void;
}

export const Row: FC<PropsWithChildren<RowProps>> & {
	Column: FC<ColumnProps>;
} = (props): ReactElement => {
	const { children, onClick } = props;
	const { getFilteredChildren } = useComposition();
	const items: JSX.Element[] = getFilteredChildren(children, Table.Column.displayName);

	return <StyledRow onClick={() => onClick?.()}>{items}</StyledRow>;
};

Row.Column = Column;

Row.displayName = `Row`;
