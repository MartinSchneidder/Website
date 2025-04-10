<script setup>
import { computed, ref } from "vue";
import { useAuthStore } from "@/pinia/authStore";

import NavBar from "./components/NavBar.vue";
import LoginBar from "./components/LoginBar.vue";

const authStore = useAuthStore();
const user = computed(() => authStore.user);

const isCollapsed = ref(false); // Zustand für die Sidebar

// Funktion zum Ein- und Ausklappen
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
  <div class="app-container">
    <aside class="sidebar" :class="{ collapsed: isCollapsed }">
      <button
        v-if="user"
        class="toggle-btn"
        :class="{ collapsed: isCollapsed }"
        @click="toggleSidebar"
      >
        <span class="arrow">▶<br />▶<br />▶</span>
        <!-- {{ isCollapsed ? "▶" : "◀" }} -->
      </button>
      <NavBar v-if="user" />
      <LoginBar v-else />
    </aside>
    <main class="content" :class="{ expanded: isCollapsed }">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  align-items: stretch;
  height: auto;
  min-height: 100vh;
  padding: 0;
}

.sidebar {
  /* Gradient background */
  background: var(--color-sidebar-background);
  /* Rounded top-right corner */
  border-top-right-radius: 80px;
  /* Border hat Problem, passt nicht, weil 2sidebarshintereinander  */
  /* border-right: var(--color-border) 2px solid; */
  position: fixed;
  /* top: 0; */
  /* left: 0; */

  /* 1/5 der Bildschirmbreite */
  /* min-width: var(--sidebar-min-width);
  max-width: var(--sidebar-max-width); */
  width: clamp(
    var(--sidebar-min-width),
    var(--sidebar-width),
    var(--sidebar-max-width)
  );

  /* background-color: var(--color-sidebar-background); */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: margin-left 0.5s;
}

/* Eingeklappte Sidebar */
.sidebar.collapsed {
  margin-left: calc(
    -0.85 *
      clamp(
        var(--sidebar-min-width),
        var(--sidebar-width),
        var(--sidebar-max-width)
      )
  ); /* Komplett nach links schieben */
}
/* Button zum Ein-/Ausklappen */
.toggle-btn {
  position: fixed;
  top: 0%;
  left: -25px;
  width: 5rem;
  z-index: 1000;
  background-color: transparent;

  border: none;
  outline: none;
  /* border: var(--color-shadow) 2px solid; */
  /* border-radius: 50%; */
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

/* Button verschiebt sich mit der Sidebar */
.toggle-btn.collapsed {
  background-color: #f3f3f3aa;
  /* border: var(--color-shadow) 2px solid; */
  /* margin: 10px; */
}

.content {
  /* Platz für die Sidebar lassen */
  margin-left: clamp(
    var(--sidebar-min-width),
    var(--sidebar-width),
    var(--sidebar-max-width)
  );

  flex-grow: 1; /* Nimmt den restlichen Platz ein */
  overflow-y: auto; /* Scrollbarer Inhalt */
}
.content.expanded {
  margin-left: calc(
    0.15 *
      clamp(
        var(--sidebar-min-width),
        var(--sidebar-width),
        var(--sidebar-max-width)
      )
  );
}

.toggle-btn .arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

.toggle-btn.collapsed .arrow {
  transform: rotate(0deg);
}

.toggle-btn:not(.collapsed) .arrow {
  /* transform: rotate(90deg); */
  transform: rotate3d(0, 10, 0, 180deg);
}
</style>
