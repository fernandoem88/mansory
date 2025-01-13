export interface ResponseSuccess {
  next_page?: string;
  page: number;
  per_page: number;
  total_results: number;
  photos: PhotoItem[];
}

export interface PhotoItem {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
  };
  alt: string;
  avg_color: string;
  liked: boolean;
}
