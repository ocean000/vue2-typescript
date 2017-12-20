import { Service } from '../index';
import { IRouter } from '../../interfaces/index';
import RouterTool from './router.tool';

export default class RouterImpl implements IRouter {

    @Service('routerTool')
    private tool: RouterTool;

    private routerParams: Object = {};

    /**
     * 实现跳转页面接口，不覆盖历史纪录
     * @param url 路由地址
     * @param params 路由参数
     * @param context 上下文
     */
    goPage(url: string, params: any, context: any): void {
        if(!context) {
            return;
        }
        if(url.substr(0, 1) === '/') {
            url = url.substr(1);
        }
        context.$router.push('/' + url, () => {
            let nextRouter = this.tool.getNextRouter();
            if(nextRouter && nextRouter !== null && !this.tool.checkOriginRouter(nextRouter)) {
                this.setParams(nextRouter.path, params, context);
            }
        });
    }

    /**
     * 实现回退页面接口
     * @param params 路由参数
     * @param context 上下文
     */
    goBack(params: any, context: any): void {
        if(!context) {
            return;
        }
        context.$router.go(-1);
    }

    /**
     * 跳转页面，覆盖历史记录
     * @param url 页面地址
     * @param context 上下文
     */
    replace(url: string, params: any, context: any): void {
        if(!context) {
            return;
        }
        if(url.substr(0, 1) === '/') {
            url = url.substr(1);
        }
        context.$router.replace('/' + url, () => {
            let nextRouter = this.tool.getNextRouter();
            if(nextRouter && nextRouter !== null && !this.tool.checkOriginRouter(nextRouter)) {
                this.setParams(nextRouter.path, params, context);
            }
        });
    }

    /**
     * 实现获取路由参数接口
     * @param context 上下文
     * @returns 路由参数对象
     */
    getParams(context: any): any {
        if(!context) {
            return {};
        }
        let currentRouter = this.tool.getCurrentRouter();
        if(!currentRouter || currentRouter === null) {
            return {};
        }
        if(this.tool.checkOriginRouter(currentRouter)) {
            return context.$route.params;
        }
        else {
            let currentRouter = this.tool.getCurrentRouter();
            if (this.routerParams.hasOwnProperty(currentRouter.path)) {
                return this.routerParams[currentRouter.path];
            }
            else {
                return {};
            }
        }
    }

    /**
     * 设置路由参数
     * @param name 页面名称
     * @param param 路由参数
     * @param context vue实例上下文
     */
    setParams(name: string, param: any, context: any): void {
        if (!name || name === '' || !param || param === '' || !context) {
            return;
        }
        this.routerParams[name] = param;
    }

}
