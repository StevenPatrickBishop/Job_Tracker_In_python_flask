from flask import Flask, render_template, request, redirect
from markupsafe import escape
import os
import csv
from data import DB
from datetime import datetime

# web application instance
app = Flask(__name__)


#database setup using sqlalchemy --change the database name accordingly
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
#db = SQLAlchemy(app)


#-------------------------Alchemy Models--------------------------------------- 


#-------------------------lists and veriables--------------------------------------- 





#-------------------------routing--------------------------------------- 

@app.route("/", methods=["GET", "POST"])
def index():
    return render_template('index.html')



@app.route("/new_job/", methods=['POST','GET'])
def newJobForm():
    oplist = DB.getActiveOperators()
    typeList = DB.getJobType()
    workcellList = DB.getWorkCells()
    return render_template('new_job.html', oplist=oplist,typeList=typeList,workcellList=workcellList)
    # Form handler------------------------------------

    # if request.method == 'POST':

        # errors = False

        # if not request.form['operator']:
        #     errors = True

        # if not request.form['job_name']:
        #     errors = True

        # if not request.form['work_order']:
        #     errors = True

        # if not request.form['work_cell']:
        #     errors = True

        # if not request.form['job_type']:
        #     errors = True

        # if not request.form['job_weight']:
        #     errors = True

        # if not request.form['total_operations']:
        #     errors = True

        # if not errors:

        #     now = datetime.now()
        #     time = now.strftime('%I:%M %p')
        #     date = now.strftime('%m-%d-%Y')
        #     newRecord = {
        #         'operator': request.form['operator'],
        #         'job': request.form['job_name'],
        #         'workOrder': request.form['work_order'],
        #         'workCell' : request.form['work_cell'],
        #         'jobType' : request.form['job_type'],
        #         'jobWeight': request.form['job_weight'],
        #         'totalOperatiions': request.form['total_operations'],
        #         'inProcessTesting': request.form['in_process_testing'],
        #         'preAdjustments' : request.form['predjustments'],
        #         'notes' : request.form['notes'],
        #         'jobStatus' : 1, # Job status is 'In Progress' as a starting condtion (job status table)
        #         'startTime' : time,
        #         'startDate' : date,
        #         'lastOperation': 10, #jobs start at operation 10
        #         'Activity' : 4 #the value 4 represents 'starting' from the Activity_Action table
        #     }

        #     # DB.startJob(newRecord)
           








        # return render_template('new_job.html', oplist=oplist,typeList=typeList,workcellList=workcellList)




if __name__ == "__main__":
   app.run(debug=True, host="0.0.0.0", port=5000)