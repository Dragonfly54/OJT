import { Component, ElementRef, ViewChild } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { Appetizers } from 'src/app/shared/components/item-appetizers/appetizers';
import { APPETIZERS } from 'src/app/shared/components/item-appetizers/appetizers.data';
import { ColdDrinks } from 'src/app/shared/components/item-cold-drinks/cold-drinks';
import { COLDDRINKS } from 'src/app/shared/components/item-cold-drinks/coldDrinks.data';
import { HotDrinks } from 'src/app/shared/components/item-hot-drinks/hot-drinks';
import { HOTDRINKS } from 'src/app/shared/components/item-hot-drinks/hotDrinks.data';
import { RiceDishes } from 'src/app/shared/components/item-rice-dishes/rice-dishes';
import { RICEDISHES } from 'src/app/shared/components/item-rice-dishes/riceDishes.data';
import { Salads } from 'src/app/shared/components/item-salads/salads';
import { SALADS } from 'src/app/shared/components/item-salads/salads.data';
import { SavoryWaffles } from 'src/app/shared/components/item-savory-waffles/savory-waffles';
import { SAVORYWAFFLES } from 'src/app/shared/components/item-savory-waffles/savoryWaffles.data';
import { SweetWaffles } from 'src/app/shared/components/item-sweet-waffles/sweet-waffles';
import { SWEETWAFFLES } from 'src/app/shared/components/item-sweet-waffles/sweetWaffles.data';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.scss'],
})
export class LandingContentComponent {
  @ViewChild('imageContainer', { static: false })
  imageContainer!: ElementRef;

  appetizers: Appetizers[] = APPETIZERS;
  colddrinks: ColdDrinks[] = COLDDRINKS;
  hotdrinks: HotDrinks[] = HOTDRINKS;
  ricedishes: RiceDishes[] = RICEDISHES;
  salads: Salads[] = SALADS;
  savorywaffles: SavoryWaffles[] = SAVORYWAFFLES;
  sweetwaffles: SweetWaffles[] = SWEETWAFFLES;

  constructor(private cartService: CartService) {}

  addToCart(
    item:
      | Appetizers
      | ColdDrinks
      | HotDrinks
      | RiceDishes
      | Salads
      | SavoryWaffles
      | SweetWaffles
  ) {
    this.cartService.addToCart(item);
  }
}
