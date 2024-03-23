import { UiFlex, UiVStack } from 'components/atoms/layouts';
import SuggestionHeader from 'components/molecules/suggestHeader';
import SuggestionCard from 'components/molecules/suggestionCard';
import { suggestions } from 'dataSets/suggestions';

const LandingSuggestion = () => {
  return (
    <UiFlex gap={6} flexDirection="column">
      <SuggestionHeader />
      <UiVStack gap={5}>
        {suggestions.map((props, index) => (
          <SuggestionCard {...props} key={index} />
        ))}
      </UiVStack>
    </UiFlex>
  );
};

export default LandingSuggestion;
