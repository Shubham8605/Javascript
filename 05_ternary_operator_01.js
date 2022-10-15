var tcsEligibilityCheck = function(grad_score,hsc_score,ssc_score,Candidate_name){

    var result = grad_score >=70 && hsc_score>=80 && ssc_score > 90
? `Congrats ${Candidate_name} you are eligible for tcs interview`
: "unfortunately you are not eligible for interview"
console.log(result);
}
tcsEligibilityCheck(80,86,90,"Mohit sharma");