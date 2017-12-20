import { IStorage } from '../../interfaces/index';

export default class StorageImpl implements IStorage {
    private storage: Map<string, any> = new Map();

    /**
     * 获取信息接口
     * @param key 信息的键
     * @param context 上下文
     * @returns {any} 可返回任意类型
     */
    getData(key: string, context: any): any {
        return this.storage.get(key);
    }

    /**
     * 实现setData接口
     * @param key 键
     * @param value 值
     * @param context 上下文
     */
    setData(key: string, value: any, context: any): void {
        this.storage.set(key, value);
    }

    /**
     * 实现删除信息接口接口
     * @param key 信息的键
     * @param context 上下文
     * @returns {any} 返回被删除的对象
     */
    delData(key: string, context: any): any {
        let obj: any = this.getData(key, context);
        let re: boolean = this.storage.delete(key);
        if(re) {
            return obj;
        }
    }
}
