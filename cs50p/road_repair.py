# def getMinCost(crew_id, job_id):
#     # crew_id.sort()
#     # job_id.sort()
#     # min_dist = 0
#     # # Create a copy that holds actual value during removal
#     # crew_id_copy = [item for item in crew_id]
#     # # job_id_copy = job_id
#     # # If in a job position keep them there and remove work and worker from list
#     # for worker in crew_id_copy:
#     #     for job in job_id:
#     #         if worker == job:
#     #             crew_id.remove(worker)
#     #             job_id.remove(job)
#     #             print(worker,"took",job)
#     #             break
#     # # Now for each find clojest job and assign
#     # crew_id_copy = [item for item in crew_id]
#     # for worker in crew_id_copy:
#     #     dist_temp = abs((worker - job_id[0]))
#     #     job_taken_index = 0
#     #     for job in job_id:
#     #         if abs((worker - job)) < dist_temp:
#     #             dist_temp = abs((worker-job))
#     #             job_taken_index = job_id.index(job)
#     #     print(worker, "took", job_id[job_taken_index])
#     #     crew_id.remove(worker)
#     #     job_id.remove(job_id[job_taken_index])
#     #     min_dist += dist_temp

#     #!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'getMinCost' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts following parameters:
#  1. INTEGER_ARRAY crew_id
#  2. INTEGER_ARRAY job_id

def getMinCost(crew_id, job_id):
    # Write your code here
    crew_id.sort()
    job_id.sort()
    min_dist = 0
    # crew_id_copy = [worker for worker in crew_id]
    crew_id_copy = crew_id[:]
    for worker in crew_id_copy:
        # if worker in job_id:
        #     job_id.remove(worker)
        #     crew_id.remove(worker)
        try:
            job_id.remove(worker)
            crew_id.remove(worker)
        except:
            pass
    # length = len(crew_id)
    # for i in range(length):
    #     min_dist += abs(crew_id[i] - job_id[i])
    pair = zip(crew_id, job_id)
    min_dist = sum(abs(crew-job) for crew, job in pair)
    
    return min_dist

if __name__ == '__main__':
    crew_id = [5, 3, 1, 4, 6]
    job_id = [9, 8, 3, 15, 1]
    print(getMinCost(crew_id, job_id))
    # 5
    crew_id = [5, 3, 1, 4]
    job_id = [8, 31, 15, 0]
    print(getMinCost(crew_id, job_id))
    # 7
    crew_id = [5, 3, 1, 4, 6]
    job_id = [9, 8, 1, 5, 0]
    print(getMinCost(crew_id, job_id))

    #8
    crew_id = [6,5,9,4,3,8,2]
    job_id = [6,9,8,1,10,1,4]
    print(getMinCost(crew_id,job_id))
