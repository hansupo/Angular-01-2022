import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes, deleteObject  } from "firebase/storage";
import { BehaviorSubject, Subject } from 'rxjs';


  // Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: 'AIzaSyAb6ostC_wGbvHo16erarqai2QExbnYN8s',
  authDomain: 'webshop-hansu.web.app',
  databaseURL: 'https://webshop-hansu-default-rtdb.europe-west1.firebasedatabase.app/',
  storageBucket: 'gs://webshop-hansu.appspot.com'
};
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);

// Points to the root reference
const storageRef = ref(storage);

// Points to 'images'
const imagesRef = ref(storageRef, 'images');

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
const fileName = 'space.jpg';
const spaceRef = ref(imagesRef, fileName);

// File path is 'images/space.jpg'
const path = spaceRef.fullPath;

// File name is 'space.jpg'
const name = spaceRef.name;

// Points to 'images'
const imagesRefAgain = spaceRef.parent;

// Create file metadata including the content type
/** @type {any} */


@Injectable({
  providedIn: 'root'

  
})
export class ImageUploadService {
  uploadedPictureUrl! :any;
  selectedImage! :any;

  uploadComplete! :any;
  uploadComplete2 = new Subject();


  constructor() { }

  metadata = {
    contentType: 'image/jpeg'
  };




  uploadPicture2(file: any) {
    uploadBytes(storageRef, file, this.metadata);
  }

  uploadPicture(file: any) {

      // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, 'images/' + file.name);
  this.selectedImage = storageRef
  const uploadTask = uploadBytesResumable(storageRef, file, this.metadata);

      uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;

        // ...

        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, 
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        this.uploadedPictureUrl = downloadURL;
        this.uploadComplete2.next(true);
        

      });
    }
  );

    }

    deletePicture(wantToDelete: boolean) {
      console.log("wantToDelete true");
      
      const desertRef = this.selectedImage;

      console.log("file:" + desertRef);

      if (wantToDelete) {
              // Delete the file
      deleteObject(desertRef).then(() => {
        // File deleted successfully
        console.log("File deleted successfully");
        
      }).catch((error) => {
        // Uh-oh, an error occurred!
        console.log("error");
      });
      }
    }
  
}

