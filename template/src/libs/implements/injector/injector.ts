import {IInjector} from '../../interfaces/index';

export default class Injector implements IInjector {
    private factories: Map<string, any> = new Map();

    /**
     * 初始化注入对象
     * @param {Array<any>} config 对象配置
     */
    init(configs: Array<any>) {
        if (!configs || configs === null) {
            return;
        }
        configs.forEach((item: any, i: number) => {
            if (this.factories.has(item.id)) {
                throw `系统存在多项id为${item.id}的配置`;
            }
            if (item.hasOwnProperty('type')) {
                this.factories.set(item.id, {
                    type: item.type,
                    instance: null
                });
            }
            else if (item.hasOwnProperty('value')) {
                this.factories.set(item.id, {
                    type: typeof(item.value),
                    instance: item.value
                });
            }
        });
    }

    /**
     * 获取注入的类型
     * @param {string} id 对象id
     * @returns {any} 实例类型
     */
    getType(id: string): any {
        let fa = this.factories.get(id);
        if (!fa || fa === null) {
            return null;
        }
        return fa.type;
    }

    /**
     * 获取注入对象
     * @param {string} id 对象id
     * @returns {any} 实例对象
     */
    get(id: string): any {
        let fa = this.factories.get(id);
        if (!fa || fa === null) {
            return null;
        }
        if (fa.hasOwnProperty('type') && fa.instance === null) {
            fa.instance = new fa.type();
        }
        return fa.instance;

    }
}

