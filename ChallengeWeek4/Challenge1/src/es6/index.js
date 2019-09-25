/**
 * Funtion that initializes the application
 */
let init = () => {
    fetch("file:///Users/jobsity/Desktop/Challenge/JobsityChallengesThirdSchool/ChallengeWeek4/Challenge1/dist/Script.js").then(res => res.json()).then((data)=>{
        console.log(data);
    });
}

init();