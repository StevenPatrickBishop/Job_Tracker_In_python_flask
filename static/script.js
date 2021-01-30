// DASHBOARD CHARTS =======================================================================
console.log(cellData)
var cellLabels = ["Pilot Plant", 
                  "Large Hock", 
                  "Half Gal Ross", 
                  "2 Gal Ross", 
                  "10 Gal Ross", 
                  "40 Gal Ross", 
                  "100 Gal Ross", 
                  "Mezz Tanks", 
                  "Activator"];

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: cellLabels,
        datasets: [{
            label: 'Job Cells',
            data: JSON.parse(cellData),
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// ======================================================================= DASHBOARD CHARTS







// DASHBOARD EVENT LISTENER =======================================================================
dash_panel_completed_today = document.querySelector("#dash-panel-completed-today")
dash_panel_completed_week = document.querySelector("#dash-panel-completed-week")
dash_panel_completed_month = document.querySelector("#dash-panel-completed-month")

dash_panel_2 = document.querySelector("#panel_2").addEventListener("click", function(){
    dash_panel_completed_today.submit();
    // window.location = "/test_land/"
   });

dash_panel_3 = document.querySelector("#panel_3").addEventListener("click", function(){
dash_panel_completed_week.submit();
    // window.location = "/test_land/"
   });
    
dash_panel_4 = document.querySelector("#panel_4").addEventListener("click", function(){
dash_panel_completed_month.submit();
    // window.location = "/test_land/"
    });
    




// ======================================================================= DASHBOARD EVENT LISTENER




