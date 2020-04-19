import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

import { ServersService } from "./servers/servers.service";


interface ServerItems {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<ServerItems> {

    constructor(private serverService: ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServerItems> | Promise<ServerItems> | ServerItems {
        return this.serverService.getServer(+route.params['id']);
        // we have used snapshot method since the route will be rendered everytime, we do not have to subscribe using Observable
    }
}