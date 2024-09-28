import { updatePost } from "../../api/post/update";
import { setMediaObject, stringToArray, findPostID } from "../../utilities/extra";

export async function onUpdatePost(event) {
    event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());
  
       const tagsAsArray = stringToArray(formValues.tags);
       const mediaAsObject = setMediaObject(formValues.mediaURL, formValues.mediaALT);
    
       const id = findPostID();
      
       const postData = {
          title: formValues.title,
          media: mediaAsObject,
          body: formValues.body,
          tags: tagsAsArray
      }
  
    updatePost(id, postData); 
}