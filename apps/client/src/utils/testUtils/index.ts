/* eslint-disable @typescript-eslint/no-explicit-any */
import { mount } from '@vue/test-utils';

export const byTestId = (id: string) => `[data-testid="${id}"]`;

type MountResult = ReturnType<typeof mount>;

interface WithSetup<T extends (...args: any[]) => any> extends MountResult {
  result: ReturnType<T>;
}

export const withSetup = <T extends (...args: any[]) => any>(
  composableCreator: T,
): WithSetup<T> => {
  let result = undefined as unknown as ReturnType<T>;

  const wrapper = mount({
    template: '<div></div>',
    setup() {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      result = composableCreator();

      return () => {}; // eslint-disable-line @typescript-eslint/no-empty-function
    },
  });

  return {
    result,
    ...wrapper,
  } as WithSetup<T>;
};
