import { type Ref, ref, watch } from 'vue';

const usePrevious = <T>(state: Ref<T> | (() => T)) => {
  const previous = ref<T>();

  watch(state, (_, oldVal) => {
    previous.value = oldVal;
  });

  return previous;
};

export default usePrevious;
 