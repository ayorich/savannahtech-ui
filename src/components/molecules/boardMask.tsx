import { UiFlex } from 'components/atoms/layouts';
import { UiHeading, UiText } from 'components/atoms/typography';

const BoardMask = () => {
  return (
    <UiFlex
      w="full"
      bg="radial-gradient(circle at 104% -10%, #e84d70, #a337f6 56%, #28a7ed 106%)"
      h="137px"
      borderRadius="10px"
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="start"
      p={6}
    >
      <UiHeading as="h6" size="md" color="#fff">
        Frontend Mentor
      </UiHeading>
      <UiText color="#fff" opacity="0.75">
        Feedback Board
      </UiText>
    </UiFlex>
  );
};

export default BoardMask;
