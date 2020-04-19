import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanDeactivateGuard } from 'src/app/can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateGuard {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
            private _route: ActivatedRoute,
            private router: Router) { }

  ngOnInit() {

    // accessign query params and fragments Using snapshot approach
    console.log(this._route.snapshot.queryParams);
    console.log(this._route.snapshot.fragment)

    // using observable approach
    this._route.queryParams.subscribe(
      (data: Params) => {
        this.allowEdit = data['allowEdit'] === 'true' ? true : false; 
        console.log( "Observable approach: ", data);
      }
    );
    this._route.fragment.subscribe(
      (data) => {
        console.log("Observable approach: ", data)
      }
    );
    const id = +this._route.snapshot.params['id']
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, 
      {name: this.serverName, status: this.serverStatus}
    );
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this._route});
  }

  canDeactivate() :Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName !== this.server.name  || this.serverStatus !== this.server.status) &&  !this.changesSaved){
      return confirm("Discard Changes ?");
    }else{
      return true
    }
  }

}
