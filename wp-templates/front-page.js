import { useQuery, gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  Footer,
  Main,
  Container,
  ContentWrapper,
  NavigationMenu,
  Hero,
  SEO,
} from '../components';
import TWHomeMain from '../components/TWHomeMain/TWHomeMain';
import Image from 'next/image';

export default function Component() {
  const { data } = useQuery(Component.query, {
    variables: Component.variables(),
  });

  const { title: siteTitle, description: siteDescription } =
    data?.generalSettings;

  const primaryMenu = data?.headerMenuItems?.nodes ?? [];

  const theContent = data?.nodeByUri?.content ?? false;

  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <Main>
        <Container>
          {/* <ContentWrapper content={theContent} /> */}
          <TWHomeMain />
        </Container>
      </Main>
      <Footer title={siteTitle} frontPage={true} />
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetPageData($headerLocation: MenuLocationEnum) {
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    nodeByUri(uri: "/") {
      __typename
      ... on ContentType {
        id
        name
      }
      ... on Page {
        id
        title
      }
    }

    nodeByUri(uri: "/") {
      __typename
      ... on ContentType {
        id
        name
      }
      ... on Page {
        id
        title
        content
      }
    }
  }
`;

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
  };
};
