export default interface IInjector {
    /**
     * 初始化注入对象
     * @param {Array<any>} config 对象配置
     */
    init(config: Array<any>): void;

    /**
     * 获取注入的类型
     * @param {string} id 对象id
     * @returns {any} 实例类型
     */
    getType(id: string): any;

    /**
     * 获取注入对象
     * @param {string} id 对象id
     * @returns {any} 实例对象
     */
    get(id: string): any;
}
