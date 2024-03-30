// user.model.ts

export interface User {
    id: number;
    username: string;
    email: string;
    role: UserRole;
  }
  
  export type UserRole = 'user' | 'admin';
  