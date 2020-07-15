import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-missioncontrol',
    template: `
    <div class="margin bg-purple missioncontrol padding-y">
        <div class="" *ngFor="let i of buttons;let j=index;">
            <button class="padding-left text-light-purple bg-purple margin-y flex-display" [ngClass]="i.state ? 'active' : ''" (click)="setState(j)"><span class="mr-1"><img src="/assets/tune.png"></span>{{i.title}}</button>
        </div>
    </div>
    `
})

export class MissionControlComponent implements OnInit {

    @Input() buttons: any;
    @Output() state: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
    }

    setState(index) {
        for (let i = 0; i < this.buttons.length; i++) {
            if (i === index) {
                this.buttons[i].state = true;
            }
            else {
                this.buttons[i].state = false;
            }
        }
    }
}