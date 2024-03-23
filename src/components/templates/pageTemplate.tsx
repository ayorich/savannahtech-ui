import { UiBox, UiContainer } from 'components/atoms/layouts';
import { FC } from 'react';

type PageTemplateProps = {
  children: React.ReactNode;
};

const PageTemplate: FC<PageTemplateProps> = ({ children }) => {
  return (
    <UiContainer centerContent bg="#f7f8fd" maxW="full" minH="100vh" h="full">
      <UiBox w={{ md: '90%', lg: '80%' }} py="94px" h="full">
        {children}
      </UiBox>
    </UiContainer>
  );
};
export default PageTemplate;
