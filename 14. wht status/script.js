const users = [
    {
        "profilePhoto": "https://plus.unsplash.com/premium_photo-1691030256404-101d1aadd42c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "status": "Excited about the upcoming festival!",
        "fullName": "Rohan Sharma",
        "time": "5 minutes ago"
    },
    {
        "profilePhoto": "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "status": "Just finished a great book on history.",
        "fullName": "Anjali Verma",
        "time": "15 minutes ago"
    },
    {
        "profilePhoto": "https://images.unsplash.com/photo-1627110508727-964411efb355?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwbWVuJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
        "status": "Exploring the streets of Jaipur.",
        "fullName": "Arjun Singh",
        "time": "30 minutes ago"
    },
    {
        "profilePhoto": "https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww",
        "status": "Feeling grateful for everything.",
        "fullName": "Priya Kapoor",
        "time": "1 hour ago"
    },
    {
        "profilePhoto": "https://images.unsplash.com/photo-1597950018954-2f59fff2cd72?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsJTIwbWVuJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
        "status": "At the beach enjoying the sunset.",
        "fullName": "Karan Mehta",
        "time": "2 hours ago"
    },
    {
        "profilePhoto": "https://images.unsplash.com/photo-1469460340997-2f854421e72f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww",
        "status": "Happy birthday to me!",
        "fullName": "Neha Gupta",
        "time": "3 hours ago"
    },
    {
        "profilePhoto": "https://images.unsplash.com/photo-1674492620074-d8adf95e252d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwbWVuJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
        "status": "Just started learning a new recipe!",
        "fullName": "Vikram Khanna",
        "time": "4 hours ago"
    },
    {
        "profilePhoto": "https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww",
        "status": "Relaxing with some music.",
        "fullName": "Ishita Malhotra",
        "time": "5 hours ago"
    },
    {
        "profilePhoto": "https://images.unsplash.com/flagged/photo-1577996693134-e50d294a665f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsJTIwbWVuJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
        "status": "On a road trip to the mountains.",
        "fullName": "Rahul Desai",
        "time": "7 hours ago"
    },
    {
        "profilePhoto": "https://images.unsplash.com/photo-1462804993656-fac4ff489837?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww",
        "status": "Finished a productive workout session.",
        "fullName": "Simran Arora",
        "time": "8 hours ago"
    },
    {
        "profilePhoto": "https://images.unsplash.com/photo-1709621036211-3a09f8de2aee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWwlMjBtZW4lMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
        "status": "Chilling with friends at a café.",
        "fullName": "Amit Patel",
        "time": "9 hours ago"
    }
]

var sum = ''
users.forEach(function (user, idx) {
    sum += `<div id="${idx}" class="status  h-[60px] w-full mt-[10px]  border-b border-gray-500 flex">
                    <img class="h-[55px] w-[55px] ml-[10px] rounded-[50%] object-cover border-2 border-green-500"
                        src="${user.profilePhoto}"
                        alt="">
                    <div class="ml-[19px]">
                        <h1 class="text-[17px]">${user.fullName} </h1>
                        <h6 class="text-[12px]">${user.time} </h6>
                    </div>
                    </div>
                    `
                    
})

var screen = document.querySelector('.allstatus');

screen.innerHTML = sum 
