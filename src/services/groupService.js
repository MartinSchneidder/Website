import { db, auth } from "@/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  arrayUnion,
  query,
  where,
  getDocs,
} from "firebase/firestore";

//Gruppe erstellen
export async function createGroup(name) {
  if (!auth.currentUser) return;

  try {
    const docRef = await addDoc(collection(db, "groups"), {
      name,
      ownerId: auth.currentUser.uid,
      members: [auth.currentUser.uid],
      createdAt: serverTimestamp(),
    });

    console.log("Gruppe erstellt mit ID:", docRef.id);
  } catch (error) {
    console.error("Fehler beim Erstellen der Gruppe:", error);
  }
}

//Mitglied hinzufügen
export async function addMember(groupId, newUserId) {
  const groupRef = doc(db, "groups", groupId);

  try {
    await updateDoc(groupRef, {
      members: arrayUnion(newUserId),
    });

    console.log("Mitglied hinzugefügt!");
  } catch (error) {
    console.error("Fehler beim Hinzufügen:", error);
  }
}

//Gruppen eines Nutzers abrufen
export async function getUserGroups(userId) {
  const q = query(
    collection(db, "groups"),
    where("members", "array-contains", userId)
  );
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
