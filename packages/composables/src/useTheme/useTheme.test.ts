import { describe, it, jest } from '@jest/globals';
import { mount } from '@vue/test-utils';
import useTheme from './useTheme';

type MockMatchMedia = (query: string) => Partial<ReturnType<typeof window.matchMedia>>;

describe('useTheme', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn<MockMatchMedia>().mockImplementation((query) => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
      })),
    });
  });

  it('sets the theme to dark when local storage is not set and prefers dark mode', () => {
    localStorage.clear();
    const wrapper = mount({
      template: '<div></div>',
      setup() {
        const [theme] = useTheme();
        return { theme };
      },
    });
    expect(wrapper.vm.theme).toBe('dark');
  });

  it('sets the theme to light when local storage is not set and does not prefer dark mode', () => {
    localStorage.clear();
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn<MockMatchMedia>().mockImplementation((query) => ({
        matches: query !== '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        // dispatchEvent: jest.fn(),
      })),
    });
    const wrapper = mount({
      template: '<div></div>',
      setup() {
        const [theme] = useTheme();
        return { theme };
      },
    });
    expect(wrapper.vm.theme).toBe('light');
  });

  it('sets the theme to the value in local storage when set', () => {
    localStorage.setItem('theme', 'light');
    const wrapper = mount({
      template: '<div></div>',
      setup() {
        const [theme] = useTheme();
        return { theme };
      },
    });
    expect(wrapper.vm.theme).toBe('light');
  });

  it('toggles the theme from light to dark', async () => {
    localStorage.setItem('theme', 'light');
    const wrapper = mount({
      template: '<button @click="toggleTheme"></button>',
      setup() {
        const [theme, toggleTheme] = useTheme();
        return { theme, toggleTheme };
      },
    });
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(wrapper.vm.theme).toBe('dark');
  });

  it('toggles the theme from dark to light', async () => {
    localStorage.setItem('theme', 'dark');
    const wrapper = mount({
      template: '<button @click="toggleTheme"></button>',
      setup() {
        const [theme, toggleTheme] = useTheme();
        return { theme, toggleTheme };
      },
    });
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(localStorage.getItem('theme')).toBe('light');
    expect(wrapper.vm.theme).toBe('light');
  });
});
