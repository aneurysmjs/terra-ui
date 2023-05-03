<template>
  <button
    role="switch"
    data-testid="toggle"
    :aria-checked="isOn"
    :class="['switch', isOn ? 'switch--on' : 'switch--off']"
    @click="toggle"
  >
    <font-awesome-icon
      :v-if="isOn"
      data-testid="icon-on"
      icon="fa-moon"
      class="switch__icon switch__icon--left"
    />
    <font-awesome-icon
      :v-else="!isOn"
      data-testid="icon-off"
      icon="fa-sun"
      class="switch__icon switch__icon--right"
    />
    <span className="sr-only">switch</span>
    <span
      aria-hidden="true"
      :class="['switch__toggler', isOn ? 'switch__toggler--on' : 'switch__toggler--off']"
    />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  isOn: boolean;
  toggle: () => void;
}>();

const isOn = computed(() => props.isOn);
</script>

<style>
.switch {
  @apply border-2 border-transparent rounded-full cursor-pointer;
  @apply relative inline-flex flex-shrink-0;
  @apply h-6 w-12;
  @apply transition-colors ease-in-out duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400;
  @apply dark:focus:ring-sky-400;
}

.switch--on {
  @apply bg-cyan-500;
  @apply dark:bg-sky-400;
}

.switch--off {
  @apply bg-gray-200;
}

.switch__toggler {
  @apply bg-white shadow inline-block;
  @apply rounded-full ring-0 pointer-events-none;
  @apply h-5 w-5;
  @apply transform transition ease-in-out duration-200;
}

.switch__toggler--on {
  @apply translate-x-6;
}

.switch__toggler--off {
  @apply translate-x-0;
}

.switch__icon {
  @apply absolute top-0.5;
}

.switch__icon--left {
  @apply left-0.5;
}

.switch__icon--right {
  @apply right-0.5;
}
</style>
