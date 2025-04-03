import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

// Funktion, um den Benutzernamen anhand der User-ID zu holen
export async function getUserById(userId) {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      return userDoc.data(); // Gibt das gesamte User-Dokument zurück (einschließlich des Usernames)
    } else {
      console.error("User not found!");
      return null;
    }
  } catch (error) {
    console.error("Error getting user:", error);
    return null;
  }
}
