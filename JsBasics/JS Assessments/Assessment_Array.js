/*
Array Scenario Based Questions
===================================
Scenario-Based JavaScript Array Questions 

 1.⁠ ⁠Employee Management System 
Scenario: 
A company stores employee names in an array. 
Question: 

Declare an array with employee names "Rahul", "Priya", "Amit" and 
perform the following operations: 
 1.⁠ ⁠Add "Sneha" to the employee list   done 
 2.⁠ ⁠Remove the last employee from the list   done 
 3.⁠ ⁠Add "Manager" at the beginning of the list  done
 4.⁠ ⁠Remove the first employee from the list   done 

*/

let employee=["Rahul", "Priya", "Amit" ]

let addSneha=employee.unshift("Sneha");

console.log(addSneha);//4 unshit is returning number type
console.log(employee);//[ 'Sneha', 'Rahul', 'Priya', 'Amit' ]

let removeLstEle = employee.pop();

console.log(removeLstEle);//Amit
console.log(employee);//[ 'Sneha', 'Rahul', 'Priya' ]

let addMgr=employee.unshift("Manager");

console.log(addMgr)//4
console.log(employee);//[ 'Manager', 'Sneha', 'Rahul', 'Priya' ]


let remfst =employee.shift() 

console.log(remfst);//Manager

console.log(employee); //[ 'Sneha', 'Rahul', 'Priya' ]

/*
 2.⁠ ⁠Shopping Cart Application 

Scenario: 
An e-commerce website manages products in a shopping cart. 
Question: 
Declare an array with "Mobile", "Laptop", "Mouse" and: 
 1.⁠ ⁠Add "Keyboard" to the cart    done 
 2.⁠ ⁠Display all products in reverse order   done 
 3.⁠ ⁠Convert all cart items into a single string separated by " | "   done


*/


let ecom=["Mobile", "Laptop", "Mouse"]

let addCartEle=ecom.push("Keyboard");

console.log(addCartEle);//4
console.log(ecom);//[ 'Mobile', 'Laptop', 'Mouse', 'Keyboard' ]

let revorder=ecom.reverse();
console.log(revorder);//[ 'Keyboard', 'Mouse', 'Laptop', 'Mobile' ]

let singleString =revorder.join("|")

console.log(singleString);//Keyboard|Mouse|Laptop|Mobile




/*  3.⁠ ⁠Browser Tabs Automation 
Scenario: 
A browser automation framework tracks currently opened tabs. 
Question: 
Declare an array with "Google", "YouTube", "ChatGPT" and: 
 1.⁠ ⁠Close the last opened tab  
 2.⁠ ⁠Add "GitHub" as the first tab  
 3.⁠ ⁠Display tabs in reverse order   */


let BrowTab=["Google", "YouTube", "ChatGPT"]

let closeLast=BrowTab.pop();
console.log(closeLast);//ChatGPT

console.log(BrowTab);//[ 'Google', 'YouTube' ]

let addgithub=BrowTab.unshift("GitHub");
console.log(addgithub);//3

console.log(BrowTab);//[ 'GitHub', 'Google', 'YouTube' ]

let tabrev=BrowTab.reverse();
console.log(tabrev);



/* 
 4.⁠ ⁠Food Delivery Orders 
Scenario: 
A food delivery application maintains current orders. 
Question: 
Declare an array with "Pizza", "Burger", "Pasta" and: 
 1.⁠ ⁠Add "Sandwich" to the orders  
 2.⁠ ⁠Remove the first order  
 3.⁠ ⁠Display all orders as a comma-separated string  
 */



let foodDel=["Pizza", "Burger", "Pasta" ]

console.log(foodDel);//[ 'Pizza', 'Burger', 'Pasta' ]

let additem=foodDel.push("Sandwich");

console.log(foodDel);//[ 'Pizza', 'Burger', 'Pasta', 'Sandwich' ]


