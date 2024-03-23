import { UiBox, UiGrid } from 'components/atoms/layouts';
import LandingHightlight from 'components/organisms/landingHighlight';
import PageTemplate from 'components/templates/pageTemplate';

const LandingPage = () => {
  return (
    <PageTemplate>
      <UiGrid templateColumns="1fr 3fr" gap="30px">
        <UiBox style={{ border: '1px solid red' }}>
          <LandingHightlight />
        </UiBox>
        <UiBox bg="tomato">hhh</UiBox>
      </UiGrid>
    </PageTemplate>
  );
};

export default LandingPage;
