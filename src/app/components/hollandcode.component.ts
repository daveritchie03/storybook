import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-hollandcode',
    template: `
    <div class="margin holland-code card border border-radius">
        <div class="flex-display">
            <h3>{{title}}</h3>
            <div class="ml-auto">
                <img src="/assets/lock.png">
            </div>
        </div>
        <div>
            <p>{{data}}</p>
        </div>
        <div class="mt-3">
            <p class="text-muted">{{footer}}</p>
        </div>
    </div>
    `
})


export class HollandCodeComponent implements OnInit {

    @Input() title: any;
    @Input() data: any;
    @Input() footer: any;

    ngOnInit() {
    }
}