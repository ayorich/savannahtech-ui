import { UiFlex } from 'components/atoms/layouts';
import BoardMask from 'components/molecules/boardMask';
import CardFilter from 'components/molecules/cardFilter';
import RoadMap from 'components/molecules/roadmap';

const LandingHightlight = () => {
  return (
    <UiFlex gap={6} flexDirection="column">
      <BoardMask />
      <CardFilter />
      <RoadMap />
    </UiFlex>
  );
};

export default LandingHightlight;