let deleteElement=foodDel.shift()
console.log(deleteElement);//Pizza

console.log(foodDel);//[ 'Burger', 'Pasta', 'Sandwich' ]


let comma=foodDel.join(",")
console.log(comma);



/*  5.⁠ ⁠Student Attendance System 
Scenario: 
A school application maintains student attendance. 
Question: 
Declare an array with "Ankit", "Riya", "Karan" and: 
 1.⁠ ⁠Add "Neha" at the beginning  
 2.⁠ ⁠Remove the last student from the list  
 3.⁠ ⁠Create a separate copy of the attendance list  */

let attedence =["Ankit", "Riya", "Karan" ]

console.log(attedence);//[ 'Ankit', 'Riya', 'Karan' ]

let additem1 =attedence.unshift("Neha")
console.log(additem1);//4

console.log(attedence);//[ 'Neha', 'Ankit', 'Riya', 'Karan' ]



let remlast=attedence.pop();

console.log(remlast);//Karan

console.log(attedence);//[ 'Neha', 'Ankit', 'Riya' ]




/*  6.⁠ ⁠QA Test Case Management 
Scenario: 
A QA engineer stores executed test cases. 
Question: 
Declare an array with "LoginTest", "PaymentTest", "SearchTest" and: 
 1.⁠ ⁠Create another copy of the same array  
 2.⁠ ⁠Extract only the first 2 test cases  
 3.⁠ ⁠Display test cases in reverse order   */

console.log("------------------ ⁠QA Test Case Management ---------------------------")
let testcases=["LoginTest", "PaymentTest", "SearchTest"]

console.log(testcases);//[ 'LoginTest', 'PaymentTest', 'SearchTest' ]

let copyarr=[...testcases]

console.log(copyarr);//[ 'LoginTest', 'PaymentTest', 'SearchTest' ]

let extractTestcases=testcases.slice(0,2);

console.log(extractTestcases);//[ 'LoginTest', 'PaymentTest' ]


console.log(testcases);//


let revtestcases=testcases.reverse();//[ 'LoginTest', 'PaymentTest', 'SearchTest' ]

console.log(revtestcases);//[ 'SearchTest', 'PaymentTest', 'LoginTest' ]




/*  7.⁠ ⁠Movie Recommendation App 
Scenario: 
A movie application stores recommended movies. 
Question: 
Declare an array with "Inception", "Avatar", "Titanic" and: 
 1.⁠ ⁠Add "Interstellar" to the movie list  
 2.⁠ ⁠Replace "Titanic" with "Jawan"  
 3.⁠ ⁠Convert all movie names into a single string separated by "-"  */

let movieapp =["Inception", "Avatar", "Titanic"]

let addMovie=movieapp.push("Interstellar")
console.log(addMovie);//4

console.log(movieapp);//[ 'Inception', 'Avatar', 'Titanic', 'Interstellar' ]


/* 8.⁠ ⁠Product Inventory Management 
Scenario: 
An admin manages product inventory. 
Question: 
Declare an array with "Mobile", "Laptop", "Tablet", "Camera" and: 
 1.⁠ ⁠Remove "Tablet" from inventory  
 2.⁠ ⁠Add "Smart Watch" after "Laptop"  
 3.⁠ ⁠Create a duplicate copy of updated inventory  */ 

let Prod=["Mobile", "Laptop", "Tablet", "Camera"];
//.         0           1           2       3

console.log(Prod);//[ 'Mobile', 'Laptop', 'Tablet', 'Camera' ]
let remAdd=Prod.splice(2,1,"Smart Watch")
console.log(Prod);//[ 'Mobile', 'Laptop', 'Smart Watch', 'Camera' ]
console.log(remAdd);//[ 'Tablet' ]
let prod1=[...Prod];
console.log("duplicated Array "+prod1);






