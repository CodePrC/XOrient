import { Component, OnInit } from '@angular/core';
import { Card } from './card.interface';
@Component({
    selector: 'skill-cards', // only name of the tag without brackets
    templateUrl: './card.component.html',
    
})

export class CardComponent implements OnInit{
    cards: Card[];
    
    constructor(){
    }

    ngOnInit(){
        this.cards = this.getCards();
    }

    getCards() : Card[] { // defining function only comes with some declarations
        return this.cards;
    }

    

}