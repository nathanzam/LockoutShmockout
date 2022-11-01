import { Result } from './result';
import { Score } from './score';
import { Draft } from './moves';

export interface Member {
  id: number;
  espnId: number;
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
  draft: Draft[];
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
