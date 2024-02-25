//Header Layout
import HeaderOnly from '~/components/Layout/HeaderOnly';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
]; // không đăng nhập thì vào đây

const privateRoutes = []; // đăng nhập / ko thì vào login

export { publicRoutes, privateRoutes };
