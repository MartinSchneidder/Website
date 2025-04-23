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
  getDoc,
  setDoc,
} from "firebase/firestore";

//Gruppe erstellen
// Die ID wird auch initial das Codeword zum joinen einer Gruppe
export async function createGroup(name) {
  if (!auth.currentUser) return;

  try {
    // Neue ID generieren
    const groupRef = doc(collection(db, "groups"));
    const groupId = groupRef.id;

    // Dokument mit selbst gesetzter ID anlegen
    await setDoc(groupRef, {
      name,
      ownerId: auth.currentUser.uid,
      members: [auth.currentUser.uid],
      codeword: groupId, // ID als Codeword verwenden
      createdAt: serverTimestamp(),
    });

    console.log("Gruppe erstellt mit ID:", groupId);
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
    const existingMembers = groupDoc.data().members || [];
    if (!existingMembers.includes(user.uid)) {
      await updateDoc(groupRef, {
        members: [...existingMembers, user.uid],
      });
    }

    return true; // Erfolg
  } catch (error) {
    console.error("Fehler beim Gruppenbeitritt:", error);
    throw error;
  }
}

export async function getGroupById(groupId) {
  if (!groupId) {
    console.error("Fehler: Keine groupId erhalten.");
    return null;
  }

  try {
    const groupRef = doc(db, "groups", groupId);
    const groupSnap = await getDoc(groupRef);

    if (groupSnap.exists()) {
      return { id: groupSnap.id, ...groupSnap.data() };
    } else {
      console.warn("Gruppe nicht gefunden:", groupId);
      return null;
    }
  } catch (error) {
    console.error("Fehler beim Laden der Gruppe:", error);
    return null;
  }
}

// Mitglieder einer Gruppe abrufen
export async function getGroupMembers(groupId) {
  const groupRef = doc(db, "groups", groupId);

  try {
    const groupSnap = await getDoc(groupRef);

    if (!groupSnap.exists()) {
      console.error("Gruppe existiert nicht!");
      return [];
    }

    const groupData = groupSnap.data();
    const memberIds = groupData.members || [];

    // Alle Nutzerdaten abrufen
    const memberPromises = memberIds.map(async (userId) => {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);
      return userSnap.exists()
        ? { id: userId, username: userSnap.data().username }
        : null;
    });

    // Warten, bis alle Anfragen abgeschlossen sind
    const members = (await Promise.all(memberPromises)).filter(Boolean);
    return members;
  } catch (error) {
    console.error("Fehler beim Abrufen der Gruppenmitglieder:", error);
    return [];
  }
}
