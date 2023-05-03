import { computed, type ComputedRef, type Ref } from 'vue';

const useFilterable = <T>(
  dataSource: ComputedRef<T[]>,
  filterVal: Ref<string>,
  predicate: (item: T, filter: string) => boolean,
) => {
  const filteredData = computed(() => {
    return dataSource.value.filter((item) => predicate(item, filterVal.value));
  });

  return filteredData;
};

export default useFilterable;
