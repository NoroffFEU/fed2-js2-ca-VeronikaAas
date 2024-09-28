import { findPostID } from "./extra";
import { readPost } from "../api/post/read";

export async function populateForm() {
    const id = findPostID();
    const post = await readPost(id);
    
    document.getElementById("title").value = post.title;
    document.getElementById("mediaURL").value = post.media.url;
    document.getElementById("mediaALT").value = post.media.alt;
    document.getElementById("body").value = post.body;
    document.getElementById("tags").value = post.tags;
}