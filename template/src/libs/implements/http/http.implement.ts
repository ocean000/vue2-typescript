import { IHttp } from '../../interfaces/index'
import ajax from './ajax'
import qs = require('qs')
import jp = require('jsonp')

export default class HttpImpl implements IHttp {
    /**
     * get请求
     * @param url 请求地址
     * @param data 请求参数
     * @param context 上下文
     * @returns {Promise} 返回Promise对象
     */
    get(url: string, data: any, context: any): Promise<any> {
        let re: any = ajax.get(url, {
            params: data
        });
        return re as Promise<any>;
    }

    /**
     * post请求
     * @param url 请求地址
     * @param type 请求的参数方式，如：formData, raw, x-www-form-urlencoded, json
     * @param data 请求参数
     * @param context 上下文
     * @returns {Promise} 返回Promise对象
     */
    post(url: string, type: string, data: any, context: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {

        });
    }

    /**
     * post请求, 参数方式为x-www-form-urlencoded
     * @param url 请求地址
     * @param data 请求参数
     * @param context 上下文
     * @returns {Promise} 返回Promise对象
     */
    postFormUrlEncoded(url: string, data: any, context: any): Promise<any> {
        let re: any = ajax.post(url, qs.stringify(data), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        });
        return re as Promise<any>;
    }

    /**
     * post请求, 参数方式为json
     * @param url 请求地址
     * @param data 请求参数
     * @param context 上下文
     * @returns {Promise} 返回Promise对象
     */
    postJson(url: string, data: any, context: any): Promise<any> {
        let re: any = ajax.post(url, data, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        return re as Promise<any>;
    }

    /**
     * post请求, 参数方式为json形式的raw
     * @param url 请求地址
     * @param data 请求参数
     * @param context 上下文
     * @returns {Promise} 返回Promise对象
     */
    postRawJson(url: string, data: any, context: any): Promise<any> {
        let re: any = ajax.post(url, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        return re as Promise<any>;
    }

    /**
     * post请求, 参数方式为FormData
     * @param url 请求地址
     * @param data 请求参数
     * @param context 上下文
     * @returns {Promise} 返回Promise对象
     */
    postFormData(url: string, data: any, context: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {

        });
    }

    /**
     * 以jsonp方式请求
     * @param url 请求地址
     * @param data 请求参数
     * @param context 上下文
     * @returns {Promise} 返回Promise对象
     */
    jsonp(url: string, data: any, context: any): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!url.includes('?')) {
                url = url + '?';
            }
            else if (url.substr(-1) !== '&') {
                url = url + '&';
            }
            jp(url + qs.stringify(data), (err: any, data: any) => {
                if (err) {
                    reject(err.message);
                } else {
                    resolve(data);
                }
            });
        });
    }
}

