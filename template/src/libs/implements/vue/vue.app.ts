import Vue from 'vue';
import VueRouter from './vue.router';
import { Injector } from '../index';
import { libsTypConfigs } from '../../type-configs/index';

export default class VueApp extends Vue {
    constructor(typeConfigs: Array<any>, routeConfig: Array<any>, title: string, render: any) {
        Injector.init([...typeConfigs, ...libsTypConfigs]);
        super({
            router: new VueRouter(routeConfig, title),
            render: render
        })
    }
}
