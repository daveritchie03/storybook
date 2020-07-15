import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search',
    template: `
    <div class="margin">
        <input type="search" placeholder="Search" id="#search">
    </div>
    `
})

export class SearchComponent implements OnInit {
    ngOnInit(): void {
    }
}