import {createRouteForRouteConfig,createRoute} from '../src/route';
import {selectInterpolatorStackConfig} from '../src/route/stackConfig'
import {selectInterpolatorCreate} from '../src/route/api/transitionConfig';
import {
    forBottomPull,forBottomOver,forLeftOver,forLeftPull,forLeftPush,forRightOver,forRightPull,forRightPush,
    forLeftTopOver,forLeftTopPull,forLeftTopPush,forRightTopOver,forRightTopPull,forRightTopPush
} from '../src/route/api/screenInterpolator';
import Home from './pages/Home';
import Second from './pages/Second';

var routeConfig = {
    Home:{
        screen:Home,
        page:'/home'
    },
    Second:{
        screen:Second,
        page:'/second'
    }
}
//const AppRouter = createRouteForRouteConfig(routeConfig);
const AppRouter = createRoute(routeConfig,selectInterpolatorStackConfig(forLeftTopPull));
export default AppRouter;