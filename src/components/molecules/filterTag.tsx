import { TypeTagProps, UiTag } from 'components/atoms/tag';
import { FC } from 'react';

type FilterTagProps = {
  label: string;
  active?: boolean;
} & TypeTagProps;

const FilterTag: FC<FilterTagProps> = (props) => {
  const { label, active, ...rest } = props;
  return (
    <UiTag
      bg={active ? '#4661e6' : '#f2f4ff'}
      color={active ? '#fff' : '#4661e6'}
      px={4}
      py="6px"
      fontWeight="600"
      borderRadius="10px"
      {...rest}
    >
      {label}
    </UiTag>
  );
};

export default FilterTag;
