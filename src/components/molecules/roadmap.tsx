import { UiButton } from 'components/atoms/button';
import { UiBox, UiCircle, UiFlex, UiHStack } from 'components/atoms/layouts';
import { UiHeading, UiText } from 'components/atoms/typography';

const RoadMap = () => {
  return (
    <UiBox w="full" bg="#fff" borderRadius="10px" p={6}>
      <UiFlex justifyContent="space-between" alignItems="center" mb={3}>
        <UiHeading as="h6" size="md" color="#3a4374">
          Roadmap
        </UiHeading>
        <UiButton color="#4661e6" variant="link" textDecoration="underline">
          View
        </UiButton>
      </UiFlex>
      <UiFlex justifyContent="space-between" alignItems="center" mb={2}>
        <UiHStack gap={4}>
          <UiCircle size="8px" bg="#f49f85" />
          <UiText size="sm" color="#647196" fontWeight="medium">
            Planned
          </UiText>
        </UiHStack>
        <UiText fontWeight="bold" size="md" color="#647196">
          2
        </UiText>
      </UiFlex>
      <UiFlex justifyContent="space-between" alignItems="center" mb={2}>
        <UiHStack gap={4}>
          <UiCircle size="8px" bg="#ad1fea" />
          <UiText size="sm" color="#647196" fontWeight="medium">
            In-Progress
          </UiText>
        </UiHStack>
        <UiText fontWeight="bold" size="md" color="#647196">
          3
        </UiText>
      </UiFlex>
      <UiFlex justifyContent="space-between" alignItems="center">
        <UiHStack gap={4}>
          <UiCircle size="8px" bg="#62bcfa" />
          <UiText size="sm" color="#647196" fontWeight="medium">
            Live
          </UiText>
        </UiHStack>
        <UiText fontWeight="bold" size="md" color="#647196">
          1
        </UiText>
      </UiFlex>
    </UiBox>
  );
};

export default RoadMap;
