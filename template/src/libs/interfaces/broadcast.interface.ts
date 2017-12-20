export default interface IBroadcast {
    /**
     * 广播信息
     * @param name 信息名称
     * @param params 信息参数
     * @param context 上下文
     */
    send(name: string, params: any, context: any): void;

    /**
     * 监听信息
     * @param name 信息名称
     * @param func 监听方法
     * @param context 上下文
     */
    receive(name: string, func: Function, context: any): void;
}
