export {};

declare global {
  interface Step {
    id: number;
    name: string;
    icon?: string;
    status?: 'Success' | 'Error' | 'Empty'
  }
}