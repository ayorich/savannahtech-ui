import { UiFlex } from 'components/atoms/layouts';
import FilterTag from './filterTag';

const CardFilter = () => {
  return (
    <UiFlex
      w="full"
      bg="#fff"
      borderRadius="10px"
      cursor="pointer"
      p={6}
      fontSize="12px"
      flexWrap="wrap"
      columnGap={2}
      rowGap={4}
    >
      <FilterTag label="All" active />
      <FilterTag label="UI" />
      <FilterTag label="UX" />
      <FilterTag label="Enhancement" />
      <FilterTag label="Bug" />
      <FilterTag label="Feature" />
    </UiFlex>
  );
};

export default CardFilter;
