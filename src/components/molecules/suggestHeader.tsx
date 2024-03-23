import { UiButton } from 'components/atoms/button';
import { UiFlex, UiHStack } from 'components/atoms/layouts';
import { UiSelect } from 'components/atoms/select';
import { UiHeading, UiText } from 'components/atoms/typography';
import BulbIcon from 'icons/bulb';

const SuggestionHeader = () => {
  return (
    <UiFlex
      bg="#373f68"
      borderRadius="10px"
      alignItems="center"
      justifyContent="space-between"
      px={4}
      py="14px"
    >
      <UiHStack>
        <BulbIcon />
        <UiHeading
          as="h6"
          ml={4}
          mr="38px"
          fontSize="18px"
          color="#fff"
          fontWeight="bold"
        >
          6 Suggestions
        </UiHeading>
        <UiHStack>
          <UiText color="#fff" size="14px" flexWrap="nowrap">
            Sort by:
          </UiText>
          <UiSelect
            value="option1"
            variant="unstyled"
            w="140px"
            color="#fff"
            cursor="pointer"
          >
            <option value="option1">Most Upvotes </option>
            <option value="option2">Most Views</option>
            <option value="option3">Most Likes</option>
          </UiSelect>
        </UiHStack>
      </UiHStack>

      <UiButton
        bg="#ad1fea"
        fontSize="sm"
        color="#f2f4fe"
        size="md"
        fontWeight="bold"
        _hover={{ bg: '#ad1fea', opacity: 0.9 }}
        alignItems="center"
      >
        + Add Feedback
      </UiButton>
    </UiFlex>
  );
};

export default SuggestionHeader;