/*  9.⁠ ⁠Online Course Platform 
Scenario: 
An online learning platform stores enrolled courses. 
Question: 
Declare an array with "JavaScript", "Playwright", "Cypress" and: 
 1.⁠ ⁠Remove the first course  
 2.⁠ ⁠Add "TypeScript" at the beginning  
 3.⁠ ⁠Extract only the last 2 courses  
 */


let courses=["JavaScript", "Playwright", "Cypress"]
console.log(courses);//[ 'JavaScript', 'Playwright', 'Cypress' ]

let FirstIndex=courses.shift();
console.log(FirstIndex);//JavaScript

console.log(courses);//[ 'Playwright', 'Cypress' ]

let addFirst=courses.unshift("TypeScript");

console.log(addFirst);//3


console.log(courses);//[ 'TypeScript', 'Playwright', 'Cypress' ]


/* 
10.⁠ ⁠Music Playlist Application 
Scenario: 
A music app stores favorite songs. 
Question: 
Declare an array with "Song1", "Song2", "Song3" and: 
 1.⁠ ⁠Display playlist in reverse order  
 2.⁠ ⁠Remove the last song  
 3.⁠ ⁠Add "NewSong" at the beginning  
 4.⁠ ⁠Convert playlist into a single string   */


let music=["Song1", "Song2", "Song3"]
console.log(music);//[ 'Song1', 'Song2', 'Song3' ]
let revmusic=music.reverse();
console.log(revmusic);//[ 'Song3', 'Song2', 'Song1' ]

let addnewlist =revmusic.unshift("NewSong");
console.log(addnewlist);//4

console.log(music);//[ 'NewSong', 'Song3', 'Song2', 'Song1' ]

let songstring=music.join("♫ ");

console.log(songstring);//NewSong♫ Song3♫ Song2♫ Song1


/* 11.⁠ ⁠Bug Tracking System 
Scenario: 
A software team tracks bugs using arrays. 
Question: 
Declare an array with "Bug101", "Bug102", "Bug103" and: 
 1.⁠ ⁠Add "Bug104"  
 2.⁠ ⁠Remove "Bug102"  
 3.⁠ ⁠Create a copy of the bug list  */ 

let bugTrack=["Bug101", "Bug102", "Bug103"]

console.log(bugTrack);//[ 'Bug101', 'Bug102', 'Bug103' ]

let addbug=bugTrack.push("Bug104");
console.log(addbug);//4

let revbug=bugTrack.splice(1,1);

console.log(revbug);//[ 'Bug102' ]

console.log(bugTrack);//[ 'Bug101', 'Bug103', 'Bug104' ]

let bugTrack1=[...bugTrack];
console.log(bugTrack1);//[ 'Bug101', 'Bug103', 'Bug104' ]


/* 12.⁠ ⁠Daily Tasks Planner 
Scenario: 
A task planner application stores daily tasks. 
Question: 
Declare an array with "Wake Up", "Exercise", "Study" and: 
 1.⁠ ⁠Add "Meeting" to the task list  
 2.⁠ ⁠Remove the first task  
 3.⁠ ⁠Reverse all tasks  
 4.⁠ ⁠Display all tasks in a single string separated by " -> "  */

let dailyTasks=[ "Wake Up", "Exercise", "Study"]

console.log(dailyTasks);//[ 'Wake Up', 'Exercise', 'Study' ]

let addDaily=dailyTasks.push("Meeting");
console.log(addDaily);//4

let remTasks = dailyTasks.shift();
console.log(remTasks);//Wake Up

console.log(dailyTasks);//[ 'Exercise', 'Study', 'Meeting' ]

let reversorder =dailyTasks.reverse()
console.log(reversorder);//[ 'Meeting', 'Study', 'Exercise' ]

let taskSingleString=reversorder.join("->");
console.log(taskSingleString);//Meeting->Study->Exercise



