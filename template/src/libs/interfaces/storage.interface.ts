export default interface IStorage {
    /**
     * 获取信息接口
     * @param key 信息的键
     * @param context 上下文
     * @returns {any} 可返回任意类型
     */
    getData(key: string, context: any): any;

    /**
     * 设置信息接口
     * @param key 信息的键
     * @param value 信息的值
     * @param context 上下文
     */
    setData(key: string, value: any, context: any): void;

    /**
     * 删除信息接口
     * @param key 信息的键
     * @param context 上下文
     * @returns {any} 返回被删除的对象
     */
    delData(key: string, context: any): any;
}
