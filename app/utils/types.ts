export interface Profile {
  id: string;
  created_at: Date;
  updated_at?: Date;
  user_name: string;
  avatar_url: string;
  email: string;
}
