import React from 'react';
import { useRouter } from 'next/router';
import { css, cx } from 'emotion';
import facepaint from 'facepaint';
import { Overline } from '@leafygreen-ui/typography';
import { uiColors } from '@leafygreen-ui/palette';
import { useViewportSize } from '@leafygreen-ui/hooks';
import { spacing, breakpoints } from '@leafygreen-ui/tokens';
import { GridContainer, GridItem } from 'components/Grid';
import { getAllUpdates, UpdateProps } from 'utils/fetchUpdates';
import News from 'components/News';

const mq = facepaint(
  Object.values(breakpoints).map(bp => `@media (min-width: ${bp}px)`),
  { literal: true },
);

const backdrop = css`
  background-color: ${uiColors.gray.light3};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const layoutProperties = css`
  ${mq({
    width: ['calc(100% + 48px)', '100%', '100%', '1077px'],
    paddingRight: [0, `${spacing[4]}px`, `${spacing[4]}px`, `${spacing[4]}px`],
    marginLeft: ['-24px', 'unset', 'unset', 'unset'],
  })}
`;

const boxShadow = css`
  box-shadow: 0 0 0 1px ${uiColors.gray.light1};
`;

const container = css`
  ${boxShadow}
  width: 100%;
  height: 100%;
  background-color: white;
  border: unset;
  padding: unset;
  cursor: pointer;
  position: relative;
  color: ${uiColors.gray.dark3};
`;

const sharedHoverInteraction = css`
  &:hover {
    background-color: ${uiColors.gray.light3};
    border: 1px solid ${uiColors.gray.light1};
    box-shadow: 0 0 0 0px ${uiColors.gray.light1},
      2px 16px 20px -10px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    z-index: 99999;
  }
`;

const previewWrapper = css`
  ${container}
  overflow: hidden;
  transition: transform 300ms ease-in-out;
  ${sharedHoverInteraction}

  &:hover {
    & > div {
      opacity: 1;
    }
  }
`;

const overlineContainer = css`
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: ${spacing[3]}px;
  padding-bottom: ${spacing[3]}px;
  transition: opacity 300ms ease-in-out;

  ${mq({
    opacity: [1, 1, 0, 0],
  })}
`;

const overlineColor = css`
  color: ${uiColors.gray.dark1};
`;

const marketingWrapper = css`
  ${boxShadow}
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  transition: transform 300ms ease-in-out;
  ${sharedHoverInteraction}
`;

const textWrapper = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  font-weight: medium;
  padding-top: ${spacing[4]}px;
  padding-left: ${spacing[4]}px;
  text-align: left;
  overflow: hidden;

  ${mq({
    fontSize: ['24px', '60px', '60px', '60px'],
  })}
`;

const largeHeight = css`
  ${mq({
    height: ['50vw', '350px', '350px', '350px'],
  })}
`;

const smallHeight = css`
  ${mq({
    height: ['50vw', '175px', '175px', '175px'],
  })}
`;

const halfWidth = css`
  width: 50%;
`;

const secondRowContainer = css`
  display: flex;
  flex-wrap: wrap;
`;

interface ComponentPreviewProps {
  route: string;
  backgroundURL: string;
  content?: string;
  children?: string;
  className?: string;
}

function ComponentPreview({
  route,
  backgroundURL,
  content,
  className,
}: ComponentPreviewProps) {
  const { push } = useRouter();
  return (
    <div className={className}>
      <button className={previewWrapper} onClick={() => push(route)}>
        <img
          src={backgroundURL}
          alt={`Learn more about ${content} component`}
          className={css`
            width: 100%;
          `}
        />
        <div className={overlineContainer}>
          <Overline className={overlineColor}>{content}</Overline>
        </div>
      </button>
    </div>
  );
}

interface MarketingPreview {
  marketingURL: string;
  children: string;
  backgroundURL: string;
}

function MarketingPreview({
  marketingURL,
  children,
  backgroundURL,
}: MarketingPreview) {
  return (
    <div className={largeHeight}>
      <a
        href={marketingURL}
        className={container}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={marketingWrapper}>
          <img
            src={backgroundURL}
            alt=""
            aria-hidden="true"
            className={css`
              min-width: 100%;
              height: 100%;
            `}
          />
          <div className={textWrapper}>{children}</div>
        </div>
      </a>
    </div>
  );
}

