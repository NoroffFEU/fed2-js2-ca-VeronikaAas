export function setMediaObject(stringURL, stringAlt) {
    const media = {
       url: stringURL,
       alt: stringAlt
     }

     if (stringURL === "") {
      return null;
     } else {
       return media;
      }
   }

   export function stringToArray(inputString) {
    return inputString.trim().split(",").map(item => item.trim());
  }

  export function findPostID() {
    const urlParams = new URLSearchParams(window.location.search);
    const postID = urlParams.get("id");
    return postID; 
}