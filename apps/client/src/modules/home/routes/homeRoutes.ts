const Home = () => import('@/modules/home/views/HomeView.vue');

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];
