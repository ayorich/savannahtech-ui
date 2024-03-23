import { UiBox, UiContainer } from 'components/atoms/layouts';
import { FC } from 'react';

type PageTemplateProps = {
  children: React.ReactNode;
};

const PageTemplate: FC<PageTemplateProps> = ({ children }) => {
  return (
    <UiContainer centerContent bg="#f7f8fd" maxW="full" minH="100vh" h="100vh">
      <UiBox w="80%" py="94px" h="full">
        {children}
      </UiBox>
    </UiContainer>
  );
};
export default PageTemplate;
