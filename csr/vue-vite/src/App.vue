<template>
	<div class="itzbund container mx-auto my-10 max-w-800px">
		<header class="text-center">
			<div class="grid grid-cols-2 items-center">
				<div class="block m-auto w-40">
					<KolKolibri :_labeled="false"></KolKolibri>
				</div>
				<div>
					<img class="block m-auto h-25" src="./assets/logo.vue.png" alt="Logo vom React Framework" />
				</div>
			</div>
			<strong class="text-2xl">Willkommen zu KoliBri</strong>
		</header>
		<main class="grid md:grid-cols-2 gap-6 p-12">
			<KolAlert :_type="'success'" _label="Dokumentation" _variant="card" :_level="2">
				<KolLink _href="https://public-ui.github.io/" _label="" _target="_blank">
					<KolIcon _label="" _icons="fa-sharp fa-solid fa-book" /> Dokumentation öffnen
				</KolLink>
			</KolAlert>
			<KolAlert :_type="'info'" _label="Theming" _variant="card" :_level="2">
				<KolLink _href="https://public-ui.github.io/docs/concepts/styling/designer" _label="" _target="_blank">
					<KolIcon _label="" _icons="fa-solid fa-palette" /> KoliBri-Designer öffnen
				</KolLink>
			</KolAlert>
			<KolAlert :_type="'warning'" _label="Mitwirken" _variant="card" :_level="2">
				<KolLink _href="https://github.com/public-ui/kolibri/" _label="" _target="_blank">
					<KolIcon _label="" _icons="fa-brands fa-github" /> GitHub öffnen
				</KolLink>
			</KolAlert>
			<KolAlert :_type="'error'" _label="Kontakt" _variant="card" :_level="2">
				<KolLink _href="mailto:kolibri@itzbund.de" _label="" _target="_blank"> <KolIcon _label="" _icons="fa-solid fa-envelope" /> E-Mail schreiben </KolLink>
			</KolAlert>
		</main>
	</div>
</template>

<script lang="ts">
import { KolKolibri, KolLink, KolAlert } from '@public-ui/vue';

export default {
	components: {
		KolKolibri,
		KolLink,
		KolAlert,
	},
	setup() {
		return {
			label: 'My Button',
			on: {
				onClick: console.log,
			},
		};
	},
};
</script>
