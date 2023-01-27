# #pip install SpeechRecognition moviepy
# #video to audio conversion
# # Libraries import
# import moviepy.editor as mp
# import speech_recognition as sr 
import glob
import os

list_of_files = glob.glob('C:/videooupload - Copy/my-app/backend/public/videos/*') # * means all if need specific format then *.csv
latest_file = max(list_of_files, key=os.path.getctime)
print(latest_file)

# # It will clip the video 
# # subclip(starttime, endtime) to clip portion of video
# # you can remove the subclip to convert complete video
# clip = mp.VideoFileClip(latest_file)
print("hello")
# # It will write the audio in converted_audio.wav file.
# clip.audio.write_audiofile(r"Convert_audio.wav")
# print("Finished the convertion into audio...")

# #audio to text conversion
# # Libraries import

# # It will read audio file
# audio = sr.AudioFile("Convert_audio.wav")
# print("Audio file read...")

# # Here the magic start
# # create an instance of recognizer as r 
# r = sr.Recognizer()

# with audio as source:
#     audio_file = r.record(source)

# # Here we get our text 
# result = r.recognize_google(audio_file)

# # Now we will store the text in file
# with open('recognizedMy.txt',mode ='w') as file:
#     file.write(result)
