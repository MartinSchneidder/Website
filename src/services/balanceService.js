import {
  collection,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebase"; // dein Firestore-Init

export async function updateBalances(groupId, transaction) {
  const { createdBy, members, amount, type } = transaction;

  const groupBalanceRef = (userId) =>
    doc(db, "groups", groupId, "balances", userId);

  const change = parseFloat(amount);

  if (type === "send") {
    // Sender verliert Betrag * Anzahl Empfänger
    const senderRef = groupBalanceRef(createdBy);
    const senderSnap = await getDoc(senderRef);
    const senderBalance = senderSnap.exists() ? senderSnap.data().balance : 0;
    await setDoc(senderRef, {
      balance: senderBalance - change * members.length,
    });

    // Empfänger bekommen je den Betrag
    for (const userId of members) {
      const ref = groupBalanceRef(userId);
      const snap = await getDoc(ref);
      const currentBalance = snap.exists() ? snap.data().balance : 0;
      await setDoc(ref, { balance: currentBalance + change });
    }
  } else if (type === "receive") {
    // Empfänger (currentUser) bekommt Betrag * Anzahl Zahler
    const receiverRef = groupBalanceRef(createdBy);
    const receiverSnap = await getDoc(receiverRef);
    const receiverBalance = receiverSnap.exists()
      ? receiverSnap.data().balance
      : 0;
    await setDoc(receiverRef, {
      balance: receiverBalance + change * members.length,
    });

    // Zahler zahlen je den Betrag
    for (const userId of members) {
      const ref = groupBalanceRef(userId);
      const snap = await getDoc(ref);
      const currentBalance = snap.exists() ? snap.data().balance : 0;
      await setDoc(ref, { balance: currentBalance - change });
    }
  }
}

export async function getGroupBalances(groupId) {
  const balancesRef = collection(db, "groups", groupId, "balances");
  const snapshot = await getDocs(balancesRef);

  const balances = [];
  snapshot.forEach((doc) => {
    balances.push({ id: doc.id, ...doc.data() });
  });

  return balances;
}
