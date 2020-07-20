import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    template: `
    <div class="margin" *ngFor="let i of buttons;let j=index">
        <button (click)="click(j)" class="{{i.class}} border-radius flex-display"><img *ngIf="i.img" class="mr-1" src="{{i.img_url}}" width="24px"><span>{{i.title}}</span></button>
    </div>
    `,
})
export class ButtonComponent implements OnInit {

    @Input() buttons: any;
    @Output() onClick: EventEmitter<any> = new EventEmitter;

    ngOnInit(): void {
    }

    click(index) {
        this.onClick.emit(this.buttons[index].title);
    }
}

