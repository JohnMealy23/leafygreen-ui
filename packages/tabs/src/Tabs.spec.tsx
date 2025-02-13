import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, Tab } from '.';

const tabsClassName = 'tabs-class-name';
const tabsTestId = 'tabs-component';
const setSelected = jest.fn();

const renderTabs = (tabsProps = {}, tabProps = {}) => {
  render(
    <Tabs {...tabsProps} data-testid={tabsTestId}>
      <Tab {...tabProps} name="First">
        Content 1
      </Tab>
      <Tab name="Second">Content 2</Tab>
      <Tab name="Third"> Content 3</Tab>
    </Tabs>,
  );
};

describe('packages/tab', () => {
  describe('when controlled', () => {
    test('clicking a tab fires setSelected callback', () => {
      renderTabs({ setSelected, selected: 1 });
      const tabListItem = screen.getByText('Second');
      fireEvent.click(tabListItem);
      expect(setSelected).toHaveBeenCalled();
    });

    test(`renders "${tabsClassName}" to the tabs classList`, () => {
      renderTabs({
        setSelected,
        selected: 1,
        className: tabsClassName,
      });

      const tabs = screen.getByTestId(tabsTestId);
      expect(tabs.classList.contains(tabsClassName)).toBe(true);
    });

    test(`renders component inside of a React Element/HTML tag based on as prop`, () => {
      renderTabs({
        setSelected,
        selected: 1,
        as: 'a',
      });

      const tabListItem = screen.getByText('First');
      expect(tabListItem.tagName.toLowerCase()).toBe('a');
    });

    test('renders correct number of elements in the tablist', () => {
      renderTabs({
        setSelected,
        selected: 1,
      });

      const container = screen.getByTestId(tabsTestId);
      expect(container.querySelectorAll('[role="tab"]').length).toBe(3);
    });

    test('renders only one tabpanel at a time', () => {
      renderTabs({
        setSelected,
        selected: 1,
      });

      const container = screen.getByTestId(tabsTestId);
      expect(container.querySelectorAll('[role="tabpanel"]').length).toBe(1);
    });

    test('selected tab is active on first render', () => {
      renderTabs({ setSelected, selected: 1 });
      const activeTab = screen.getByText('Content 2');
      expect(activeTab).toBeVisible();
    });

    test('clicking a tab does not change the active tab', () => {
      renderTabs({ setSelected, selected: 1 });
      const tab = screen.getByText('First');
      fireEvent.click(tab);

      const secondContent = screen.getByText('Content 2');
      expect(secondContent).toBeInTheDocument();
    });

    test('keyboard nav is not supported', () => {
      renderTabs({ setSelected, selected: 1 });
      const activeTabListItem = screen.getByText('Second');
      const activeTab = screen.getByText('Content 2');
      fireEvent.keyDown(activeTabListItem, { key: 'ArrowLeft', keyCode: 37 });
      expect(activeTab).toBeVisible();
    });
  });

  describe('when uncontrolled', () => {
    test('default tab is visible by default', () => {
      renderTabs({}, { default: true });
      const defaultTabContent = screen.getByText('Content 1');
      expect(defaultTabContent).toBeInTheDocument();
    });

    test('clicking a tab changes the activeTab', () => {
      renderTabs({}, { default: true });
      const defaultTabContent = screen.getByText('Content 1');
      expect(defaultTabContent).toBeInTheDocument();

      const newActiveTabTitle = screen.getByText('Second');
      fireEvent.click(newActiveTabTitle);
      expect(screen.getByText('Content 2')).toBeInTheDocument();

      const container = screen.getByTestId(tabsTestId);
      expect(container.querySelectorAll('[role="tabpanel"]').length).toBe(1);
    });

    test('keyboard navigation is supported', () => {
      renderTabs({}, { default: true });
      const tabs = screen.getByRole('tablist');
      const activeTabList = screen.getByText('First');

      // Focus on tablist
      userEvent.click(tabs);
      expect(tabs).toHaveFocus();

      // Tab to active TabList
      userEvent.tab();
      expect(activeTabList).toHaveFocus();

      // Keyboard navigate between tabs
      fireEvent.keyDown(activeTabList, {
        key: 'ArrowRight',
        keyCode: 39,
      });
      expect(screen.getByText('Second')).toHaveFocus();
    });

    test('keyboard navigation skips disabled tabs', () => {
      render(
        <Tabs data-testid={tabsTestId}>
          <Tab default name="First">
            Content 1
          </Tab>
          <Tab disabled name="Second">
            Content 2
          </Tab>
          <Tab name="Third"> Content 3</Tab>
        </Tabs>,
      );

      const tabs = screen.getByRole('tablist');
      const activeTabList = screen.getByText('First');

      // Focus on tablist
      userEvent.click(tabs);
      expect(tabs).toHaveFocus();

      // Tab to active TabList
      userEvent.tab();
      expect(activeTabList).toHaveFocus();

      // Keyboard navigate between tabs
      fireEvent.keyDown(activeTabList, {
        key: 'ArrowRight',
        keyCode: 39,
      });
      expect(screen.getByText('Third')).toHaveFocus();
    });

    test('keyboard nav does not work if modifier key is also pressed', () => {
      renderTabs({}, { default: true });
      const activeTabListItem = screen.getByText('First');

      fireEvent.keyDown(activeTabListItem, {
        key: 'ArrowRight',
        keyCode: 39,
        metaKey: true,
      });

      const activeTab = screen.getByText('Content 1');
      expect(activeTab).toBeVisible();
    });
  });

  describe('when there are two sets of tabs on the page', () => {
    beforeEach(() => {
      render(
        <>
          <Tabs>
            <Tab default name="Tab Set 1-A">
              Content 1-A
            </Tab>
            <Tab name="Tab Set 1-B">Content 1-B</Tab>
          </Tabs>
          <Tabs>
            <Tab default name="Tab Set 2-A">
              Content 2-A
            </Tab>
            <Tab name="Tab Set 2-B">Content 2-B</Tab>
          </Tabs>
        </>,
      );
    });

    test('only the current Tabs set is toggled when the arrow keys are pressed', () => {
      const tabs = screen.getAllByRole('tablist')[0];
      const activeTabList = screen.getByText('Tab Set 1-A');

      // Focus on tablist
      userEvent.click(tabs);
      expect(tabs).toHaveFocus();

      // Tab to active TabList
      userEvent.tab();
      expect(activeTabList).toHaveFocus();

      fireEvent.keyDown(activeTabList, {
        key: 'ArrowRight',
        keyCode: 39,
      });

      expect(screen.getByText('Tab Set 1-B')).toHaveFocus();
    });
  });
});
