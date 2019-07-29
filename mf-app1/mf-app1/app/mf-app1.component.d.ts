import { OnInit } from '@angular/core';
import { MfApp1Service } from "./services/mf-app1.service";
export declare class MfApp1Component implements OnInit {
    private mfApp1Service;
    html: any;
    constructor(mfApp1Service: MfApp1Service);
    ngOnInit(): void;
}
