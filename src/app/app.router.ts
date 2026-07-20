import { RouterComponent, defineRouter } from 'rasengan';
import Home from '@/app/home.page';
import Projects from '@/app/projects.page';
import Publications from '@/app/publications.page';

class AppRouter extends RouterComponent {}

export default defineRouter({
  pages: [Home, Projects, Publications],
})(AppRouter);
