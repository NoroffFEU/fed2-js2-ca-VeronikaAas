import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function deletePost(id) {
  try {
    const response = await fetch(API_SOCIAL_POSTS + "/" + id, {
      method: "DELETE",
      headers: headers(),
    });
    if (response.ok) {
      alert("Post Deleted");
    }
  } catch (error) {
    alert("Something went wrong trying to delete post");
    console.log(error);
  }
}