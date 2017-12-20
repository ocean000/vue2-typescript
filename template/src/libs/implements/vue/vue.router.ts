import Vue from 'vue';
import RouterPlugin from 'vue-router';
import { Injector } from '../index';
import RouterTool from '../router/router.tool';

Vue.use(RouterPlugin);
export { RouterPlugin };
export default class VueRouter extends RouterPlugin {
    constructor(routeConfigs: Array<any>, title: string) {
        if(!routeConfigs || routeConfigs.length <= 0) {
            return;
        }

        let tool: RouterTool = Injector.get('routerTool');

        let routes: Array<any> = [];
        routeConfigs.forEach((item, i) => {
            if (!item.title || item.title === '') {
                item.title = title;
                tool.setDefaultTitle(title);
            }
            routes.push({
                path: '/' + item.path,
                component: item.page,
                meta: {
                    title: item.title
                },
                beforeEnter(to: any, from: any, next: any) {
                    tool.setPreRouter(from);
                    tool.setNextRouter(to);
                    next();
                }
            });
        });

        super({
            // mode: 'history',
            routes
        });

        // 在路由导航之后更新当前页面标题
        this.afterEach(route => {
            tool.setCurrentRouter(route);
            // 从路由的元信息中获取 title 属性
            if (route.meta.title) {
                document.title = route.meta.title;
                // 如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
                if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                    const hackIframe: any = document.createElement('iframe');
                    hackIframe.style.display = 'none';
                    hackIframe.src = '//m.baidu.com/favicon.ico';
                    document.body.appendChild(hackIframe);
                    setTimeout(_ => {
                        document.body.removeChild(hackIframe);
                    }, 300)
                }
            }
        });
    }
}
