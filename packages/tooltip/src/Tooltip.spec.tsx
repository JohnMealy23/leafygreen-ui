import React from 'react';
import {
  act,
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Tooltip, { TooltipProps } from './Tooltip';
import { OneOf } from '@leafygreen-ui/lib';

const buttonText = 'trigger button';
const tooltipTestId = 'tooltip-test-id';
const onClick = jest.fn();

function waitForTimeout(timeout = 500) {
  return new Promise(res => setTimeout(res, timeout));
}

interface ButtonTestProps {
  [key: string]: any;
}

function renderTooltip(
  props: Omit<TooltipProps, 'children' | 'trigger'> &
    OneOf<
      { usePortal?: true; portalClassName?: string },
      { usePortal: false }
    > = {},
) {
  const utils = render(
    <>
      <div data-testid="backdrop" />
      <Tooltip
        trigger={<button onClick={onClick}>{buttonText}</button>}
        data-testid={tooltipTestId}
        {...props}
      >
        <div>Tooltip Contents!</div>
      </Tooltip>
    </>,
  );

  const button = utils.getByText(buttonText);
  const backdrop = utils.getByTestId('backdrop');

  return { ...utils, button, backdrop };
}

beforeEach(() => {
  onClick.mockReset();
});

describe('packages/tooltip', () => {
  describe('when uncontrolled', () => {
    test(`renders a button to the DOM with ${buttonText}`, () => {
      const { getByText } = renderTooltip();
      expect(getByText(buttonText)).toBeInTheDocument();
    });

    test('when "triggerEvent" is set to click, clicking trigger opens and closes the tooltip', async () => {
      const { button, getByTestId } = renderTooltip({
        triggerEvent: 'click',
      });

      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);

      const tooltip = getByTestId(tooltipTestId);

      // checking that in the Document, because in the document before opacity hits 1
      expect(tooltip).toBeInTheDocument();

      // checking for visibility, because opacity changes before tooltip transitions out of the DOM
      fireEvent.click(button);
      await waitForElementToBeRemoved(tooltip);
    });

    test('when "triggerEvent" is set to "hover", hovering on and off the trigger opens and closes the tooltip', async () => {
      const { getByTestId, queryByTestId, button } = renderTooltip({
        triggerEvent: 'hover',
      });

      fireEvent.mouseEnter(button);

      await waitFor(() => getByTestId(tooltipTestId), { timeout: 500 });

      expect(getByTestId(tooltipTestId)).toBeInTheDocument();

      fireEvent.mouseLeave(button);

      await waitForElementToBeRemoved(getByTestId(tooltipTestId), {
        timeout: 500,
      });

      expect(queryByTestId(tooltipTestId)).not.toBeInTheDocument();
    });

    const fireEventMap = {
      hover: {
        on: fireEvent.mouseEnter,
        off: fireEvent.mouseLeave,
      },
      click: {
        on: fireEvent.click,
        off: fireEvent.click,
      },
    };

    async function testTriggerEventWhenDisabled(
      triggerEvent: 'hover' | 'click',
    ) {
      test(`when triggerEvent is "${triggerEvent}"`, async () => {
        const { queryByTestId, button } = renderTooltip({
          triggerEvent,
          enabled: false,
        });

        // Wait for 200ms to ensure enough time in case the element erroneously appears
        await act(async () => {
          fireEventMap[triggerEvent].on(button);
          await waitForTimeout(200);
        });

        expect(queryByTestId(tooltipTestId)).not.toBeInTheDocument();

        // The following test is largely here to ensure we don't somehow end up in a strange state where the element becomes visible once the mouse leaves.
        await act(async () => {
          fireEventMap[triggerEvent].off(button);
          await waitForTimeout(200);
        });

        expect(queryByTestId(tooltipTestId)).not.toBeInTheDocument();
      });
    }

    describe('tooltip does not open when enabled is "false"', () => {
      testTriggerEventWhenDisabled('hover');
      testTriggerEventWhenDisabled('click');
    });

    test('tooltip closes when enabled is set to "false"', async () => {
      const { getByTestId, button, container } = renderTooltip({
        triggerEvent: 'click',
        enabled: true,
      });

      fireEvent.click(button);

      const tooltip = await waitFor(() => {
        const tooltip = getByTestId(tooltipTestId);
        expect(tooltip).toBeVisible();
        return tooltip;
      });

      render(
        <>
          <div data-testid="backdrop" />

          <Tooltip
            trigger={<button onClick={onClick}>{buttonText}</button>}
            data-testid={tooltipTestId}
            triggerEvent="click"
            enabled={false}
          >
            <div>Tooltip Contents!</div>
          </Tooltip>
        </>,
        { container },
      );

      await waitFor(() => {
        expect(tooltip).not.toBeInTheDocument();
      });
    });

    test('backdrop clicks close the tooltip', async () => {
      const { getByTestId, button, backdrop } = renderTooltip({
        triggerEvent: 'click',
      });

      fireEvent.click(button);
      const tooltip = getByTestId(tooltipTestId);
      expect(tooltip).toBeInTheDocument();

      fireEvent.click(backdrop);
      await waitForElementToBeRemoved(tooltip);
    });

    test('escape click closes tooltip', async () => {
      const { getByTestId, button } = renderTooltip({
        triggerEvent: 'click',
      });

      fireEvent.click(button);
      const tooltip = getByTestId(tooltipTestId);
      await act(() => waitFor(() => expect(tooltip).toBeVisible()));

      fireEvent.keyDown(button, {
        key: 'Escape',
        keyCode: 27,
      });
      await waitForElementToBeRemoved(tooltip);
    });

    test('when "shouldClose" prop is returns true', async () => {
      const { getByTestId, backdrop, button } = renderTooltip({
        triggerEvent: 'click',
        shouldClose: () => true,
      });

      fireEvent.click(button);
      const tooltip = getByTestId(tooltipTestId);
      await act(() => waitFor(() => expect(tooltip).toBeVisible()));

      fireEvent.click(backdrop);
      await waitForElementToBeRemoved(tooltip);
    });

    test('when "shouldClose" prop is returns false', async () => {
      const { getByTestId, backdrop, button } = renderTooltip({
        triggerEvent: 'click',
        shouldClose: () => false,
      });

      fireEvent.click(button);
      const tooltip = getByTestId(tooltipTestId);
      await act(() => waitFor(() => expect(tooltip).toBeVisible()));

      fireEvent.click(backdrop);
      expect(tooltip).toBeVisible();
    });
  });

  describe('when controlled', () => {
    const setOpen = jest.fn();

    test('renders initial state based on "open" prop', () => {
      const { getByTestId } = renderTooltip({
        open: true,
        setOpen,
      });

      expect(getByTestId(tooltipTestId)).toBeVisible();
    });

    test('onClick fires when trigger is clicked', () => {
      const { button } = renderTooltip({
        open: true,
        setOpen,
      });

      fireEvent.click(button);
      expect(onClick).toHaveBeenCalled();
    });

    describe('clicking content inside of tooltip does not force tooltip to close', () => {
      function testCase(name: string, usePortal: boolean): void {
        test(`${name}`, () => {
          const { button, getByTestId } = renderTooltip({
            open: true,
            setOpen,
            usePortal,
          });

          fireEvent.click(button);

          const tooltip = getByTestId(tooltipTestId);
          expect(tooltip).toBeVisible();

          onClick.mockClear();

          let clickTarget: HTMLElement = tooltip;

          while (![document.body, button].includes(clickTarget)) {
            fireEvent.click(clickTarget);

            expect(tooltip).toBeVisible();
            expect(onClick).not.toHaveBeenCalled();

            clickTarget = clickTarget.parentElement!;
          }
        });
      }

      testCase('with portal', true);
      testCase('without portal', false);
    });
  });

  describe('when trigger is a class-based component', () => {
    class Button extends React.Component<ButtonTestProps> {
      render() {
        const { children } = this.props;
        return (
          <button {...this.props} data-testid="class-controlled-trigger">
            trigger {children}
          </button>
        );
      }
    }

    function renderClassTrigger(props = {}) {
      const utils = render(
        <>
          <div data-testid="backdrop" />
          <Tooltip trigger={<Button onClick={onClick} />} {...props}>
            <div data-testid={tooltipTestId}>Tooltip Contents!</div>
          </Tooltip>
        </>,
      );
      const button = utils.getByTestId('class-controlled-trigger');
      const backdrop = utils.getByTestId('backdrop');
      return { ...utils, button, backdrop };
    }

    test('renders a button to the DOM', () => {
      const { button } = renderClassTrigger();
      expect(button).toBeVisible();
    });

    test('component triggers opening and closing of tooltip', async () => {
      const { button, getByTestId } = renderClassTrigger({
        triggerEvent: 'click',
      });
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalled();

      const tooltip = getByTestId(tooltipTestId);
      expect(tooltip).toBeInTheDocument();
      fireEvent.click(button);
      await waitForElementToBeRemoved(tooltip);
    });
  });

  describe('when trigger is an inline function', () => {
    function renderInlineTrigger(props = {}) {
      const utils = render(
        <>
          <div data-testid="backdrop" />
          <Tooltip
            trigger={({ children, ...rest }: ButtonTestProps) => (
              <button {...rest} data-testid="inline-trigger">
                {buttonText}
                {children}
              </button>
            )}
            {...props}
          >
            <div data-testid={tooltipTestId}>Tooltip Contents!</div>
          </Tooltip>
        </>,
      );
      const button = utils.getByTestId('inline-trigger');
      const backdrop = utils.getByTestId('backdrop');
      return { ...utils, button, backdrop };
    }

    test(`renders a button to the DOM with ${buttonText}`, () => {
      const { button } = renderInlineTrigger();
      expect(button).toBeInTheDocument();
    });

    test(`when "triggerEvent" is click, clicking triggers opening and closing of tooltip`, async () => {
      const { button, getByTestId } = renderInlineTrigger({
        triggerEvent: 'click',
      });

      fireEvent.click(button);
      const tooltip = getByTestId(tooltipTestId);
      expect(tooltip).toBeInTheDocument();

      fireEvent.click(button);
      await waitForElementToBeRemoved(tooltip);
    });
  });

  describe('when trigger contains nested children', () => {
    interface ButtonProps {
      children: React.ReactNode;
    }

    function Button({ children, ...props }: ButtonProps) {
      return (
        <button {...props} data-testid="nested-trigger">
          trigger {children}
        </button>
      );
    }

    function renderNestedTrigger(props = {}) {
      const utils = render(
        <Tooltip
          {...props}
          trigger={
            <Button>
              <span>trigger</span>
            </Button>
          }
        >
          <div>Tooltip!</div>
        </Tooltip>,
      );

      const button = utils.getByTestId('nested-trigger');
      return { ...utils, button };
    }

    test('renders trigger in document', () => {
      const { button } = renderNestedTrigger();
      expect(button).toBeInTheDocument();
    });
  });

  test('portals popover content to end of DOM, when "usePortal" is not set', () => {
    const { container, getByTestId } = renderTooltip({
      open: true,
    });
    expect(container).not.toContain(getByTestId(tooltipTestId));
  });

  test('does not portal popover content to end of DOM when "usePortal" is false', () => {
    const { container } = renderTooltip({
      open: true,
      usePortal: false,
    });

    expect(container.innerHTML.includes(tooltipTestId)).toBe(true);
  });

  test('applies "portalClassName" to root of portal', () => {
    const { getByTestId } = renderTooltip({
      open: true,
      portalClassName: 'test-classname',
    });

    const matchedElements = document.querySelectorAll('body > .test-classname');
    expect(matchedElements).toHaveLength(1);

    const portalRoot = matchedElements.item(0);
    expect(portalRoot).toContainElement(getByTestId(tooltipTestId));
  });

  // eslint-disable-next-line jest/expect-expect
  test('does not allow specifying "portalClassName", when "usePortal" is false', () => {
    renderTooltip({
      open: true,
      usePortal: false,
      // @ts-expect-error
      portalClassName: 'test-classname',
    });
  });
});
