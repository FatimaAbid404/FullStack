#print("hello")
import os
from os import listdir
from os.path import isfile, join
from PIL import Image
import easyocr
import cv2
lines=[]
dirpath="C:\\Users\\Usman\\Downloads\\EAST1\\tmp\\result\\"
#print("hello2")

import shutil


src_dir = 'C:/Users/Usman/Downloads/EAST1/tmp/result/'
dst_dir = 'C:/Users/Usman/Downloads/EAST1/tmp/result1/'

lines=[]
dirpath="C:\\Users\\Usman\\Downloads\\EAST1\\tmp\\result\\"
#print("hello2")

# import shutil

# src_dir = 'C:/Users/Usman/Downloads/EAST1/tmp/result/'
# dst_dir = 'C:/Users/Usman/Downloads/EAST1/tmp/result1/'

def count_images(src_dir):
    count = 0
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith(('.png', '.jpg', '.jpeg')):
                count += 1
    return count

print(count_images(src_dir))

# List of image names
frames = []

for i in range(count_images(src_dir)):
    frame_name = "frame" + str(i*15)+".jpg"
    frames.append(frame_name)

    print(frames)


# # Iterate over the list of image names and copy each image
# for image_name in frames:
#   shutil.copy(src_dir + image_name, dst_dir)

# List of image names
image_names = ['frame0.jpg', 'frame15.jpg']

# # Iterate over the list of image names and copy each image
for image_name in frames:
  shutil.copy(src_dir + '/' + image_name, dst_dir)

# from PIL import Image
# count=0
# folder_dir = "C:\\Users\\Usman\\Downloads\\EAST1\\tmp\\result\\"

# for images in os.listdir(folder_dir):

#     img = Image.open('C:/Users/Usman/Downloads/EAST1/tmp/result/frame%d.jpg' % count)

#     img = img.save('C:/Users/Usman/Downloads/new1/frame%d.jpg' % count)
#     count=count+1


lines=[]
os.remove("C:/videooupload - Copy/my-app/backend/controllers/Text.txt")

directory = 'C:/videooupload - Copy/my-app/public/images/'

        # Use listdir to get a list of all items in the directory
items = os.listdir(directory)

        # Initialize a counter for the number of folders
folder_count = 0

        # Iterate over the items and increment the counter for each item that is a directory
for item in items:
    if os.path.isdir(os.path.join(directory, item)):
        folder_count += 1

       
print(f'Number of folders: {folder_count}')
# directory = 'C:/videooupload - Copy/my-app/public/images/'+ "video"+str(folder_count+1);


dirpath='C:/Users/Usman/Downloads/EAST1/tmp/result1/'
def generateText(imagePath):
    reader = easyocr.Reader(['en'], gpu=False)
    image = cv2.imread(os.path.join(dirpath,imagePath))
    result = reader.readtext(os.path.join(dirpath,imagePath))
    with open('Text.txt', 'a') as f:
        print("hi")
        for line in result:
            
            print(str(line[1].lower()))
            f.write(str(line[1].lower()))
            f.write('#')
            f.write('\n')
   # print("completed")

allImages =os.listdir(dirpath)
for i in allImages:
    generateText(i)

source_directory = 'C:/videooupload - Copy/my-app/backend/controllers/Text.txt'
destination_directory = 'C:/videooupload - Copy/my-app/public/images/'+ "video"+str(folder_count)+'/'+'Text.txt'

shutil.copy(source_directory, destination_directory)

print("File copied successfully from {} to {}".format(source_directory, destination_directory))
print("hello3")

# string=""
# f = open("data.txt", "r")
# string=f.read()

# only_alpha = ""

# ## looping through the string to find out alphabets
# for char in string:

#     ## ord(chr) returns the ascii value
#     ## CHECKING FOR UPPER CASE
#     if ord(char) >= 65 and ord(char) <= 90:
#         only_alpha += char
#     ## checking for lower case
#     elif ord(char) == 32:
#         only_alpha += char
#     elif ord(char) >= 97 and ord(char) <= 122:
#          only_alpha += char

  
# import re
# p=re.sub("\s\s+" , " ",only_alpha)

# wordd=p.lower()
# print("hello4")
