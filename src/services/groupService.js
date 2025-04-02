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
// Der Name wird auch initial das Codeword zum joinen einer Gruppe
export async function createGroup(name, codeword) {
  if (!auth.currentUser) return;

  try {
    const docRef = await addDoc(collection(db, "groups"), {
      name,
      ownerId: auth.currentUser.uid,
      members: [auth.currentUser.uid],
      codeword: codeword,
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

export async function joinGroupByCode(codeword) {
  try {
    // Gruppe mit dem passenden Codewort suchen
    const groupsRef = collection(db, "groups");
    const q = query(groupsRef, where("codeword", "==", codeword));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return false; // Keine passende Gruppe gefunden
    }

    const groupDoc = querySnapshot.docs[0];
    const groupId = groupDoc.id;
    const user = auth.currentUser;

    if (!user) {
      throw new Error("Kein angemeldeter Nutzer.");
    }

    // Nutzer der Gruppe hinzufügen
    const groupRef = doc(db, "groups", groupId);
    await updateDoc(groupRef, {
      members: [...(groupDoc.data().members || []), user.uid],
    });

    return true; // Erfolg
  } catch (error) {
    console.error("Fehler beim Gruppenbeitritt:", error);
    throw error;
  }
}
