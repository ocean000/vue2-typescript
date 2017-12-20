import urls from './demo.url';
import { Service, IHttp } from '../../libs/index';
/*import confTool from '../../libs/implements/configs/config.tool';*/

export default class DemoApi {

    @Service('http')
    private http: IHttp;

    getData(): Promise<any> {
        return this.http.get('http://www.baidu.com');
    }
}
