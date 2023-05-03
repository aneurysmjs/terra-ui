<template>
  <div className="navbar navbar--fix-top">
    <div className="navbar__container">
      <button className="navbar__toggler" type="button"></button>
      <div className="navbar__actions">
        <div className="navbar__langs-dropdown">
          <!-- <LangsDropdown /> -->
        </div>

        <div className="navbar__theme">
          <ThemeSwitch :is-on="theme === 'dark'" :toggle="toggleTheme" />
        </div>
      </div>
      <div>{{ name }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ThemeSwitch from '@/components/common/ThemeSwitch/ThemeSwitch.vue';
import { useTheme } from '@terra-ui/composables';

const [theme, toggleTheme] = useTheme();

const name = 'Mineiros';
</script>

<style>
.navbar {
  @apply bg-theme
  container
  flex
  flex-wrap
  justify-between
  mx-auto;

  @apply px-4 py-2 lg:py-4;

  @apply border-b-2 border-b-gray-100  dark:border-slate-800;

  @media screen(lg) {
    @apply flex-row border-b-transparent border-b-0;
  }
}

.navbar--fix-top {
  @apply left-0 fixed right-0 top-0 z-50;
}

.navbar__container {
  @apply flex items-center justify-between w-full;
  @apply text-theme;

  flex-wrap: inherit;

  @media screen(lg) {
    @apply justify-end;
  }
}

.navbar-brand {
  @apply inline-block;

  @media screen(lg) {
    @apply hidden;
  }
}

.navbar-brand__title {
  @apply m-0 text-theme inline font-bold;
}

.navbar__toggler {
  @apply inline-block;

  @media screen(lg) {
    @apply hidden;
  }
}

.navbar__actions {
  @apply flex items-center justify-between;

  @media screen(lg) {
    @apply order-2;
  }
}

.navbar__navigation {
  @apply flex flex-col;

  @media screen(lg) {
    @apply flex-row;
  }
}

.navbar__collapse {
  @apply basis-full flex mx-1;

  @media screen(lg) {
    @apply basis-auto flex !important;
  }
}

.navbar__collapse--show {
  @apply flex !important;
}

.collapsable:not(.navbar__collapse--show) {
  @apply hidden;
}

.navbar__menu {
  @apply flex flex-col mx-1;

  @media screen(lg) {
    @apply flex-row;
  }
}

.navbar-link {
  @apply text-theme p-2;

  @media screen(lg) {
    @apply flex-row;
  }
}

.navbar-link--active {
  @apply font-medium text-theme;
}

.navbar__theme {
  @apply p-2 flex justify-evenly items-center;

  @media screen(lg) {
    text-align: initial;
  }
}

.navbar__switch-theme {
  @apply text-theme inline;

  @media screen(lg) {
    @apply hidden;
  }
}
</style>
