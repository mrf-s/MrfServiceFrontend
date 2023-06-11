import { Injectable } from '@angular/core';
import {ReviewsProvider} from "./reviews-provider";
import {Observable} from "rxjs";
import {ReviewModel} from "../components/review/review-model";

@Injectable({
  providedIn: 'root'
})
export class StubReviewsProviderService implements ReviewsProvider {
  private reviews: ReviewModel[] = [
    {
      name: 'Денис Шубейка',
      stars: 5,
      date: new Date(2023, 5, 6),
      reviewPlatform: '2gis',
      message: 'Очень добрый и честный человек менял стекло телефон стал как новый спасибо ему'
    },
    {
      name: 'Людмила Романова',
      stars: 5,
      date: new Date(2023, 5, 5),
      reviewPlatform: '2gis',
      message: 'Как я поняла парня зовут Марсель.\n' +
        'Очень выручил. Перед праздником телефон сломался, в сервисе рядом с домом не смогли починить.\n' +
        'Этого мастера друзья подсказали.\n' +
        'И телефон отремонтировал, и пауэр банк, и кабель для телефона у него приобрела.\n' +
        'Рекомендую, быстро делает.\n' +
        'Единственный минус, живет от меня далеко'
    },
    {
      name: 'Рома Заря',
      stars: 5,
      date: new Date(2023, 4, 30),
      reviewPlatform: '2gis',
      message: 'Спасибо за ремонт 🙂'
    },
    {
      name: 'Руслан Сабиров',
      stars: 5,
      date: new Date(2023, 4, 19),
      reviewPlatform: '2gis',
      message: 'Быстрый и качественный ремонт, всё очень хорошо и вежливо.'
    },
    {
      name: 'Aleksandr Badabum',
      stars: 5,
      date: new Date(2023, 3, 28),
      reviewPlatform: '2gis',
      message: 'Лучший мастер! Сделал все четко и качественно 👍 Рекомендую!'
    },
    {
      name: 'Ралина Курбанова',
      stars: 5,
      date: new Date(2023, 3, 21),
      reviewPlatform: '2gis',
      message: 'Марсель быстро,оперативно и качественно выполняет свои работы и дает гарантии на них.\n' +
        'Рекомендую всем!Обращайтесь и не пожалеете в выборе мастера 🤗'
    },
    {
      name: 'Вадим М.',
      stars: 5,
      date: new Date(2023, 4, 31),
      reviewPlatform: 'yandex',
      message: 'Огромное спасибо Марселю, товар качественный, почистили все динамики на Iphone XR, звук стал намного громче и чище!\n' +
        'Однозначно рекомендую данный сервис!'
    },
    {
      name: 'Булат Галиев',
      stars: 5,
      date: new Date(2023, 3, 9),
      reviewPlatform: 'yandex',
      message: 'Быстро и оперативно решили мою проблему по ремонту телефона. Сервис отличный, клиенториентированость на высоком уровне.'
    },
    {
      name: 'Ильсия Ф.',
      stars: 5,
      date: new Date(2023, 4, 2),
      reviewPlatform: 'yandex',
      message: 'Не первый раз обращаемся к Марселю. Ставили не только бронестекло, но и экраны несколько раз. Дети, что с них возьмёшь, часто их бьют. Сервис всегда на высоте👍. Рекомендую однозначно.'
    },
    {
      name: 'зиннур ягафаров',
      stars: 5,
      date: new Date(2023, 3, 6),
      reviewPlatform: 'yandex',
      message: 'Хочу сказать спасибо Марселю очень хороший мастер. Ремонтировол телефон и компьютер все зделал четка и даже больше .\n' +
        '\n' +
        'Всем советую)))\n' +
        'Большое СПАСИБО.'
    },
    {
      name: 'Инкогнито 6369',
      stars: 5,
      date: new Date(2023, 3, 28),
      reviewPlatform: 'yandex',
      message: 'Быстро и качественно сделал свою работу. Очень довольны. Рекомендуем 👍🏻(замена модуля на айфона)'
    },
    {
      name: 'Людмила Романова',
      stars: 5,
      date: new Date(2023, 3, 12),
      reviewPlatform: 'yandex',
      message: 'УРА 🔥\n' +
        'Марсель спасибо\n' +
        'Всё работает 👍🏽\n' +
        'Супер 😁\n' +
        'Спасибо 🙏🏽\n' +
        'Бычтро сделал летающий ВПН на старом тугодуме телефоне.'
    },
    {
      name: 'Марсель В.',
      stars: 5,
      date: new Date(2023, 4, 27),
      reviewPlatform: 'yandex',
      message: 'Отличный сервис, телефон отремонтировали быстро и качественно. Рекомендую.'
    },
    {
      name: 'Алмаз К.',
      stars: 5,
      date: new Date(2023, 3, 23),
      reviewPlatform: 'yandex',
      message: 'Спасибо мастеру Марселю\n' +
        'Оперативно отремонтировал маме телефон и сделал скидку'
    },
    {
      name: 'Марат Н.',
      stars: 5,
      date: new Date(2023, 4, 31),
      reviewPlatform: 'yandex',
      message: 'Спасибо Марселю. Разобрался в проблеме и починил телефон. Большой плюс что работает до поздна.'
    },
  ];

  constructor() { }

  private getRandomized(count: number): ReviewModel[] {
    return [...this.reviews].sort(() => Math.random() - 0.5).slice(0, count);
  }

  getReviews(): Observable<ReviewModel[]> {
    return new Observable<ReviewModel[]>(s => {
      s.next(this.getRandomized(6));
    })
  }
}
