import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-careerprofile',
    template: `
    <div class="card margin careerprofile bg-pink text-white border-radius">
        <div style="margin-bottom: 2%">
            <h4>Career Profile</h4>
        </div>
        <div>
            <table>
                <tr *ngFor="let i of data">
                    <td>{{i.number}}</td>
                    <td>{{i.title}}</td>
                </tr>
            </table>
        </div>
    </div>
    `
})


export class CareerProfileComponent implements OnInit {

    @Input() data: any;

    ngOnInit() {
    }
}