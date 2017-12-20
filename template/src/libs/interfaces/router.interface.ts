export default interface IRouter {
    /**
     * 跳转页面接口，不覆盖历史纪录
     * @param url 路由地址
     * @param params 路由参数
     * @param context 上下文
     */
    goPage(url: string, params: any, context: any): void;

    /**
     * 跳转页面，覆盖历史记录
     * @param url 页面地址
     * @param context 上下文
     */
    replace(url: string, params: any, context: any): void;

    /**
     * 回退页面接口
     * @param params 路由参数
     * @param context 上下文
     */
    goBack(params: any, context: any): void;

    /**
     * 获取路由参数接口
     * @param context 上下文
     * @returns 路由参数对象
     */
    getParams(context: any): any;

    /**
     * 设置路由参数
     * @param name 页面名称
     * @param param 路由参数
     * @param context 上下文
     */
    setParams(name: string, param: any, context: any): void;
}
