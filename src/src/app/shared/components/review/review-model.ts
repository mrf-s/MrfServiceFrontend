export interface ReviewModel {
  stars: number;
  date: Date;
  reviewPlatform: 'yandex' | '2gis';
  name: string;
  message: string;
}
