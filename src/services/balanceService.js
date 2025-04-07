import {
  collection,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebase"; // dein Firestore-Init

export async function updateUserBalance(groupId, userId, delta) {
  const balanceRef = doc(db, "groups", groupId, "balances", userId);
  const balanceSnap = await getDoc(balanceRef);

  if (balanceSnap.exists()) {
    const currentBalance = balanceSnap.data().balance || 0;
    await updateDoc(balanceRef, {
      balance: currentBalance + delta,
    });
  } else {
    await setDoc(balanceRef, { balance: delta });
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
