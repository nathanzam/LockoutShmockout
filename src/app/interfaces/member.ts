import { Result } from './result';

export interface Member {
  id: number;
  firstname: string;
  lastname: string;
  champion: string[];
  teamname: string[];
  playoffs: string[];
}

export interface MemberPlus {
  id: number;
  name: string;
  champion: string[];
  teamname: string[];
  playoffs: string[];
  best: Result;
  worst: Result;
}
