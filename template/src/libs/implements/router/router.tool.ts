export default class RouterTool {
    // 主页面
    private mainPage: string = '';
    // 默认标题
    private defaultTitle: string = '';
    // 当前用路由
    private currentRouter: any = null;
    // 前路由
    private preRouter: any = null;
    // 下一路由
    private nextRouter: any = null;

    /**
     * 获取默认页面
     * @returns 默认页面名称
     */
    getMainPage(): string {
        return this.mainPage;
    }

    /**
     * 设置默认页面
     * @param mainPage 主页
     */
    setMainPage(value: string): void {
        if (value.substr(0, 1) === '/') {
            value = value.substr(1);
        }
        this.mainPage = value;
    }

    /**
     * 获取默认标题
     */
    getDefaultTitle(): string {
        return this.defaultTitle;
    }

    /**
     * 设置默认标题
     */
    setDefaultTitle(value: string): void {
        this.defaultTitle = value;
    }

    /**
     * 获取当前路由
     * @param context vue上下文
     * @returns 路由对象
     */
    getCurrentRouter(): any {
       /* if (!context) {
            return null;
        }
        currentRouter = context.$route;*/
        return this.currentRouter;
    }

    /**
     * 设置当前路由
     * @param context vue上下文
     * @returns 路由对象
     */
    setCurrentRouter(router: any): void {
        this.currentRouter = router;
    }

    /**
     * 获取前路由
     * @returns 路由对象
     */
    getPreRouter(): any {
        return this.preRouter;
    }

    /**
     * 设置前路由
     */
    setPreRouter(router: any): void {
        this.preRouter = router;
    }

    /**
     * 获取下一路由
     * @returns 路由对象
     */
    getNextRouter() {
        return this.nextRouter;
    }

    /**
     * 设置前一路由
     */
    setNextRouter(router: any): void {
        this.nextRouter = router;
    }

    /**
     * 获取已去除参数部分的路由路径
     */
    getPath(router: any): string {
        if (!router || router === null) {
            return '';
        }
        let path: string = router.path;
        if (this.checkOriginRouter(router)) {
            let paths: Array<string> = router.path.substr(1).split('/');
            let paramsKeys: Array<any> = Object.keys(router.params);
            paramsKeys.forEach((item, i) => {
                paths.pop();
            });
            paths.length === 1 ? path = paths[0] : path = paths.join('/');
        }
        return path;
    }

    /**
     * 根据路由配置中的'name'值检测是否为默认页面
     */
    checkIsMainPage(routerName: string): boolean {
        let path: string = routerName;
        let mainPage: string = this.getMainPage();
        let names: Array<string> = routerName.split('/');
        let mains: Array<string> = mainPage.split('/');
        if (names.length > 1 && mains.length > 1) {
            let pages: Array<string> = [];
            names.forEach((it, j) => {
                if (!it.includes(':')) {
                    pages.push(it);
                }
                else {
                    mains.pop();
                }
            });
            pages.length === 1 ? path = pages[0] : path = pages.join('/');
            mains.length === 1 ? mainPage = mains[0] : mainPage = mains.join('/');
        }
        return mainPage === path;
    }

    /**
     * 判断路由是否为'xxxx/:xx/:xx'的方式
     */
    checkOriginRouter(router: any): boolean {
        if (!router || router === null) {
            return false;
        }
        let params: any = router.params;
        let paramsKeys: Array<any> = Object.keys(params);
        if (paramsKeys.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
