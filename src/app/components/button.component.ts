import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-button',
    template: `
    <div class="margin" *ngFor="let i of buttons">
        <button class="{{i.class}} border-radius flex-display"><img *ngIf="i.img" class="mr-1" src="{{i.img_url}}" width="24px"><span>{{i.title}}</span></button>
    </div>
    `,
})
export class ButtonComponent implements OnInit {

    @Input() buttons: any;

    ngOnInit(): void {
    }

}

