import { Component, Input, OnInit } from '@angular/core';
import { text } from '@storybook/addon-knobs';

@Component({
    selector: 'app-button',
    template: `
    <div class="margin" *ngFor="let i of buttons;let j=index">
        <button class="{{i.class}} border-radius flex-display"><img *ngIf="i.img" class="mr-1" src="{{i.img_url}}" width="24px"><span>{{i.title}}</span></button>
    </div>
    `,
})
export class ButtonComponent implements OnInit {

    @Input() buttons: any;

    ngOnInit(): void {
    }
}

