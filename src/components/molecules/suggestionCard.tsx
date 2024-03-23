import { UiBox, UiFlex } from 'components/atoms/layouts';
import { UiHeading, UiText } from 'components/atoms/typography';
import CaretupIcon from 'icons/caretup';
import CommentIcon from 'icons/comment';
import { FC } from 'react';
import FilterTag from './filterTag';

type SuggestionCardProps = {
  id: number;
  title: string;
  description: string;
  status: string;
  upvotes: number;
  comments: number;
};

const SuggestionCard: FC<SuggestionCardProps> = ({
  id,
  title,
  description,
  status,
  upvotes,
  comments,
}) => {
  return (
    <UiFlex
      w="full"
      bg="#fff"
      borderRadius="10px"
      px={8}
      py="28px"
      justifyContent="space-between"
    >
      <UiFlex gap={10}>
        <UiFlex
          bg="#f2f4fe"
          p={2}
          h="53px"
          w="40px"
          borderRadius="10px"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <CaretupIcon />
          <UiText fontSize="sm" mt={1} color="#3a4374" fontWeight="bold">
            {upvotes}
          </UiText>
        </UiFlex>

        <UiBox>
          <UiHeading fontSize="18px" fontWeight="bold" color="#3a4374">
            {title}
          </UiHeading>
          <UiText fontWeight="medium" color="#647196" size="sm" mb={3}>
            {description}
          </UiText>
          <FilterTag label={status} />
        </UiBox>
      </UiFlex>
      <UiFlex alignItems="center">
        <UiFlex alignItems="center" gap={2}>
          <CommentIcon />
          <UiText color="#3a4374" fontWeight="bold" size="md">
            {comments}
          </UiText>
        </UiFlex>
      </UiFlex>
    </UiFlex>
  );
};

export default SuggestionCard;
