import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-missioncontrol',
    template: `
    <div class="margin bg-purple missioncontrol padding-y">
        <div class="" *ngFor="let i of buttons;let j=index;">
            <button class="padding-left text-light-purple bg-purple margin-y flex-display" id="{{j}}" [ngClass]="i.state ? 'active' : ''" (click)="setState(j)"><span class="mr-1"><img src="/assets/tune.png"></span>{{i.title}}</button>
        </div>
    </div>
    `
})

export class MissionControlComponent implements OnInit {

    @Input() buttons: any;
    class = 'padding-left text-light-purple bg-purple margin-y flex-display';

    ngOnInit() {
    }

    setState(index) {
        for (let i = 0; i < this.buttons.length; i++) {
            if (i === index) {
                this.buttons[i].state = true;
                document.getElementById(index).className = this.class + " active";
                console.log('if ', document.getElementById(index).className);
            }
            else {
                this.buttons[i].state = false;
                document.getElementById(index).className = this.class;
                console.log('else ', document.getElementById(index).className);
            }
        }
        console.log(index, this.buttons[index].state);
    }
}