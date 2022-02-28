export interface Profile {
  id?: string;
  created_at?: Date;
  updated_at?: Date;
  user_name: string;
  avatar_url: string;
  email?: string;
}

export interface Worry {
  id: number;
  created_at: Date;
  updated_at?: Date;
  is_anon: boolean;
  post: string;
  author?: Profile;
  comments?: Comment[];
}
export interface Comment {
  id: number;
  created_at: Date;
  comment: string;
  author?: Profile;
  worry?: Worry[];
}
