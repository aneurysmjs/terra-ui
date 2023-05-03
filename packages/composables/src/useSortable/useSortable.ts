import { computed, type ComputedRef } from 'vue';

const useSortable = <T>(dataSource: ComputedRef<T[]>, sorter: (a: T, b: T) => number) => {
  const sortedData = computed(() => {
    return dataSource.value.sort(sorter);
  });

  return sortedData;
};

export default useSortable;
