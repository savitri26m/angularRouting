import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
        private _aRoute: ActivatedRoute,
        private _router: Router) { }

  ngOnInit() {

    // const id = +this._aRoute.snapshot.params['id'];
    // console.log("type of: ", typeof id);
    // this.server = this.serversService.getServer(2);
    // this._aRoute.params.subscribe(
    //   (data: Params) => {
    //     this.server = this.serversService.getServer(+data['id']);
    //   }
    // )
    

    // the data in the resolver is stored in the Data, which is provided by angular/router;
    // Using resolver to resolve the data
      this._aRoute.data.subscribe(
        (data: Data) => {
          this.server = data['serverR'];  //serverR is name of property of resolver service
        }
      )
  }

  editServer(){
    this._router.navigate(['edit'], {relativeTo: this._aRoute, queryParamsHandling: 'preserve' });
  }

}
