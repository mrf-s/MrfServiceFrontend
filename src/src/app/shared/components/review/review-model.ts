export interface ReviewModel {
  stars: number;
  date: Date;
  reviewPlatform: 'yandex' | '2gis' | 'google';
  name: string;
  message: string;
}
