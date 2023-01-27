import glob
import os

list_of_files = glob.glob('C:/videooupload - Copy/my-app/backend/public/videos/*') # * means all if need specific format then *.csv
latest_file = max(list_of_files, key=os.path.getctime)
print(latest_file)


# Python program to explain os.mkdir() method

import shutil
import os

# location
location = "C:/Users/Usman/Downloads/EAST1/tmp/"

# directory
dir = "frames"

# path
path = os.path.join(location, dir)

# removing directory
shutil.rmtree(path)


# importing os module
import os

# Directory
directory = "frames"

# Parent Directory path
parent_dir = "C:/Users/Usman/Downloads/EAST1/tmp/"

# Path
path = os.path.join(parent_dir, directory)

# Create the directory
# 'GeeksForGeeks' in
# '/home / User / Documents'
os.mkdir(path)






# import IPython.display as display
import cv2
from csv import reader
import os
import cv2
from PIL import Image

# import IPython.display as display
class video:
    def __init__(self,videoname):
        self.videoname = videoname
    def video_upload(self):
        directory = 'C:/videooupload - Copy/my-app/public/images/'

        # Use listdir to get a list of all items in the directory
        items = os.listdir(directory)

        # Initialize a counter for the number of folders
        folder_count = 0

        # Iterate over the items and increment the counter for each item that is a directory
        for item in items:
            if os.path.isdir(os.path.join(directory, item)):
                folder_count += 1

        # Print the count of folders
        print(f'Number of folders: {folder_count}')
        print("video"+str(folder_count+1))
        
        
        # folder_path = '/home/user/documents/'

        # check if the folder already exists
        # if not os.path.exists(folder_path + folder_name):
        # create the folder
        
       
        os.makedirs(directory + "video"+str(folder_count+1))
        directory = 'C:/videooupload - Copy/my-app/public/images/'+ "video"+str(folder_count+1)+'/'

        os.makedirs(directory+'frame')


        vidcap = cv2.VideoCapture(self.videoname)
        success,image = vidcap.read()
        count = 0
        while(success):
            #cv2.imwrite(os.path.join('C:/videooupload - Copy/my-app/backend/public/video','frame%d.jpg' % count), image)
            frame_name = "frame%d.jpg" % count
            
            if count%15==0:
                print(count)
                cv2.imwrite(os.path.join('C:/Users/Usman/Downloads/EAST1/tmp/frames/', frame_name), image)
                cv2.imwrite(os.path.join(directory+'/'+'frame', frame_name), image)

           
            success,image = vidcap.read()


           # cv2.imwrite("frame%d.jpg" % count, image)             
            
            count += 1
            #print(count)
        return count
    def video_upload1(self):
        vidcap = cv2.VideoCapture(self.videoname)
        success,image = vidcap.read()
        count = 0
        while(success):
            #cv2.imwrite(os.path.join('C:/videooupload - Copy/my-app/backend/public/video','frame%d.jpg' % count), image)
            frame_name = "frame%d.jpg" % count
            cv2.imwrite(os.path.join('C:/videooupload - Copy/my-app/public/images/video2/', frame_name), image)
            


           # cv2.imwrite("frame%d.jpg" % count, image)             
            success,image = vidcap.read()
            count += 1
            #print(count)
        return count
                
            
vedio1=video(latest_file)


# Set the directory you want to count folders in

# directory = 'C:/videooupload - Copy/my-app/public/images/'

#         # Use listdir to get a list of all items in the directory
# items = os.listdir(directory)

#         # Initialize a counter for the number of folders

# folder_count = 0

#         # Iterate over the items and increment the counter for each item that is a directory
# for item in items:
#     if os.path.isdir(os.path.join(directory, item)):
#         folder_count += 1

#         #Print the count of folders
# print(f'Number of folders: {folder_count}')
# print("video"+str(folder_count+1))
        
        
#         # folder_path = '/home/user/documents/'

#         # check if the folder already exists
#         # if not os.path.exists(folder_path + folder_name):
#         # create the folder
# os.makedirs(directory + "video"+str(folder_count+1))
vedio1.video_upload()
# vedio1.video_upload1()

# source_directory = 'C:/videooupload - Copy/my-app/backend/controllers/data.txt'
# destination_directory = 'C:/videooupload - Copy/my-app/public/images/'+ "video"+'10'+'/'+'data.txt'

# shutil.copy(source_directory, destination_directory)

# print("File copied successfully from {} to {}".format(source_directory, destination_directory))
# print("hello3")