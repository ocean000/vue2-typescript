import { IInjector } from '../../interfaces/index';
import Injector from './injector';

export default class InjectorProxy {
    private static ij: IInjector;

    /**
     * 初始化注入对象
     * @param {Array<any>} config 对象配置
     */
    static init(config: Array<any>): void {
        InjectorProxy.ij = new Injector();
        InjectorProxy.ij.init(config);
    }

    /**
     * 获取注入的类型
     * @param {string} id 对象id
     * @returns {any} 实例类型
     */
    static getType(id: string): any {
        return InjectorProxy.ij.getType(id);
    }

    /**
     * 获取注入对象
     * @param {string} id 对象id
     * @returns {any} 实例对象
     */
    static get(id: string): any {
        return InjectorProxy.ij.get(id);
    }
}
