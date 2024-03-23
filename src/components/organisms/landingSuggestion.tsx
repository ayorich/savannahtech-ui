import { UiFlex } from 'components/atoms/layouts';
import CardFilter from 'components/molecules/cardFilter';
import SuggestionHeader from 'components/molecules/suggestHeader';

const LandingSuggestion = () => {
  return (
    <UiFlex gap={6} flexDirection="column">
      <SuggestionHeader />
      <CardFilter />
    </UiFlex>
  );
};

export default LandingSuggestion;
