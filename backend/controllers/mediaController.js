
const Media = require("../Models/Media");
const mmedia = require("../Models/mmedia");
const { spawn }=require('child_process');

exports.getAll = async (req, res) => {
  try {
    
const media = await Media.find();
const pmedia = await mmedia.find();
const { q } = req.query;

const largeDataSet = [];
var withoutLast3=""

 const keys = ["name"];
//  const keys1 = ["categories"];

// console.log("fat",media.length)
//  var result = JSON.stringify(pmedia);
//  console.log(result)

// for (var i = 0, emp; i < result.employees.length; i++) {
//    emp = result.employees[i];
//    employees[ emp.id ] = emp;
// }

//  const childPython=spawn('python',['C:\\videooupload - Copy\\my-app\\backend\\controllers\\example.py',JSON.stringify(pmedia),q]);
//  childPython.stdout.on('data',(data)=>{
  //largeDataSet.push(data);
//   var myJSON=JSON.stringify(`${largeDataSet}`);
//  console.log(`stdout:${largeDataSet}`);

//    myJSON= myJSON .substring(100, 1);

//     const breakpoint = "\\r\\n"

//    const splitted = myJSON.split(breakpoint);


  const search = (data,value) => {

      h= data.filter(
      (item) =>keys.some((key) => item[key].toLowerCase().includes(value))
      
    );
    // console.log("hiiii",pmedia[0])
    
   // const result = h.filter(checkAdult);
//  console.log("value",h)
    return h
  };

  


  const keys1 = ["categories"];

  const keys2 = ["images"];

    const search2 = (data) => {
      return data.filter((item) =>
        keys1.some((key) => item[key].toLowerCase().includes(q))
      );
    };
//console.log(media)

  // const search1 = (data) => {
  //   var h=[]
  //   for (let i = 1; i < splitted.length; i++) {
  //     h.push(search(media,splitted[i]))
  //   }
  //   // console.log("byeee",h[1])
  //   // console.log("hii",media[1].keywords)
  //   return h
  // };   
  function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  }
  
 // console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']

  function func(media){

  //   h=search1(media)
  
  //   if(h.length<2){
  //     h[1] = h[0].concat(h[1]);
  //   }
  //   else{
  //     h[1] = h[0].concat(h[1]);

  //  for (let i = 2; i < h.length; i++){
  //   h[1]=h[1].concat(h[i]);
    
  // }
  ranked=[]
  let rai=0
  rank=[]
  // const word = "she is ok";
   
  //  console.log("oooooo",subwords)

   for(let i = 0; i < media.length; i++){
    
    if(media[i].keywords.toLowerCase().includes(q)){
    //  console.log('Found word bird at index ' + i);
        ranked[rai]=media[i]
        rank[rai]=i
        
        rai=rai+1;
    }
    }
    const subwords = q.split(" ");
  for (let i = 0; i < media.length; i++) {
   
    const arrSubwords = media[i].keywords.toLowerCase().split(" ");
    // console.log("sub words",arrSubwords)
    if (rank.includes(i)) {
      console.log("i is in the array");
      } else {
      //  console.log("i is not in the array");
      
    for (let j = 0; j < subwords.length; j++) {
      if (arrSubwords.includes(subwords[j])) {
        //  console.log(`Word found at index ${i}`,media[i].name);
        ranked[rai]=media[i]
        //rank[rai]=i
        rai=rai+1;
        break;
      }
    }
  }
 }

//  console.log("bbbbbbbbbb",ranked)
 // console.log("hi",h[1][1].images)
//  for(let i=0;i<)
  // console.log("kkkk",h[1])
  
  
  for(let i=0;i<ranked.length;i++){
    //console.log("fattttt",q)
    // console.log("keyy",i)
    let index=[]
    let array=[]
    var cc=0
    var bb=0
    for(let j=0;j<ranked[i].key.length;j++){
       
      
        if (ranked[i].key[j].toLowerCase().includes(q)) {
         // console.log("The word Example is in the string.");
          index[bb]=j
          // console.log("indexxx",index[bb],ranked[i].key[j])
          text = j.toString();
          // console.log("jjjjjjjjj",j)
          // console.log("keyyyyyyyy",ranked[i].key[j])
          // console.log("imagessss",ranked[i].images[j])
          array[bb]=filterItems(ranked[i].images,ranked[i].images[j]);
          //console.log("array to be shown",array[bb])
          bb=bb+1

        } 
        else{
          const subwords = q.split(" ");
          for (let k = 0; k < subwords.length; k++) {
            if (ranked[i].key[j].toLowerCase().includes(subwords[k])) {
              // console.log(`Word found at index ${i}`,media[i].name);
              array[bb]=filterItems(ranked[i].images,ranked[i].images[j]);
              // console.log("else",subwords[k])
              // console.log("else keyyyyyyyy",ranked[i].key[j])
              // console.log("else imagessss",ranked[i].images[j])
              //console.log("array to be shown",array[bb])
              bb=bb+1
              break;
            }
          }
        }
        
        // for(let i=0;i<h[1].length;i++){
        //     array[b]=filterItems(h[1][i].images,"612");
        //     b=b+1
        //    }
        //      h[1][1].images=array

      
    }
       ranked[i].images=array
     // ranked[i].videos=media[i].videos
  }
  //let array=[]
  // b=0;
  //  for(let i=0;i<h[1].length;i++){
    // array[0]=filterItems(h[1][i].images,"612");
  //   b=b+1
  //  }
  //    h[1][1].images=array

    //  array[0]=filterItems(h[1][1].images,"612");
    // h[1][1].images=array
     
    //h[1][1].images=h[1][1].images.concat(filterItems(h[1][1].images,"612"));
   // console.log("plplpllplp",h[1][0].images)
     //h[1][0].images=filterItems(h[1][0].images,"images/video4/frames/frame225.jpg")

   //}
  //console.log("bye",filterItems(h[1][1].images,"612"))
  // for (let i =0; i < h.length; i++){
  //  // h[1]=h[1].concat(h[i]);
  //   console.log(h[1][i].name)
  // }
 // console.log(h[1][0].name)

  //}
  



 const myJSON = JSON.stringify(ranked);
 if(myJSON!='[null]'){

 res.json(ranked)
 }
 if(myJSON=='[null]'){
  // console.log(myJSON)
   res.json(search2(media));
  }
 
   
   
}
 q ?  func(media): res.json(media);




  
    
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
// Backendurl/public/videos/file_name.mp4
exports.create = async (req, res) => {
  const media = await Media.find();
  const { name,keywords,categories} = req.body;
  
  let videosPaths = [];
  let vari=1

  if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
    for (let video of req.files.videos) {
      videosPaths.push("/" + video.path);

    }
  }

  try {
  const childPython=spawn('python',['C:\\videooupload - Copy\\my-app\\backend\\public\\videos\\videotoframe.py']);
   childPython.stdout.on('data',(data)=>
   {
  //       console.log(`stdout from video: ${data}`);
        // vari=2;
        // const Name=req.body.name;
        // const Keywords=req.body.name;
        // Media.updateOne({name:"Ayesha"},{$set:{Keywords:"okokokokoko"}});
        // const testFolder = '.C:/Users/Usman/Downloads/EAST1/tmp/frames';
        // let array=[]
        // arrayint=[]
        // var b=0
        // const path = require('path');
        // const fs = require('fs');
        // //joining path of directory 

        // var len=media.length;
        // len=len+1
        // let newVideoPath = "C:/videooupload - Copy/my-app/public/images/video" + len + "/frames";
        
        // const directoryPath ="C:/videooupload - Copy/my-app/public/images/video" + len + "/frames";
        // fs.readdirSync(directoryPath).forEach(file => {
        //   array[b]="images/"+"video"+len+"/frames/"+file
          
        //   str=array[b]
        //   var start = str.indexOf('frame');
        //     var end = str.indexOf('.jpg');
        //     var num = str.substring(start+12, end);
        //     var numInt = parseInt(num);
        //     arrayint[b]=numInt
        //     console.log(arrayint[b])
        //     console.log(array[b])
        //   b=b+1
        // });
        // let i=0
        // let j=0
        // for(i=0;i<b;i++)
        // {		
        //     for(j=i+1;j<b;j++)
        //     {
        //         if(arrayint[i]>arrayint[j])
        //         {
        //             temp =arrayint[i];
        //             temp1=array[i]

        //             arrayint[i]=arrayint[j];
        //             array[i]=array[j];

        //             arrayint[j]=temp;
        //             array[j]=temp1;
        //         }
        //     }
        // }
        // console.log(b)
        // // keyy=[]
        // // keyy.push("shhssshs")
        // // keyy.push("sokoks")
        // // keyy.push("shhssshs")
        // var array1 = fs.readFileSync('C:/videooupload - Copy/my-app/public/images/video'+len+'/Text.txt').toString().split("#");
        // for(let i=0;i<array1.length;i++){
        //     array1[i]=array1[i].replace(/\s+/g, ' ').trim();
        //     array1[i] = array1[i].replaceAll(',', '');
        // }

        // let text = array1.toString();
        // var arrayy = fs.readFileSync('C:/videooupload - Copy/my-app/public/images/video'+len+'/AudioToText.txt').toString();

        // text = text.replaceAll(',', '');
        // text = text.replace(/\s+/g, ' ').trim()
        // text=text+arrayy.toString()
        // //console.log(text)

        // const createdMedia=Media.create({
        //     name,
        //     keywords:text,
        //     categories,
        //     images:array,
        //     key:array1,
        //     videos: videosPaths,
        //   });
        // const createdmedia=mmedia.create({
        //     name,
        //     keywords:text
        //   });
        // console.log(vari)
   })
  //  const Name=req.body.name;
  //  const Keywords=req.body.name;

   
  // varr=videosPaths[0]
  // varr=varr.replace("/public\videos\",")
  //  
  const childPython1=spawn('python',['C:\\videooupload - Copy\\my-app\\backend\\controllers\\command.py']);
  childPython1.stdout.on('data',(data)=>{
       console.log(`stdout from command: ${data}`);
       vari=2;
        const Name=req.body.name;
        const Keywords=req.body.name;
       // Media.updateOne({name:"Ayesha"},{$set:{Keywords:"okokokokoko"}});
        const testFolder = '.C:/Users/Usman/Downloads/EAST1/tmp/frames';
        let array=[]
        arrayint=[]
        var b=0
        const path = require('path');
        const fs = require('fs');
        //joining path of directory 

        var len=media.length;
        len=len+1
        let newVideoPath = "C:/videooupload - Copy/my-app/public/images/video" + len + "/frames";
        
        const directoryPath ="C:/videooupload - Copy/my-app/public/images/video" + len + "/frames";
        fs.readdirSync(directoryPath).forEach(file => {
          array[b]="images/"+"video"+len+"/frames/"+file
          
          str=array[b]
          var start = str.indexOf('frame');
            var end = str.indexOf('.jpg');
            var num = str.substring(start+12, end);
            var numInt = parseInt(num);
            arrayint[b]=numInt
            console.log(arrayint[b])
            console.log(array[b])
          b=b+1
        });
        let i=0
        let j=0
        for(i=0;i<b;i++)
        {		
            for(j=i+1;j<b;j++)
            {
                if(arrayint[i]>arrayint[j])
                {
                    temp =arrayint[i];
                    temp1=array[i]

                    arrayint[i]=arrayint[j];
                    array[i]=array[j];

                    arrayint[j]=temp;
                    array[j]=temp1;
                }
            }
        }
        console.log(b)
        // keyy=[]
        // keyy.push("shhssshs")
        // keyy.push("sokoks")
        // keyy.push("shhssshs")
        var array1 = fs.readFileSync('C:/videooupload - Copy/my-app/public/images/video'+len+'/Text.txt').toString().split("#");
        for(let i=0;i<array1.length;i++){
            array1[i]=array1[i].replace(/\s+/g, ' ').trim();
            array1[i] = array1[i].replaceAll(',', '');
        }

        let text = array1.toString();
        var arrayy = fs.readFileSync('C:/videooupload - Copy/my-app/public/images/video'+len+'/AudioToText.txt').toString();

        text = text.replaceAll(',', '');
        text = text.replace(/\s+/g, ' ').trim()
        text=text+arrayy.toString()
        //console.log(text)

        const createdMedia=Media.create({
            name,
            keywords:text,
            categories,
            images:array,
            key:array1,
            videos: videosPaths,
          });
        const createdmedia=mmedia.create({
            name,
            keywords:text
          });
        console.log(vari)
    })

//  varr=""
const childPython5=spawn('python',['C:\\videooupload - Copy\\my-app\\backend\\controllers\\AudioToText.py']);
childPython5.stdout.on('data',(data)=>{
     console.log(`stdout from command: ${data}`);
})
 const childPython2=spawn('python',['C:\\videooupload - Copy\\my-app\\backend\\controllers\\result.py']);
  childPython2.stdout.on('data',(data)=>{
       console.log(`stdout from command: ${data}`);
//        const Name=req.body.name;
//         const Keywords=req.body.name;
//         Media.updateOne({name:"Ayesha"},{$set:{Keywords:"okokokokoko"}});
//         const testFolder = '.C:/Users/Usman/Downloads/EAST1/tmp/frames';
//         let array=[]
//         arrayint=[]
//         var b=0
//         const path = require('path');
//         const fs = require('fs');
//         //joining path of directory 

//         var len=media.length;
//         len=len+1
//         // let newVideoPath = "C:/videooupload - Copy/my-app/public/images/video" + len + "/frames";
        
//         const directoryPath ="C:/videooupload - Copy/my-app/public/images/video" + len + "/frames";
//         fs.readdirSync(directoryPath).forEach(file => {
//           array[b]="images/"+"video"+len+"/frames/"+file
          
//           str=array[b]
//           var start = str.indexOf('frame');
//             var end = str.indexOf('.jpg');
//             var num = str.substring(start+12, end);
//             var numInt = parseInt(num);
//             arrayint[b]=numInt
//             console.log(arrayint[b])
//             console.log(array[b])
//           b=b+1
//         });
//         let i=0
//         let j=0
//         for(i=0;i<b;i++)
//         {		
//             for(j=i+1;j<b;j++)
//             {
//                 if(arrayint[i]>arrayint[j])
//                 {
//                     temp =arrayint[i];
//                     temp1=array[i]

//                     arrayint[i]=arrayint[j];
//                     array[i]=array[j];

//                     arrayint[j]=temp;
//                     array[j]=temp1;
//                 }
//             }
//         }
//         console.log(b)
//         // keyy=[]
//         // keyy.push("shhssshs")
//         // keyy.push("sokoks")
//         // keyy.push("shhssshs")
//         var array1 = fs.readFileSync('C:/videooupload - Copy/my-app/public/images/video'+len+'/Text.txt').toString().split("#");
//         for(let i=0;i<array1.length;i++){
//             array1[i]=array1[i].replace(/\s+/g, ' ').trim();
//             array1[i] = array1[i].replaceAll(',', '');
//         }

//         let text = array1.toString();
//         var arrayy = fs.readFileSync('C:/videooupload - Copy/my-app/public/images/video'+len+'/AudioToText.txt').toString();

//         text = text.replaceAll(',', '');
//         text = text.replace(/\s+/g, ' ').trim()
//         text=text+arrayy.toString()
//         //console.log(text)

//         const createdMedia=Media.create({
//             name,
//             keywords:text,
//             categories,
//             images:array,
//             key:array1,
//             videos: videosPaths,
//           });
//         const createdmedia=mmedia.create({
//             name,
//             keywords:text
//           });
//       //  console.log(vari)
   })
 

//     var newText=""
//  const largeDataSet = [];
//  const childPython2=spawn('python',['C:\\videooupload - Copy\\my-app\\backend\\controllers\\result.py']);
//    childPython2.stdout.on('data',(data)=>{
//     largeDataSet.push(data);
//         console.log(`stdout from result: ${data}`);
//         var myJSON=JSON.stringify(`${largeDataSet}`);
//       //   const breakpoint = "\\r\\n"

//       //  const splitted = myJSON.split(breakpoint);
//       const regex = /\\r\\n/g;

// // replace the characters
//        newText = myJSON.replace(regex, ' ');
//   console.log(typeof newText)
  // createdMedia.update({keywords:"she is cute"}, {$set: { keywords:newText}}, {upsert: true})

    

        
   //})
   if(vari==2){
  //  const createdMedia = await Media.create({
  //   name,
  //   keywords:"ok",
  //   categories,
  //   videos: videosPaths,
  // });
  res.json({ message: "Media created successfully", createdMedia });
}



  //  console.log("okokokok",newText)
  

  //   const childPython2=spawn('python',['C:\\videooupload - Copy\\my-app\\backend\\controllers\\result.py']);
  // childPython2.stdout.on('data',(data)=>{
  //      console.log(`stdout from command: ${data}`);
  // })
  

  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};



exports.display = async (req, res) => {
  try {
    const media = await Media.find();
    const { q } = req.query;
    const keys = ["name"];
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      );
    };
    // let var1=[]
    // let med1=await Media.find({name:"friend"});
    // var1.push(med1)
    // console.log({q})
    
   q ? res.json(search(media)) : res.
   json(media);
 // res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};