import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'my-home',
    template: `
    <div class="flex flex-1">
        <span class="welcome">知识点一二三四五六七八九十</span>
    </div>
    `,
    styles: []
})
export class HomeComponent implements OnInit {
    private host = location.host;
    private welcome = '../assets/images/welcome.jpg';
    constructor() { }

    ngOnInit() { }
}

export class Product {
    constructor(public id: number, public name: string) { }
}