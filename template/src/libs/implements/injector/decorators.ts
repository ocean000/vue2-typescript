import "reflect-metadata";
import { Injector } from "../index";

/**
 * 注入装饰器
 * @param {string} id 要注入的对象的id
 * @param {boolean} checkType 是否检测类型
 * @returns {any} 注入对象后的属性
 */
function Service(id: string, checkType: boolean = false): any {
    return function (target: any, propertyKey: string): any {
        return {
            enumerable: true,
            configurable: true,
            get() {
                if (checkType) {
                    let type = Injector.getType(id);
                    let t: any = Reflect.getMetadata("design:type", target, propertyKey);
                    if (t.toString() !== type) {
                        throw `被注入的属性类型与id为${id}的实例类型不对应`;
                    }
                }
                return Injector.get(id);
            }
        }
    };
}

export {
    Service
}
