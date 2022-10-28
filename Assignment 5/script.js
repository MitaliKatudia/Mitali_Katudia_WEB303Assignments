/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here

    $(document).ready(function () {
   
        class ContentItem{
        employeeId;
        employeeName;
        jobDesc;
        department;
       
       constructor(employeeId, employeeName, jobDesc, department){
               this.employeeId = employeeId;
               this.employeeName = employeeName;
               this.jobDesc = jobDesc;
               this.department = department;
               }
       
       updateContentItem(employeeId, employeeName, jobDesc, department){
               if(this.employeeId == employeeId && employeeName && jobDesc && department){
                   this.employeeId = employeeId;
                   this.employeeName = employeeName;
                   this.jobDesc = jobDesc;
                   this.department = department;
                   }
       
               }
               toString(){
               return $('#content-item-list').append(`<div class="content-item-wrapper">
               <div id="content-item-${this.employeeId}">
               <h2 class="employeeName">${this.employeeName}</h2>
               <p class="jobDesc">${this.jobDesc}</p>
               <div class="department">${this.department}</div>
               </div>
                </div>`);
                }
            }
           
           let content = [
           {
               "employeeId": 0,
               "employeeName": "Mitali Katudia",
               "jobDesc": "Supervising the assembly line.",
               "department": "Supervisor"
           },
           {
                "employeeId": 1,
                "employeeName": "Ihab Nargi",
                "jobDesc": "Assembling Parts",
                "department": "TpT Assembler"
            },
            {
                "employeeId": 2,
                "employeeName": "Steven Loy",
                "jobDesc": "Checking Quality of the Parts",
                "department": "Quality Inspector"
            },
            {
                "employeeId": 3,
                "employeeName": "Chris Taylor",
                "jobDesc": "Maintaining the Machines",
                "department": "Maintenance"
            }
       
           ];
       
           $.each(content, function(key, val){
             $('#content-item-list').append(`<div class="content-item-wrapper">
               <div id="content-item-${this.employeeId}">
               <h2 class="employeeName">${this.employeeName}</h2>
               <p class="jobDesc">${this.jobDesc}</p>
               <div class="department">${this.department}</div>
               </div>
           </div>`);
           });

            $('.content-item-wrapper').css('width', '70%');
            $('.content-item-wrapper').css('margin', 'auto');
            $('.content-item-wrapper').css('padding', '5px'); 
            $('.content-item-wrapper').css('margin-bottom', '10px');
            $('.content-item-wrapper').css('border', 'dashed 2px gray');
            $('.jobDesc').css('font-weight', 'bold');
       
       });

});


