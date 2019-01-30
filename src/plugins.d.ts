import Vue from 'vue';
import VueWait, { VueWaitInstance } from 'vue-wait';
import {
    HttpOptions,
    HttpHeaders,
    HttpResponse,
    $http,
    Resource,
    Http,
    $resource, ResourceMethod,
} from 'vue-resource/types/vue_resource';

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        http?: (HttpOptions & { headers?: HttpHeaders } & { [key: string]: any });
        wait?: VueWait;
    }
}

declare module 'vue/types/vue' {

    interface Vue {
        $http: {
            (options: HttpOptions): PromiseLike<HttpResponse>;
            get: $http;
            post: $http;
            put: $http;
            patch: $http;
            delete: $http;
            jsonp: $http;
        };
        $wait: VueWaitInstance,
        $resource: $resource;
    }

    interface VueConstructor {
        http: Http;
        resource: Resource;
    }
}
declare module 'vue-resource/types/vue_resource' {

    export interface ResourceMethods {
        get: ResourceMethod;
        save: ResourceMethod;
        query: ResourceMethod;
        update: ResourceMethod;
        remove: ResourceMethod;
        delete: ResourceMethod;
        [key: string]: ResourceMethod;
    }

}
