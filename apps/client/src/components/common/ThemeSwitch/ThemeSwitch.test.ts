import { describe, it, jest } from '@jest/globals';
import { mount } from '@vue/test-utils';

import { byTestId } from '@/utils/testUtils';
import ThemeSwitch from './ThemeSwitch.vue';

const mockToggle = jest.fn();

interface Props {
  isOn: boolean;
}

const makeWrapper = ({ isOn }: Props) =>
  mount(ThemeSwitch, {
    props: {
      isOn,
      toggle: mockToggle,
    },
    global: {
      stubs: {
        'font-awesome-icon': {
          template: '<span />',
        },
      },
    },
  });

describe('Overview', () => {
  it('shows elements when isOn is false', () => {
    const wrapper = makeWrapper({ isOn: false });

    expect(wrapper.classes()).toContain('switch--off');
    expect(wrapper.find(byTestId('icon-on')).attributes('v-if')).toBe('false');
    expect(wrapper.find(byTestId('icon-off')).attributes('v-else')).toBe('true');
  });

  it('shows elements when isOn is true', () => {
    const wrapper = makeWrapper({ isOn: true });

    expect(wrapper.classes()).toContain('switch--on');
    expect(wrapper.find(byTestId('icon-on')).attributes('v-if')).toBe('true');
    expect(wrapper.find(byTestId('icon-off')).attributes('v-else')).toBe('false');
  });
});