export default function Home({ updates }: { updates: Array<UpdateProps> }) {
  const viewport = useViewportSize();
  const isTouchDevice = viewport?.width
    ? viewport?.width < breakpoints.Tablet
    : false;

  return (
    <>
      <div className={backdrop} />
      <GridContainer
        role="main"
        wrap="wrap"
        align="flex-start"
        justify="flex-start"
        className={layoutProperties}
      >
        {/* First Row */}
        <GridItem sm={12} md={6} lg={6}>
          <div className={largeHeight}>
            <News updates={updates} />
          </div>
        </GridItem>
        <GridItem sm={6} md={6} lg={6}>
          <ComponentPreview
            route="/component/banner/example"
            backgroundURL="/images/banner-thumbnail.png"
            content="Banner"
            className={largeHeight}
          />
        </GridItem>

        {/* Second Row */}
        {isTouchDevice && (
          <GridItem sm={6} md={6} lg={6}>
            <div className={largeHeight}>
              {/* @ts-expect-error, awaiting URL for marketing page */}
              <MarketingPreview backgroundURL="/images/personas-thumbnail.png">
                Meet our Personas
              </MarketingPreview>
            </div>
          </GridItem>
        )}
        <GridItem sm={12} md={6} lg={6}>
          <div className={secondRowContainer}>
            <ComponentPreview
              route="/component/radio-box-group/example"
              backgroundURL="/images/radioBox-thumbnail.png"
              content="Radio boxes"
              className={cx(smallHeight, halfWidth, boxShadow)}
            />
            <ComponentPreview
              route="/component/text-input/example"
              backgroundURL="/images/textInput-thumbnail.png"
              content="Text input"
              className={cx(smallHeight, halfWidth, boxShadow)}
            />
            <ComponentPreview
              route="/component/logo/example"
              backgroundURL="/images/logos-thumbnail.png"
              content="Logos"
              className={cx(smallHeight, halfWidth)}
            />
            <ComponentPreview
              route="/component/tokens/example"
              backgroundURL="/images/spacers-thumbnail.png"
              content="Tokens"
              className={cx(smallHeight, halfWidth)}
            />
          </div>
        </GridItem>
        {!isTouchDevice && (
          <GridItem sm={6} md={6} lg={6}>
            {/* @ts-expect-error, awaiting URL for marketing page */}
            <MarketingPreview backgroundURL="/images/personas-thumbnail.png">
              Meet our Personas
            </MarketingPreview>
          </GridItem>
        )}

        {/* Third Row */}
        <GridItem sm={6} md={3} lg={3}>
          <ComponentPreview
            route="/component/icon/example"
            backgroundURL="/images/icons-thumbnail.png"
            content="Icons"
            className={smallHeight}
          />
        </GridItem>
        <GridItem sm={6} md={3} lg={3}>
          <ComponentPreview
            route="/component/card/example"
            backgroundURL="/images/card-thumbnail.png"
            content="Card"
            className={smallHeight}
          />
        </GridItem>
        <GridItem sm={6} md={3} lg={3}>
          <ComponentPreview
            route="/component/tooltip/example"
            backgroundURL="/images/tooltip-thumbnail.png"
            content="Tooltip"
            className={smallHeight}
          />
        </GridItem>
        <GridItem sm={6} md={3} lg={3}>
          <ComponentPreview
            route="/component/checkbox/example"
            backgroundURL="/images/checkbox-thumbnail.png"
            content="Checkbox"
            className={smallHeight}
          />
        </GridItem>

        {/* Fourth Row */}
        <GridItem sm={6} md={6} lg={6}>
          <MarketingPreview
            marketingURL="https://www.mongodb.com/blog/post/meet-our-product-design-team-part-1"
            backgroundURL="/images/team-thumbnail.png"
          >
            Meet our Team
          </MarketingPreview>
        </GridItem>
      </GridContainer>
    </>
  );
}

export async function getStaticProps() {
  const updates = await getAllUpdates();
  return { props: { updates } };
}
