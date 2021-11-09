import { Result } from './result';
import { Score } from './score';

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

export interface MemberLuck {
  id: number;
  name: string;
  luckyWins: number;
  unluckyLosses: number;
  luckyWeeks: Score[];
  unluckyWeeks: Score[];
}
