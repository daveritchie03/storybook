import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-search',
    template: `
    <div class="margin">
        <input type="search" placeholder="Search" id="#search" name="search" [(ngModel)]="search_text">
    </div>
    `
})

export class SearchComponent implements OnInit {

    @Input() search_text: any;
    ngOnInit(): void {
    }
}