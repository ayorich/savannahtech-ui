import { UiFlex } from 'components/atoms/layouts';
import BoardMask from 'components/molecules/boardMask';
import CardFilter from 'components/molecules/cardFilter';

const LandingHightlight = () => {
  return (
    <UiFlex gap={6} flexDirection="column">
      <BoardMask />
      <CardFilter />
    </UiFlex>
  );
};

export default LandingHightlight;
