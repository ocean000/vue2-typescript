<template>
    <div style="position: absolute; top: 0">
        <div>{{dataList}}</div>
        <button @click="btnClick">click</button>
    </div>
</template>

<script lang="ts">
    import Base from '../base.vue';
    import { Component, Service } from '../../libs/index';
    import { DemoApi } from '../../apis/index';

    @Component
    export default class DemoPage extends Base {

        @Service('demoApi')
        private api: DemoApi;

        dataList: string = 'fasdf';

        btnClick() {
            this.api.getData().then(() => {

            })
        }
    }
</script>

