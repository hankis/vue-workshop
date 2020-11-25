import Loader from '@/components/Loader.vue';
import ErrorPage from '@/components/ErrorPage.vue';

export default () => ({
  component: import('@/components/WeatherCard.vue'),
  loading: Loader,
  error: ErrorPage,
  timeout: 1000,
});