// 13.⁠ ⁠Mobile Contacts List 
// Scenario: 
// A mobile app stores contact names. 
// Question: 
// Declare an array with "Ram", "Shyam", "Mohan" and: 
//  1.⁠ ⁠Add "Sita" at the beginning  
//  2.⁠ ⁠Remove the last contact  
//  3.⁠ ⁠Extract only the first 2 contacts  


let contact =["Ram", "Shyam", "Mohan"];
console.log(contact);//[ 'Ram', 'Shyam', 'Mohan' ]
let addBegin=contact.unshift("Sita");
console.log(addBegin);//4
console.log(contact);// [ 'Sita', 'Ram', 'Shyam', 'Mohan' ]

let remLastContact=contact.pop();
console.log(remLastContact);//Mohan

let splicecontact=contact.slice(0,2);
console.log(splicecontact);//[ 'Sita', 'Ram' ]


/* 14.⁠ ⁠Sports Team Selection 
Scenario: 
A coach manages selected players. 
Question: 
Declare an array with "Virat", "Rohit", "Gill" and: 
 1.⁠ ⁠Add "Hardik" to the team  
 2.⁠ ⁠Replace "Gill" with "KL Rahul"  
 3.⁠ ⁠Display players in reverse order   */

let teamSelection=["Virat", "Rohit", "Gill"];
//                     0        1       2 
console.log(teamSelection);//[ 'Virat', 'Rohit', 'Gill' ]

let addplayer=teamSelection.unshift("Hardik");
console.log(addplayer);//4
console.log(teamSelection);//[ 'Hardik', 'Virat', 'Rohit', 'Gill' ]

let replacePlayer=teamSelection.splice(3,1,"KL Rahul");
console.log(replacePlayer);//[ 'Gill' ]

console.log(teamSelection);//[ 'Hardik', 'Virat', 'Rohit', 'KL Rahul' ]

let revOrder=teamSelection.reverse();

console.log(revOrder);//[ 'KL Rahul', 'Rohit', 'Virat', 'Hardik' ]


/* 15.⁠ ⁠Real-Time Automation Framework Scenario 
Scenario: 
An automation framework stores failed test names. 
Question: 
Declare an array with "LoginFail", "CheckoutFail", "SearchFail" and: 
 1.⁠ ⁠Add "ProfileFail"  
 2.⁠ ⁠Remove the first failed test  
 3.⁠ ⁠Create another copy of the failed tests array  
 4.⁠ ⁠Extract only the first 2 failed tests  
 5.⁠ ⁠Replace "CheckoutFail" with "PaymentFail"  
 6.⁠ ⁠Convert all failures into a single comma-separated string */


let failedTest=["LoginFail", "CheckoutFail", "SearchFail"];

console.log(failedTest)//[ 'LoginFail', 'CheckoutFail', 'SearchFail' ]

let  addedElements=failedTest.push("ProfileFail")
console.log(addedElements);//4

console.log(failedTest);//[ 'LoginFail', 'CheckoutFail', 'SearchFail', 'ProfileFail' ]


let remFirstFailed=failedTest.shift();

console.log(remFirstFailed);//LoginFail
console.log(failedTest);//[ 'CheckoutFail', 'SearchFail', 'ProfileFail' ]

let copyFailedTest=[...failedTest];

console.log(copyFailedTest);//[ 'CheckoutFail', 'SearchFail', 'ProfileFail' ]


let extractFailed=failedTest.slice(0,2);

console.log(extractFailed);//[ 'CheckoutFail', 'SearchFail' ]

console.log(failedTest);//[ 'CheckoutFail', 'SearchFail', 'ProfileFail' ]

let replaceFirstElement=failedTest.splice(0,1,"PaymentFail");

console.log(replaceFirstElement);//[ 'CheckoutFail' ]

console.log(failedTest);//[ 'PaymentFail', 'SearchFail', 'ProfileFail' ]

console.log("After converison "+ failedTest.join(","))








