
	import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
	import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

	const firebaseConfig = {
	  apiKey: "AIzaSyD1KWkU55ceJ1WBSsvfEI_0nawPnP4t2E8",
	  authDomain: "k9sgacharelease.firebaseapp.com",
	  databaseURL: "https://k9sgacharelease-default-rtdb.firebaseio.com",
	  projectId: "k9sgacharelease",
	  storageBucket: "k9sgacharelease.firebasestorage.app",
	  messagingSenderId: "708327630007",
	  appId: "1:708327630007:web:31ccaadbdc8e7c58c1d932"
	};

	export const app = initializeApp(firebaseConfig);
