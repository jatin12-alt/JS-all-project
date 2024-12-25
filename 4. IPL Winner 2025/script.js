var iplTeams = [
    {
      "team_name": "Chennai Super Kings",
      "captain": "Ruturaj Gaikwad",
      "image": "https://imgs.search.brave.com/JjlM7Z7NI3q1ydPWWFxN9pGpxcJb6SraIPadaDJ21Ts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI1MDY0/OTUuanBn"
    },
    {
      "team_name": "Delhi Capitals",
      "captain": "Rishabh Pant",
      "image": "https://imgs.search.brave.com/4BYPcf78_hJ8fe2RPjro6SxRZNv9CXmGo8Qb0UewznM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aW1l/c29mc3BvcnRzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8xMi9EZWxoaS1D/YXBpdGFscy1Mb2dv/LnBuZw"
    },
    {
      "team_name": "Gujarat Titans",
      "captain": "Shubman Gill",
      "image": "https://imgs.search.brave.com/ggxhiFKxYx9IUZ5ZN4KYiY840jsqL77h7ezGvDfihEA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aW1l/c29mc3BvcnRzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wMi9HdWphcmF0/LVRpdGFucy1Mb2dv/LnBuZw"
    },
    {
      "team_name": "Kolkata Knight Riders",
      "captain": "Shreyas Iyer",
      "image": "https://imgs.search.brave.com/Eq2cA4NNy7J8CpEMBYZS_yvcnE-P0UJNPWXXdA9_B8w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDYxOTQ1/NzIuanBn"
    },
    {
      "team_name": "Lucknow Super Giants",
      "captain": "KL Rahul",
      "image": "https://imgs.search.brave.com/WMWF8ZdPcOyUdkCx1jZpV3WwCgeFtAfEu6CAlVAOUus/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ha20t/aW1nLWEtaW4udG9z/c2h1Yi5jb20vaW5k/aWF0b2RheS9pbWFn/ZXMvc3RvcnkvMjAy/MjAxL0x1Y2tub3df/U3VwZXJfR2lhbnRf/bG9nb18xMjAweDc2/OC5qcGVnP3NpemU9/NjkwOjM4OA"
    },
    {
      "team_name": "Mumbai Indians",
      "captain": "Hardik Pandya",
      "image": "https://imgs.search.brave.com/91jbnyRFBdK7jX-ZRQlTD2MRx4I-_EnzHeXL3mGdM9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI0NTg1/OTMuanBn"
    },
    {
      "team_name": "Punjab Kings",
      "captain": "Shikhar Dhawan",
      "image": "https://imgs.search.brave.com/fNBjoNqzA6x8ZaAslzifGtbhurhehjjoAXKD8Tn6qyI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDYxOTQ1/ODEuanBn"
    },
    {
      "team_name": "Rajasthan Royals",
      "captain": "Sanju Samson",
      "image": "https://imgs.search.brave.com/5t5jbksL5ioT1Rjfl74OZPMTPTvTaK9KfYO-3BF3uPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDYxOTQ1/NzcuanBn"
    },
    {
      "team_name": "Royal Challengers Bangalore",
      "captain": "Faf du Plessis",
      "image": "https://imgs.search.brave.com/eMI2Sy-xsiUxmaiymNruf5ZlKfBM35gqyES14IXfPWE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvcmNiLWhrbmI5/d3FzMDRtd2VjamQu/anBn"
    },
    {
      "team_name": "Sunrisers Hyderabad",
      "captain": "Pat Cummins",
      "image": "https://imgs.search.brave.com/ahThhkGvFTWp-r_E7ELdNwZvhmDBjhbzVIw2wUovs8w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQxNjY1/MzEuanBn"
    }
  ]

  var btn = document.querySelector('button');
  var main = document.querySelector('.main');
  btn.addEventListener('click', function() {
    var randomTeam = iplTeams[Math.floor(Math.random()*iplTeams.length)];
    document.getElementById('team-name').innerHTML = randomTeam.team_name;
    document.getElementById('captain-name').innerHTML = randomTeam.captain;
    main.style.backgroundImage = `url(${randomTeam.image})`
  });



 
  