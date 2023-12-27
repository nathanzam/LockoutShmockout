import { Injectable } from '@angular/core';
import { Member } from '../interfaces/member'

@Injectable({
  providedIn: 'root'
})

export class MemberService {

  constructor() { }
  
  members: Member[] = [
    {
      id: 1, espnId: 1, firstname: 'David', lastname: 'Zamkov', champion: ['2011'],
      teamname: ['P-Mac Cat Hoarders', 'Afrikaan Starving Joos', 'The Zam Turn Yo Head n\' Kovs', 'DeeZ Nuts On Yo\' Chinzzzz',
        'Golden Tate of Mind', 'Cpt. Kirk and The Gurley Boys', 'Cool Brees Hits David\'s Johnson', 'Kittles- Taste The Asshole',
        'Saquondered My Chance', 'Discount Deebo Check', 'League Killer','My Butker Hurts', 'I Shaved My Balls For This?'],
      playoffs: ['2011', '2014', '2016', '2018', '2019', '2020', '2023']
    },
    {
      id: 2, espnId: 10, firstname: 'Chad', lastname: 'Oglesby', champion: ['2012', '2016', '2023'],
      teamname: ['Drink til the Pink Dont Stink', 'Bob Loblaw\'s Law Bloggers', 'Muff Huckers', 'Michael Sam\'s Cleatsssss',
        'Taint Taco Aficionado', 'Zeke and Bell Rollin Blounts', 'Shat the Bed'],
      playoffs: ['2011', '2012', '2013', '2016', '2023']
    },
    {
      id: 3, espnId: 8, firstname: 'Peyton', lastname: 'Bobo', champion: ['2013', '2014', '2018'],
      teamname: ['Neverland Lost Boys', 'Texas Lone Ranger', 'Ridgemont High Bad Teacher', 'Baaaadaaaass G.O.A.T.',
        'Thoughts from Willy Wonka', 'Yellow Rose of Texas', 'Hanging with Mr. Bobo', 'Cooper? More Like Pooper',
        'Got Me A Little Chubby', 'Feb 2nd × Idiot = COVID', 'Something TBD', 'Girl Dad AKA Daddyman', 'Worst Team Name Ever'],
      playoffs: ['2011', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2021', '2023']
    },
    {
      id: 4, espnId: 2, firstname: 'Kenny', lastname: 'Crapse', champion: [],
      teamname: ['Wichita, Kan. Bout Willis', 'Redskins Name Changing Assoc.', 'Every Day I\'m Russell\'n',
        'Isaiah Fisher\'s Stepdad', 'Make AMurrayca Great Again', 'DeMarcoroni And Cheese', 'Miami Guice',
        'Fantasy Football Team'],
      playoffs: ['2011', '2012', '2014', '2017', '2020', '2021', '2022', '2023']
    },
    {
      id: 5, espnId: 17, firstname: 'Kevin', lastname: 'Bandy', champion: ['2019', '2021'],
      teamname: ['Atlanta Sausage Kings', 'PSU Shower Todd LeFondlers', 'Show Me Your Torts', 'I Rest My Case Keenum'],
      playoffs: ['2011', '2012', '2015', '2016', '2017', '2018', '2019', '2021']
    },
    {
      id: 6, espnId: 4, firstname: 'Alex', lastname: 'Burtch', champion: [],
      teamname: ['Somewhere Over Dwayne Bowe', 'Hairy Sand Huskies', 'Butch Cassidy\'s Sundance Kids',
        'It\'s on like Ndamukong', 'Cass A Straight Hustla', 'High Priests Of The Swoly Bible', 'DeVontas Inferno',
        'sQuads Like Saquon', 'MoTown Magic', 'Osmosis Jones'],
      playoffs: ['2011', '2013', '2018']
    },
    {
      id: 7, espnId: 11, firstname: 'Clayton', lastname: 'Coleman', champion: [],
      teamname: ['Katmandu Burgandys Bunch'],
      playoffs: ['2012']
    },
    {
      id: 8, espnId: 7, firstname: 'Ryan', lastname: 'Cox', champion: ['2015'],
      teamname: ['suck my BIG cox', 'Automatic Win', 'Tebows Before hoes', 'Auto Erection', 'Jameis\' Crab Shack',
        'Cali Fournettecation', 'Kaeptain America', 'Humpty Trumpty Wall'],
      playoffs: ['2013', '2014', '2015', '2016', '2017', '2018']
    },
    {
      id: 9, espnId: 9, firstname: 'Nathan', lastname: 'Kinney', champion: [],
      teamname: ['Team Kinney'],
      playoffs: []
    },
    {
      id: 10, espnId: 5, firstname: 'Scott', lastname: 'Gunter', champion: [],
      teamname: ['Technical Losers', 'Xamboite Frullers', 'League Villain', 'Beats by Ray', 'Scooter in her Pooter',
        'Va-JayJay tWatt Swatters', 'Fuq Fantasy', 'Lauer Your Expectations', 'Rushin\' Collusion',
        'Dr. Bang Bang Fang Fang PhD'],
      playoffs: ['2013', '2015', '2018', '2020']
    },
    {
      id: 11, espnId: 15, firstname: 'Korey', lastname: 'Schrock', champion: [],
      teamname: ['Master Mulatto', 'Paula Deen\'s Plantation'],
      playoffs: ['2012', '2014', '2015', '2019', '2020', '2022']
    },
    {
      id: 12, espnId: 6, firstname: 'Kameron', lastname: 'Chastain', champion: [],
      teamname: ['Victorious Secret'],
      playoffs: []
    },
    {
      id: 13, espnId: 13, firstname: 'David', lastname: 'Deyer', champion: [],
      teamname: ['The Pen is Mightier', 'Medorthophobia Water'],
      playoffs: ['2013']
    },
    {
      id: 14, espnId: 14, firstname: 'Riley', lastname: 'Martin', champion: [],
      teamname: ['Hogwarts Hobbits', 'The Missionary Positions', 'Benny and The Jet Pilots'],
      playoffs: ['2012']
    },
    {
      id: 15, espnId: 16, firstname: 'Jordan', lastname: 'Hartman', champion: [],
      teamname: ['Aaron\'s Clean Up Crew'],
      playoffs: []
    },
    {
      id: 16, espnId: 19, firstname: 'Paul', lastname: 'A', champion: [],
      teamname: ['Louisville Teddy Ballgame'],
      playoffs: []
    },
    {
      id: 17, espnId: 18, firstname: 'Nikolas', lastname: 'Sachs', champion: [],
      teamname: ['Panama Diabolos Rojos', 'The Token Austrian', 'Forest City Explosive Trees', 'Get Buckets'],
      playoffs: ['2014', '2015', '2016', '2017', '2019', '2020', '2022']
    },
    {
      id: 18, espnId: 20, firstname: 'Nathan', lastname: 'Zamkov', champion: ['2017', '2022'],
      teamname: ['Gronkey Punch', 'Rawls in your Face', 'An InCAMvenient Truth', 'Johnson and Johnson', 'Two Browns One Kupp',
        'Jock Strap Kings', 'Dude Looks Like A Brady', 'Training Room Heroes', '28-3 and Me', 'Give your Footballs a Tug'],
      playoffs: ['2017', '2019', '2021', '2022']
    },
    {
      id: 19, espnId: 19, firstname: 'Rebekah', lastname: 'Epley', champion: ['2020'],
      teamname: ['My team SUCKS Call me theBUCS', 'Palmer? I Barely Know Her', 'Make AmariCarr Great Again',
        'No Bell Prize Is Riddick', 'I Forgot Talib The Safety On', 'Zeke Feet Apart'],
      playoffs: ['2020']
    }
  ];

  getMembers(): Member[] {
    return this.members;
  }

  checkIfChampion(id: number, season: number): boolean {
    return this.members.filter(member => member.id == id)[0].champion.some(year => year == season.toString());
  }
}
