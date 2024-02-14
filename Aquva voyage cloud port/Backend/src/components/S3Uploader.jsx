import AWS from 'aws-sdk';
import { useState } from 'react';
const S3Uploader =() => {
    const[data,setdata]=useState

    const config = {
        bucketName:import.meta.env.AWS_BUCKET_NAME,
        dirName:"copy folder name",
        region: import.meta.env.AWS_BUCKET_REGION,
        accessKeyId: import.meta.env.AWS_ACCESS_KEY_ID,
        secretAccessKey:import.meta.env.AWS_SECRET_ACCESS_KEY
    }
    const handleFileUpload = (event) => {
    const file=(event.target.files[0]);
    if(!config.bucketName || !config.region ||!config.accessKeyId ||!config.secretAccessKey){
        console.error("AWS configuration is incomplete");
        return;
    }
    AWS.config.update({
        accesskeyId: config.accesskeyId,
        secretAccessKey: config.secretAccessKey,
        region: config.region
    })
    //console.log(file);
    const S3=new AWS.S3();
    const reader=new FileReader();
    reader.onload=()=>{
        const fileBuffer = reader.result;
        S3.upload({
            Bucketucket: config.bucketName,
            Key: `$(config.dirName)/$(file.name)`,
            Body: fileBuffer,
            ACL: 'public-read',
            ContentType: 'image/svg+xml'  //can replace svg to jpeg
        },(err,uploadData)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(uploadData);
            }
        })
    }
    }
    return (
        <div>
            <input type="file" onChange={handleFileUpload}/>
            <ing src={data} alt="uploaded data" width       
        </div>
    )
}
export default S3Uploader


