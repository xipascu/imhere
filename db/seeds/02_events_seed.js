
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {user_id:4,title:"Halfpipe @ Whistler",location:"Whistler, BC",description:"Let's head up on Friday afternoon, we have a car that seats 4 and a house that sleeps 6",max_attendees:6,start_time:"2017-12-08 17:00:13",end_time:"2017-12-10 12:30:02",total_going:3,private_event:false,latitude:50.091731,longitude: -123.012766,img_url:"http://dummyimage.com/185x166.jpg/cc0000/ffffff",creator_name:"Shane"},
        {user_id:12,title:"Cambie! Wooo!",location:"The Cambie",description:"Lets go drink responsibly",max_attendees:100,start_time:"2017-12-16 21:30:03",end_time:"2017-12-17 7:00:15",total_going:29,private_event:false,latitude:49.283067,longitude:-123.109305,img_url:"http://dummyimage.com/208x192.png/ff4444/ffffff",creator_name:"Travis"},
        {user_id:2,title:"Group Ride to Chilliwack",location:"North Vancouver, BC.",description:"As long as it isn't actively snowing/raining, lets meet the Park & Tilford JJ Bean and ride out to Bridal Falls.",max_attendees:20,start_time:"2017-12-05 11:00:56",end_time:"2017-12-05 17:30:13",total_going:13,private_event:false,latitude:49.307813,longitude: -123.040536,img_url:"http://dummyimage.com/146x150.png/cc0000/ffffff",creator_name:"Mike"},
        {user_id:15,title:"Lighthouse Labs YVR Demo Day",location:"Lighthouse Labs, Vancouver",description:"Come see what our most recent grads have created!",max_attendees:100,start_time:"2017-11-30 18:00:53",end_time:"2017-11-30 20:00:26",total_going:78,private_event:false,latitude:49.282154,longitude:-123.108071,img_url:"http://dummyimage.com/211x204.jpg/ff4444/ffffff",creator_name:"Don"},
        {user_id:15,title:"Demo Day After-Party",location:"The Cambie",description:"FREEEEEEDOOOOOOM!",max_attendees:100,start_time:"2017-11-30 20:00:05",end_time:"2017-12-01 6:00:24",total_going:94,private_event:false,latitude:49.283067,longitude:-123.109305,img_url:"http://dummyimage.com/103x118.jpg/cc0000/ffffff",creator_name:"Don"},
        {user_id:14,title:"Justice League",location:"Scotiabank Theatre\, Vancouver",description:"Let's go see Justice League...someone has to",max_attendees:10  ,start_time:"2017-12-8 19:00:23",end_time:"2017-12-19 21:20:00",total_going:0,private_event:false,latitude:49.282219,longitude:-123.124403,img_url:"http://dummyimage.com/201x173.bmp/5fa2dd/ffffff",creator_name:"Curtis"},
        {user_id:5,title:"Christmas Market",location:"Jack Poole Plaza",description:"It's a Christmas market! We'll wander around for a bit and then go eat somewhere",max_attendees:25,start_time:"2017-12-01 18:00:26",end_time:"2017-12-01 21:00:17",total_going:14,private_event:false,latitude:49.289275,longitude:-123.118627,img_url:"http://dummyimage.com/109x220.bmp/cc0000/ffffff",creator_name:"Greg"},
        {user_id:2,title:"ROCKET LAUNCH!",location:"Mike's house",description:"Beer, food, SPAAAAAAAACE! SpaceX is launching a cargo capsule to the ISS, come watch the launch!",max_attendees:10,start_time:"2017-12-08 09:00:50",end_time:"2017-12-08 17:00:17",total_going:7,private_event:false,latitude:49.367543,longitude:-123.099274,img_url:"http://dummyimage.com/176x116.bmp/dddddd/000000",creator_name:"Mike"},
        {user_id:1,title:"Stick & Puck",location:"West End Rink",description:"",max_attendees:20,start_time:"2017-12-20 14:00:18",end_time:"2017-12-20 18:00:16",total_going:10,private_event:false,latitude:49.290243,longitude:-123.135698,img_url:"http://dummyimage.com/236x211.jpg/dddddd/000000",creator_name:"Shane"},
        {user_id:4,title:"Con Foo Day 1",location:"Sheraton Wall Centre",description:"I've got 3 free passes. First come, first serve",max_attendees:3,start_time:"2017-12-04 9:00:37",end_time:"2017-12-04 18:00:10",total_going:2,private_event:false,latitude:49.280519,longitude:-123.127093,img_url:"http://dummyimage.com/108x214.jpg/cc0000/ffffff",creator_name:"Ili"},
        {user_id:4,title:"Con Foo Day 2",location:"Sheraton Wall Centre",description:"I've got 3 free passes. First come, first serve",max_attendees:3,start_time:"2017-12-05 9:00:37",end_time:"2017-12-05 18:00:10",total_going:1,private_event:false,latitude:49.280519,longitude:-123.127093,img_url:"http://dummyimage.com/108x214.jpg/cc0000/ffffff",creator_name:"Ili"},
        {user_id:4,title:"Con Foo Day 3",location:"Sheraton Wall Centre",description:"I've got 3 free passes. First come, first serve",max_attendees:3,start_time:"2017-12-06 9:00:37",end_time:"2017-12-06 18:00:10",total_going:0,private_event:false,latitude:49.280519,longitude:-123.127093,img_url:"http://dummyimage.com/108x214.jpg/cc0000/ffffff",creator_name:"Ili"},
        {user_id:12,title:"The National Live",location:"Queen Elizabeth Theatre",description:"",max_attendees:15,start_time:"2017-12-02 20:00:08",end_time:"2017-12-02 23:59:58",total_going:8,private_event:false,latitude:49.280667,longitude:-123.113156,img_url:"http://dummyimage.com/113x104.jpg/dddddd/000000",creator_name:"Travis"},
        {user_id:9,title:"Franz Ferdinand and Sally Dige",location:"Commodore Ballroom",description:"",max_attendees:20,start_time:"2017-12-05 20:00:11",end_time:"2017-12-05 23:59:56",total_going:4,private_event:false,latitude:49.280773,longitude:-123.120697,img_url:"http://dummyimage.com/106x245.jpg/ff4444/ffffff",creator_name:"Jon"},
        {user_id:3,title:"Grouse Gind!!",location:"Grouse Mountain",description:"Lets go climb a mountain together!",max_attendees:20,start_time:"2017-11-29 20:00:11",end_time:"2017-11-29 23:59:56",total_going:6,private_event:false,latitude:49.372052,longitude:-123.099476,img_url:"http://dummyimage.com/106x245.jpg/ff4444/ffffff",creator_name:"Ili"},
        {user_id:2,title:"Ramen Time!",location:"Jinya Ramen Bar",description:"Some good eats with good people",max_attendees:20,start_time:"2017-11-29 20:00:11",end_time:"2017-11-29 23:59:56",total_going:3,private_event:false,latitude:49.2800892,longitude:-123.1186028,img_url:"http://dummyimage.com/106x245.jpg/ff4444/ffffff",creator_name:"Mike"},
        {user_id:8,title:"Ice Skating",location:"West End Rink",description:"Its winter! lets go skating together",max_attendees:20,start_time:"2017-11-29 20:00:11",end_time:"2017-11-29 23:59:56",total_going:12,private_event:false,latitude:49.2800839,longitude:-123.1525277,img_url:"http://dummyimage.com/106x245.jpg/ff4444/ffffff",creator_name:"Dean"},
        {user_id:9,title:"Go Karting!",location:"TBC Indoor Racing",description:"I was thinking we could all go race down at TBC. Its about $45 to go but its a lot of fun. I was thinking of being there around 6:30pm",max_attendees:20,start_time:"2017-12-04 18:30:00",end_time:"2017-12-04 23:57:56",total_going:12,private_event:false,latitude:49.2803007,longitude:-123.1734795,img_url:"http://dummyimage.com/106x245.jpg/ff4444/ffffff",creator_name:"Thomas"},
        {user_id:13,title:"Botanical Gardens",location:"VanDusen Botanical Gardens",description:"With christmas lights set up, the gardens are a beautiful sight at the time of year. We could stroll around the park and maybe find something else to do after.",max_attendees:20,start_time:"2017-12-04 12:00:11",end_time:"2017-12-04 23:58:56",total_going:12,private_event:false,latitude:49.280216,longitude:-123.1734796,img_url:"http://dummyimage.com/106x245.jpg/ff4444/ffffff",creator_name:"Travis"},
        {user_id:8,title:"Winter Canoeing",location:"Cates Park Paddling Centre",description:"I know its winter, but lets brave the cold and go out for a conoe. Deep cove can be tranquil and calm. As long as we bundle up it will be a great time",max_attendees:20,start_time:"2017-12-04 11:30:11",end_time:"2017-12-04 23:59:56",total_going:12,private_event:false,latitude:49.2497043,longitude:-123.0718561,img_url:"http://dummyimage.com/106x245.jpg/ff4444/ffffff",creator_name:"Dean"},
        {user_id:14,title:"Conquer the CHIEF",location:"The Chief, Squamish",description:"Lets go hike up the cheif!! we can meet at the base, and figure out if everyone wants to do 1, 2, or 3 peaks. Its a hike, you guys know the drill... lets get to it!",max_attendees:20,start_time:"2017-11-30 12:30:11",end_time:"2017-11-30 23:57:56",total_going:12,private_event:false,latitude:49.6847015,longitude:-123.1730075,img_url:"http://dummyimage.com/106x245.jpg/ff4444/ffffff",creator_name:"Isaiah"},
        {user_id:3,title:"Snowshoeing on Grouse!",location:"Grouse Mountain",description:"Lets go do Thunderbolt Ridge!",max_attendees:5,start_time:"2017-12-05 9:00:37",end_time:"2017-12-05 18:00:10",total_going:4,private_event:false,latitude:50.091731,longitude: -123.012766,img_url:"http://dummyimage.com/108x214.jpg/cc0000/ffffff",creator_name:"Ili"},
        {user_id:8,title:"Lighthouse Park Hike",location:"Lighthouse Park",description:"Crisp hike through the park, and we'll go get food in Horseshoe Bay afterwards.",max_attendees:10,start_time:"2017-12-05 12:00:37",end_time:"2017-12-05 18:00:10",total_going:0,private_event:false,latitude:49.337331,longitude:-123.262936,img_url:"http://dummyimage.com/108x214.jpg/cc0000/ffffff",creator_name:"Ili"},
        {user_id:12,title:"Tacofino",location:"Tacofino Gastown",description:"Nachos and mezcal!",max_attendees:15,start_time:"2017-12-01 18:00:08",end_time:"2017-12-01 23:59:58",total_going:8,private_event:false,latitude:49.282587,longitude:-123.104893,img_url:"http://dummyimage.com/113x104.jpg/dddddd/000000",creator_name:"Travis"},
        {user_id:16,title:"Best Sushi in Vancouver",location:"Black Rice Izakaya",description:"The best sushi that I've found (so far) in the city",max_attendees:8,start_time:"2017-12-02 13:00:11",end_time:"2017-12-05 16:00:56",total_going:4,private_event:false,latitude:49.278319,longitude:-123.114779,img_url:"http://dummyimage.com/106x245.jpg/ff4444/ffffff",creator_name:"Jon"},
        {user_id:10,title:"Beeeeeeeer",location:"33 Acres",description:"Beer, jerky and pretzels!",max_attendees:10,start_time:"2017-12-04 20:00:11",end_time:"2017-12-04 23:59:56",total_going:6,private_event:false,latitude:49.263785,longitude:-123.105304,img_url:"http://dummyimage.com/106x245.jpg/ff4444/ffffff",creator_name:"Ili"},
        {user_id:2,title:"Planetarium After Dark",location:"H.R. MacMillan Space Center",description:"Spaaaaaaaaaace, and a presentation on NASA's Juno mission to Jupiter",max_attendees:20,start_time:"2017-12-06 20:00:11",end_time:"2017-12-06 23:59:56",total_going:20,private_event:false,latitude:49.276124,longitude:-123.144744,img_url:"http://dummyimage.com/106x245.jpg/ff4444/ffffff",creator_name:"Mike"},
        {user_id:8,title:"Ice Skating",location:"West End Rink",description:"Its winter! lets go skating together",max_attendees:20,start_time:"2017-12-05 20:00:11",end_time:"2017-12-05 23:59:56",total_going:12,private_event:false,latitude:49.2800839,longitude:-123.1525277,img_url:"http://dummyimage.com/106x245.jpg/ff4444/ffffff",creator_name:"Dean"},
        {user_id:7,title:"Night Market",location:"Richmond",description:"Night market is a really cool place to be. It has some amazing food and interesting shows to see",max_attendees:20,start_time:"2017-12-03 17:00:00",end_time:"2017-12-03 23:57:56",total_going:12,private_event:false,latitude:49.2802583,longitude:-123.1734795,img_url:"http://dummyimage.com/106x245.jpg/ff4444/ffffff",creator_name:"Eddy"}
              ]);
    });
};
