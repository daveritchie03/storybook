import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-hollandcode',
    template: `
    <div class="margin holland-code card border border-radius">
        <div style="display: flex; margin-bottom: 2%; align-items: center;">
            <h3>Holland Code Assessment</h3>
            <div class="ml-auto">
                <img src="/assets/lock.png">
            </div>
        </div>
        <div>
            <p>{{data}}</p>
        </div>
        <div style="margin-top: 3%;">
            <p class="text-muted">{{footer}}</p>
        </div>
    </div>
    `
})


export class HollandCodeComponent implements OnInit {

    @Input() data: any;
    @Input() footer: any;

    ngOnInit() {
    }
}